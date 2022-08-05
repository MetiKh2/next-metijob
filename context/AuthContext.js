import  { useContext, createContext, useState, useEffect } from "react";
import { getUser } from './../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
    const getUserFromLocalStorage=()=>{
            const userStringify = localStorage.getItem("user");
            if (!userStringify) return null;
           setUser(JSON.parse(userStringify));
    }
    const getTokenLocalStorage=()=>{
      const tokenStringify = localStorage.getItem("token");
      if (!tokenStringify) return null;
     setToken(tokenStringify);
}
    useEffect(() => {
      getUserFromLocalStorage()
      getTokenLocalStorage()
    }, [])
    const logoutUser=()=>{
      setUser(null);
      setToken(null);
      localStorage.removeItem("user")
      localStorage.removeItem("token");
      window.location.reload();
    }
  return (
    <AuthContext.Provider value={{user,token,getTokenLocalStorage,getUserFromLocalStorage,logoutUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);