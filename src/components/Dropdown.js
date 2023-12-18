import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      {props.items.map((element) => (
        <p key={props.elements.indexOf(element)} onClick={() => props.handleOnClick(element)}>{element}</p>
      ))}
    </div>
  );
};

export default Dropdown;