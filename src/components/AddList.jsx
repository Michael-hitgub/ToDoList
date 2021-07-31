import React from "react";
import "./AddList.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const AddList = (props) => {
  const [newTitle, setNewTitle] = React.useState("");

  const add = () => {
    props.add(newTitle);
    setNewTitle("");
  };

  return (
    <div className="add-list-box">
      <h1>Add List</h1>
      <input
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <IconButton onClick={add}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default AddList;
