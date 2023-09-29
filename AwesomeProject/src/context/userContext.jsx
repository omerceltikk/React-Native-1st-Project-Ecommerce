import { createContext,useState,useEffect,useContext } from "react";
import users from "../db/usersdB.json"

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user,setUser] = useState();

  const values = {
    user,
    setUser,
  }
  return (
   <UserContext.Provider value={values}>{children}</UserContext.Provider>
   );
}
export const useData = () => useContext(UserContext);