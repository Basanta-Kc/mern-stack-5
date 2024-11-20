import { useState, useEffect } from "react";
import "./App.css";

// setState(2) setState((prev) => {  return 2})
// useState(0) useState(() => {
// })

const getValueFromLocalstorage = () => {
  const todos = localStorage.getItem("todos");
  return JSON.parse(todos);
};

function App() {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getValueFromLocalstorage);

  // useEffect(() => {
  //   console.log("first useefeect");
  // });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // useEffect(() => {
  //   console.log("second useeffect");
  // }, []);

  // useEffect(() => {
  //   console.log("third useeffect");
  // }, [newTodo]);

  // useEffect(() => {
  //   console.log("fourth effect");
  // }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    setNewTodo(e.target.value);
  };

  const handleDelete = (toBeDeletedIndex) => {
    const updatedTodos = todos.filter(
      (todo, index) => index !== toBeDeletedIndex
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={newTodo} type="text" onChange={handleChange} />
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
