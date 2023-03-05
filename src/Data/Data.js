import weight from "../sources/weight_headline.png";
import dagan from "../sources/Dagan.png";
import eden from "../sources/Eden.png";
import yoni from "../sources/Yoni.png";
import tom from "../sources/Tom.png";
import tomer from "../sources/Tomer.png";
import dana from "../sources/Dana.png";
import { GiMedallist } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { TbGauge } from "react-icons/tb";

export const mock_participants = [
  { id: 0, img: dagan, fullName: "Dagan Lev", curr: true, checked: false },
  { id: 1, img: eden, fullName: "Eden Elian", curr: true, checked: false },
  { id: 2, img: yoni, fullName: "Yoni Yatziv", curr: true, checked: false },
  { id: 3, img: tom, fullName: "Tom Levi", curr: false, checked: false },
  { id: 4, img: tomer, fullName: "Tomer Cohen", curr: false, checked: false },
  { id: 5, img: dana, fullName: "Dana Tomi", curr: false, checked: false },
];

export const mock_header = { text: "Workout of the day", img: weight };

export const mock_users_details = [
  {
    icon: <GiMedallist className="icon-detail" />,
    title: "Tom A",
    subtitle: "Coach",
  },
  {
    icon: <BsClock className="icon-detail" />,
    title: "16:15",
    subtitle: "Start Time",
  },
  {
    icon: <TbGauge className="icon-detail" />,
    title: "3/15",
    subtitle: "Participants",
  },
];
export const mock_tip = {
  title: "You Should Know...",
  text: "Dagan & Eden which participates in the class have a debt",
};
