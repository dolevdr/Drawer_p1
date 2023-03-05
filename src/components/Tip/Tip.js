import './Tip.css';


const Tip = (props)=>{
    const {title, text} = props; 

    return(
        <div className='tip_container'>
            <b className='left title'>{title}</b>
            <p className='left text'>{text}</p>
        </div>
    )
}

export default Tip;