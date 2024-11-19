import { useState } from "react";
import "./App.css";
function App() {
  // let newTodo = "";
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(["learn html", "learn php", "learn css"]);
  // const todos = ["learn html", "learn php", "learn css"];

  const handleAdd = () => {
    if (indexToBeEdited == null) {
      todos.push(newTodo);
    } else {
      todos[indexToBeEdited] = newTodo;
    }
    setTodos([...todos]);
    setNewTodo("");
    setIndexToBeEdited(null);
  };

  const handleChange = (e) => {
    // newTodo = e.target.value;
    setNewTodo(e.target.value);
  };

  const handleDelete = (toBeDeletedIndex) => {
    const updatedTodos = todos.filter(
      (todo, index) => index !== toBeDeletedIndex
    );
    setTodos(updatedTodos);
  };

  console.log({ indexToBeEdited });
  return (
    <>
      <input value={newTodo} type="text" onChange={handleChange} />
      <button onClick={handleAdd}>
        {indexToBeEdited == null ? "Add" : "Update"}
      </button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}{" "}
              <button
                onClick={() => {
                  alert(index);
                  handleDelete(index);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  setIndexToBeEdited(index);
                  setNewTodo(todos[index]);
                }}
              >
                EDIT
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
//addevenlister((e) => {})
// count = 0
// setCount(1)  , count 1, 0

// todos = []
// setTodos(todos) = ["larnexpress"]

// todos = ["123", "learnhtml"]

// index = 0 ,
// index =1
// todos = todos.filter((todo, index) => index !== deletedIndex  )
