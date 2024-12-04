import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState, useEffect, createContext, useContext } from "react";

const queryClient = new QueryClient();
const AuthUserContext = createContext(null);

export const useAuthUser = () => {
  return useContext(AuthUserContext);
};

const getValueFromLocalstorage = () => {
  const authUser = localStorage.getItem("authUser");
  console.log(typeof authUser, authUser)
  return authUser ? JSON.parse(authUser) : null;
};

function App() {
  const [authUser, setAuthUser] = useState(getValueFromLocalstorage);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  // setUser({name, email, role})
  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthUserContext.Provider>
  );
}

export default App;
