import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const AnswerContext = createContext({});

//custom hooh - fuction that requires some stuff
export function useAnswer() {
  return useContext(AnswerContext);
}

export function AnswerProvider({ children }) {
  //what Answer related info i want to make available throughout the app
  const [categories, setCategories] = useState([]);

  //is user logged in? meaning does user have token?

  const values = {
    categories,
    setCategories
  }

  return (
    <ShoppingCartContext.Provider values={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

