import React from "react";
import "./Item.css";

const Item = (props) => {
  const del = (event) => {
    props.del(event.target.value);
  };

  const updateContent = (event) => {
    const { value, id } = event.target;
    props.update(value, id);
  };

  return (
    <div>
      <input type="checkbox" onClick={del} value={props.id} />
      <input
        className="item"
        id={props.id}
        value={props.content}
        onChange={() => updateContent()}
      />
    </div>
  );
};

export default Item;
