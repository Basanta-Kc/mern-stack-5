import { useState, useRef } from "react";
import "./App.css";
function App() {
  // let newTodo = "";
  const todoInputRef = useRef(null); // document.getElementById('input")
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(["learn html", "learn php", "learn css"]);
  // const todos = ["learn html", "learn php", "learn css"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = todoInputRef.current.value;
    if (indexToBeEdited == null) {
      todos.push(todo);
    } else {
      todos[indexToBeEdited] = newTodo;
    }
    setTodos([...todos]);
    todoInputRef.current.value = "";
    setNewTodo("");
    setIndexToBeEdited(null);
  };

  const handleChange = (e) => {
    // newTodo = e.target.value;
    setNewTodo(e.target.value + "basanta");
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
      <form onSubmit={handleSubmit}>
        <input ref={todoInputRef} type="text" />
        <button type="submit">
          {indexToBeEdited == null ? "Add" : "Update"}
        </button>
      </form>

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
