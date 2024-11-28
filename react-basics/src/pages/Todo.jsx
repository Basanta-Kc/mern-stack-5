import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";


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
  }, [todos]);

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
      <TodoForm
        handleSubmit={handleSubmit}
        newTodo={newTodo}
        handleChange={handleChange}
        indexToBeEdited={indexToBeEdited}
      />
      <TodoList
        handleDelete={handleDelete}
        todos={todos}
        setIndexToBeEdited={setIndexToBeEdited}
        setNewTodo={setNewTodo}
      />
    </>
  );
}

export default App;
