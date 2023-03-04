import "./Drawer.css";
import { motion } from "framer-motion";
import Header from "../Header/Header";

import weight from "../../sources/weight_headline.png";
import { AiFillEdit } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import Details from "../Details/Details";
import { GiMedallist } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { TbGauge } from "react-icons/tb";

const Drawer = () => {
  const edit = "Edit";
  const cancel = "Cancel Class";
  const start = window.innerWidth;

  //data
  const text = "Workout of the day";
  const details = [
    {icon:<GiMedallist className="icon-detail"/>, title:"Tom A", subtitle : "Coach"},
    {icon:<BsClock className="icon-detail"/>,title:"16:15", subtitle : "Start Time"},
    {icon:<TbGauge className="icon-detail"/>,title:"3/15", subtitle : "Participants"},
  ]


  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: start }}
      transition={{ velocity: 0.5 }}
      className="drawer_container"
    >
      <span className="edit-cancel">
        <AiFillEdit className="icon" /> <span className="txt">{edit}</span>
      </span>
      <span className="edit-cancel red">
        {" "}
        <SlCalender className="icon" /> <span className="txt">{cancel}</span>
      </span>
      <Header image={weight} text={text} />
      <hr />
      {
        details.map((val, ind)=>(
          <div key={ind} className="details" style={{width:`${40/details.length}%`}}><Details  icon={val.icon} title={val.title} subtitle={val.subtitle} /></div>
        ))
      }
      <hr />
    </motion.div>
  );
};

export default Drawer;
