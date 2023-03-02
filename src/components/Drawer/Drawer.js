import './Drawer.css';
import {motion} from 'framer-motion';

import weight from '../../sources/weight_headline.png';
import Header from '../Header/Header';


const Drawer = () =>{
    const start = window.innerWidth;
    const text = 'Workout of the day';

    return (
        <motion.div animate={{x:0}} initial={{x:start}} transition={{ velocity: 0.5}} className='drawer_container'>
            <Header image={weight} text={text}/>
        </motion.div>
    )
}

export default Drawer;