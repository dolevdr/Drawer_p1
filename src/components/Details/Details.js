import './Details.css';


const Details = (props) =>{
    const {icon, title, subtitle} = props;

    return(
        <div className='details_container'>
            {icon}<br />
            <h3 className='margTop'>{title}</h3>
            <span className='grey margTop'>{subtitle}</span>
        </div>
    )

}

export default Details;