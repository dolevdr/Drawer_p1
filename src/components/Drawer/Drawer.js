import "./Drawer.css";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Details from "../Details/Details";
import Tip from "../Tip/Tip";
import Search from "../Search/Search";
import { useCallback, useState } from "react";
import Participant from "../participant/participant";
import { AiFillEdit } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";

//import data
import {
  mock_participants,
  mock_header,
  mock_users_details,
  mock_tip,
} from "../../Data/Data";

const Drawer = () => {
  const edit = "Edit";
  const cancel = "Cancel Class";
  const start = window.innerWidth;

  const [participants, setParticipants] = useState(mock_participants);

  const handleChange = useCallback(
    (id) => {
      participants
        .filter((obj) => obj.id === id)
        .map((val) => {
          val.curr = !val.curr;
          val.checked = false;
          return val;
        });
      setParticipants([...participants]);
    },
    [participants]
  );

  const handleCheck = useCallback(
    (id) => {
      participants
        .filter((obj) => obj.id === id)
        .map((val) => (val.checked = !val.checked));
      setParticipants([...participants]);
    },
    [participants]
  );

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
      <Header image={mock_header.img} text={mock_header.text} />
      <hr />
      {mock_users_details.map((val, ind) => (
        <div
          key={ind}
          className="details"
          style={{ width: `${40 / mock_users_details.length}%` }}
        >
          <Details icon={val.icon} title={val.title} subtitle={val.subtitle} />
        </div>
      ))}
      <hr />
      <Tip title={mock_tip.title} text={mock_tip.text} />
      <hr />
      <div>
        <Search
          arr={participants.filter((obj) => obj.curr === false)}
          handleChange={handleChange}
        />
      </div>
      {participants
        .filter((obj) => obj.curr === true)
        .map((val, ind) => (
          <Participant
            key={ind}
            index={val.id}
            img={val.img}
            fullName={val.fullName}
            handleChange={handleChange}
            handleCheck={handleCheck}
            checked={val.checked}
          />
        ))}
    </motion.div>
  );
};

export default Drawer;
