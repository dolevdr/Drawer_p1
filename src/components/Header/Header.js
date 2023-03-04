import "./Header.css";


const Header = (props) => {
    const {image, text} = props;

  return (
    <div className="header_container">
      <div className="headline">
        <img className="img_header" src={image} alt="" />
        <h2 className="txt_header">{text}</h2>
      </div>
    </div>
  );
};

export default Header;
