import React from "react";
import ToDoList from "./ToDoList";
import "./App.css";
import AddList from "./AddList";

const App = () => {
  const [listTitles, setListTitles] = React.useState([]);

  const addTitle = (newTitle) => {
    setListTitles((prevValues) => [...prevValues, newTitle]);
  };

  return (
    <div>
      <AddList add={addTitle} />
      {listTitles.map((e, i) => (
        <ToDoList title={e} key={i} id={i} />
      ))}
    </div>
  );
};

export default App;
