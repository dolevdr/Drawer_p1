import './participant.css';
import { BsWhatsapp, BsTrash } from "react-icons/bs";
import { useState } from 'react';



const Participant = (props) =>{
    const [isChecked, setCheck] = useState(false);

    const {index, img, fullName, handleChange} = props;
    // const check = (!isChecked) ? 'Check In' : 'Checked';
    const bt_style = (!isChecked) ? {name:'Check In', id:'green'} : {name:'Checked', id:'white'} ; 
    return (
        <div className='participant_container'>
            <img className='face' src={img} alt='' />
            <span className='full'><b>{fullName}</b></span>
            <button id={bt_style.id} onClick={()=>setCheck(!isChecked)} className='check'>{bt_style.name}</button>
            <BsWhatsapp className='whatsapp' color='green' />
            <BsTrash onClick={()=>handleChange(index)} className='garbage' color='red'/>
        </div>
    )
}

export default Participant;