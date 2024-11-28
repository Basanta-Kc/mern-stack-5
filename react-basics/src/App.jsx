import { createContext, useState, useContext } from "react";
import Posts from "./pages/Posts";
import { Users } from "./pages/Users";
import Counter from "./Counter";

export const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

function App() {
  const [user, setUser] = useState({
    name: "basanta",
    role: ["admin", "customer"],
  });
  return (
    <>
      <UserContext.Provider value={user}>
        {/* <Users user={user} />
        <Posts /> */}
      </UserContext.Provider>
      <Counter />
    </>
  );
}

export default App;
