import React from "react";

const Selector = ({ type, setType }) => {
  const selector = (e) => {
    setType(e.target.value);
  };
  return (
    <div>
      <select onChange={selector} className="form-select">
        <option value={type} selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default Selector;
