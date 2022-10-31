import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const AnswerContext = createContext({});

//custom hooh - fuction that requires some stuff
export function useAnswer() {
  return useContext(AnswerContext);
}

export function AnswerProvider({ children }) {
  //what Answer related info i want to make available throughout the app
  const [categoryList, setCategoryList] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
  ]);
  const [selectedCategories, setSelectedCategories] = useState([])

  //is user logged in? meaning does user have token?

  const value = {
    categoryList,
    selectedCategories,
    setCategoryList,
    setSelectedCategories
  }
  // value - singular. CANNOT use values
  return (
    <AnswerContext.Provider value={value}>
      {children}
    </AnswerContext.Provider>
  );
}

