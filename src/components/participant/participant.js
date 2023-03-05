import './participant.css';
import { BsWhatsapp, BsTrash } from "react-icons/bs";

const Participant = (props) =>{
    const {index, img, fullName, handleChange, handleCheck , checked} = props;

    const bt_style = (!checked) ? {name:'Check In', id:'green'} : {name:'Checked', id:'white'} ; 
    return (
        <div className='participant_container'>
            <img className='face' src={img} alt='' />
            <span className='full'><b>{fullName}</b></span>
            <button id={bt_style.id} onClick={()=>handleCheck(index)} className='check'>{bt_style.name}</button>
            <BsWhatsapp className='whatsapp' color='green' />
            <BsTrash onClick={()=>handleChange(index)} className='garbage' color='red'/>
        </div>
    )
}

export default Participant;