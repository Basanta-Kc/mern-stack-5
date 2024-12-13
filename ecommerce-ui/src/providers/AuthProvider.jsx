import { useState, useEffect, createContext, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";

const AuthUserContext = createContext(null);

export const useAuthUser = () => {
  return useContext(AuthUserContext);
};

const getValueFromLocalstorage = () => {
  const authUser = localStorage.getItem("authUser");
  console.log(typeof authUser, authUser);
  return authUser ? JSON.parse(authUser) : null;
};

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(getValueFromLocalstorage);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export default AuthProvider;

