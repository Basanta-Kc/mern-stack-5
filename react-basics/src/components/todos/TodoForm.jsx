import Button from "../Button";

function TodoForm({ handleChange, handleSubmit, newTodo, indexToBeEdited }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={newTodo} type="text" onChange={handleChange} />
      <Button
        title={indexToBeEdited == null ? "Add" : "Update"}
        variant="success"
      />
    </form>
  );
}

export default TodoForm;
