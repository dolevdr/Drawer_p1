import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import "./Home.css";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const isOpen = open ? "open" : "";


  return (
    <>
      <div
        className="home_container"
        id={isOpen}
        onClick={handleOpen}
      ></div>
      {open ? (
        <div className="drawer">
          <Drawer />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Home;
