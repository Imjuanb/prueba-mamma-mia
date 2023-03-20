import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextApi = createContext();

export default function ContextApiProvider({children}) {
    const navigate = useNavigate();

    const [datos, setdatos] = useState([]);
  
    const getData = async () => {
      try {
        const res = await fetch(`pizzas.json`);
        const data = await res.json();
        setdatos(data);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <ContextApi.Provider value={{ datos }}>{children}</ContextApi.Provider>
    );
  }
  
  export const useContextApi = () => useContext(ContextApi);
