import "./App.css";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useOptimistic } from "react";

const updateUser = async (username) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  if (username.length < 4)
    throw new Error("username shoulbe have atleast 4 character");
  return username;
};

// form actions
function App() {
  const [state, actionFunction] = useActionState(updateForm, {
    name: "default",
    error: null,
  });
  const [updatedUserName, setUpdatedUserName] = useOptimistic(state.name);

  async function updateForm(prevState, formData) {
    try {
      const username = formData.get("username");
      setUpdatedUserName(username);
      await updateUser(username);
      return { name: username, error: null };
    } catch (error) {
      return {
        name: prevState.name,
        error,
      };
    }
  }

  return (
    <>
      <h2>Profile Page {updatedUserName}</h2>
      <form action={actionFunction}>
        <input type="text" name="username" />
        {state.error && <p>{state.error.message}</p>}
        <Button />
      </form>
    </>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return <button type="submit"> {pending ? "Updating..." : "Update"}</button>;
}

export default App;
