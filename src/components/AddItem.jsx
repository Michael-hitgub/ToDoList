import React from "react";
import "./AddItem.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const AddItem = (props) => {
  const [newItem, setNewItem] = React.useState("");

  const submit = () => {
    props.add(newItem);

    setNewItem("");
  };

  return (
    <div className="add-item-box">
      <input
        className="add-item-text"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <IconButton onClick={submit}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default AddItem;
