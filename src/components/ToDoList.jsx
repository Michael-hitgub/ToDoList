import React from "react";
import Item from "./Item";
import "./ToDoList.css";

const ToDoList = (props) => {
  const [items, setItems] = React.useState([]);

  const deleteItem = (id) => {
    setItems((prevValue) => {
      return prevValue.filter((e, i) => i !== id);
    });
  };

  const updateItems = (value, id) => {
    let oldItems = [...items];
    let update = items[id]; //// TODO: decide between an array and an array of objects for the items

    // setItems((prevValue) => {
    //   return [{ ...prevValue }, { [id]: value }];
    // });
  };

  return (
    <div className="main">
      {items.map((e, i) => (
        <Item
          key={i}
          id={i}
          content={e.content}
          del={deleteItem}
          update={updateItems}
        />
      ))}
    </div>
  );
};

export default ToDoList;
