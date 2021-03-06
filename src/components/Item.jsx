import React from "react";
import "./Item.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Item = (props) => {
  const del = () => {
    props.del(props.id);
  };

  return (
    <div className="item-box">
      <IconButton onClick={del} id={props.id} className="delete-button">
        <DeleteIcon />
      </IconButton>
      <span className="item-text">{props.content}</span>
    </div>
  );
};

export default Item;
