import React from "react";
import Item from "./Item";
import AddItem from "./AddItem";
import "./ToDoList.css";

const ToDoList = (props) => {
  const [items, setItems] = React.useState([]);

  const deleteItem = (id) => {
    id = parseInt(id);
    setItems((prevValue) => {
      return prevValue.filter((e, i) => i !== id);
    });
  };

  const addItem = (itemText) => {
    setItems((prevValue) => {
      return [...prevValue, itemText];
    });
  };

  return (
    <div className="container">
      <div className="main">
        <h1>{props.title}</h1>
        <AddItem add={addItem} />
        <div className="items">
          {items.map((e, i) => (
            <Item key={i} id={i} content={e} del={deleteItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
