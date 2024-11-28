import { useQuery } from "../hooks/useQuery";
import { useUser } from "../App";

function ActionButtons() {
  const user = useUser();
  console.log("acton button", user);
  return (
    <>
      {user.role.includes("admin") && (
        <>
          {" "}
          <button>edit</button>
          <button>delete</button>
        </>
      )}
      {user.role.includes("customer") && <button>view</button>}
    </>
  );
}

export function Users() {
  const {
    state,
    data: users,
    errorMssg,
  } = useQuery("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <h2>Users:</h2>
      {state === "loading" && <p>loading</p>}
      {state === "error" && <p>{errorMssg}</p>}
      {state === "success" && (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>
              {name} <ActionButtons />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
