import "./Header.css";
import { AiFillEdit } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";

const Header = (props) => {
    const {image, text} = props;
    const edit = 'Edit';
    const cancel = 'Cancel Class';
  return (
    <>
      <span className="edit-cancel">
        <AiFillEdit /> {edit}
      </span>
      <span className="edit-cancel red">
        {" "}
        <SlCalender /> {cancel}
      </span>
      <div className="headline">
        <img src={image} alt="" />
        <h2>{text}</h2>
      </div>
    </>
  );
};

export default Header;
