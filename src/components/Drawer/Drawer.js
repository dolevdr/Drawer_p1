import "./Drawer.css";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Details from "../Details/Details";
import Tip from "../Tip/Tip";

//import data
import weight from "../../sources/weight_headline.png";
import dagan from '../../sources/Dagan.png';
import eden from '../../sources/Eden.png';
import yoni from '../../sources/Yoni.png';
import tom from '../../sources/Tom.png';
import tomer from '../../sources/Tomer.png';
import dana from '../../sources/Dana.png';
import { AiFillEdit } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { GiMedallist } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { TbGauge } from "react-icons/tb";
import Participant from "../participant/participant";
import { useCallback, useState } from "react";
import Search from "../Search/Search";


const Drawer = () => {
  const edit = "Edit";
  const cancel = "Cancel Class";
  const start = window.innerWidth;
 
 
  const [participants, setParticipants] = useState([
    {id:0, img:dagan, fullName:"Dagan Lev", curr:true, checked:false},
    {id:1, img:eden, fullName:"Eden Elian", curr:true, checked:false},
    {id:2, img:yoni, fullName:"Yoni Yatziv", curr:true, checked:false},
    {id:3, img:tom, fullName:"Tom Levi", curr:false, checked:false},
    {id:4, img:tomer, fullName:"Tomer Cohen", curr:false, checked:false},
    {id:5, img:dana, fullName:"Dana Tomi", curr:false, checked:false},
  ]);

  const handleChange = useCallback((id) =>{
    participants.filter((obj)=>obj.id===id).map((val)=>val.curr = !val.curr);
    setParticipants([...participants]);
  },[participants]);
  
  const handleCheck = useCallback((id) =>{
    participants.filter((obj)=>obj.id===id).map((val)=>val.checked = !val.checked);
    setParticipants([...participants]);
  },[participants]);


  //data
  const header = {text : "Workout of the day", img:weight};
  const users_details = [
    {icon:<GiMedallist className="icon-detail"/>, title:"Tom A", subtitle : "Coach"},
    {icon:<BsClock className="icon-detail"/>,title:"16:15", subtitle : "Start Time"},
    {icon:<TbGauge className="icon-detail"/>,title:"3/15", subtitle : "Participants"},
  ];
  const tip={title:"You Should Know...", text:"Dagan & Eden which participates in the class have a debt"};
 
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
      <Header image={header.img} text={header.text} />
      <hr />
      {
        users_details.map((val, ind)=>(
          <div key={ind} className="details" style={{width:`${40/users_details.length}%`}}><Details  icon={val.icon} title={val.title} subtitle={val.subtitle} /></div>
        ))
      }
      <hr />
      <Tip title={tip.title} text={tip.text} />
      <hr />
      <div>
        <Search arr={participants.filter((obj)=>obj.curr===false)} handleChange={handleChange}/>
      </div>
      {
        participants.filter((obj)=>obj.curr===true).map((val, ind)=>(
          <Participant key={ind} index={val.id} img={val.img} fullName={val.fullName} handleChange={handleChange} handleCheck={handleCheck} checked={val.checked}/>
        ))
      }
    </motion.div>
  );
};

export default Drawer;
