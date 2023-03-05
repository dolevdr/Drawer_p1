import "./Search.css";
import Select from "react-select";
import { useState } from "react";

const Search = (props) => {
  const [selected, setSelected] = useState(null);
  const { arr, handleChange } = props;
  const part = "Participants";

  const options = arr.map((v, i) => ({
    value: v.id,
    label: (
      <div className="label">
        <img className="face" src={v.img} alt="" />
        <span>
          <b>{v.fullName}</b>
        </span>
      </div>
    ),
  }));
  return (
    <div className="search_container">
      <div className="part">
        <b>{part}:</b>
      </div>
      <Select
        isClearable
        placeholder="Add client"
        className="select"
        onChange={(newVal) => {
          setSelected(newVal.value);
          handleChange(newVal.value);
        }}
        value={selected}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "green",
            primary: "black",
          },

        })}
      />
    </div>
  );
};

export default Search;
