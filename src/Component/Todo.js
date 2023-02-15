import React, { useState } from "react";
import TodoList from "./TodoList";
import './Todo.css'

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  const AddData = () => {
    if (!input) {
      alert("your input Field Empty");
    } else if (input && !toggle) {
      setItems(
        items.map((ele) => {
          if (ele.id === isEdit) {
            return { ...ele, name: input };
          }
          return ele;
        })
      );
      setToggle(true);
      setInput("");
      setIsEdit(null);
    } else {
      const InputID = { id: new Date().getTime().toString(), name: input };
      setItems([...items, InputID]);
      setInput("");
    }
  };

  const DelData = (id) => {
    const updatedDel = items.filter((cur) => id !== cur.id);
    setItems(updatedDel);
  };

  const EdData = (id) => {
    const updatedEdit = items.find((cur) => cur.id === id);
    setToggle(false);
    setInput(updatedEdit.name);
    setIsEdit(id);
  };

  const ClearData = () => setItems([]);

  return (
    <div className="Todo">
      <h1>Todo App </h1>
      <div className="Add_Input">
        <input
          type="text"
          placeholder="Add Items..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {toggle ? (
          <button onClick={AddData}>
            <i className="fas fa-add"></i>
          </button>
        ) : (
          <button onClick={AddData}>
            <i className="fas fa-edit"></i>
          </button>
        )}
      </div>

      <TodoList items={items} DelData={DelData} EdData={EdData} />
      <button onClick={ClearData}>Clear All <i className="fas fa-trash"></i></button>
    </div>
  );
};

export default Todo;
