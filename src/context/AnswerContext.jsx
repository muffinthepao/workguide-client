import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const AnswerContext = createContext({});

//custom hooh - fuction that requires some stuff
export function useAnswer() {
  return useContext(AnswerContext);
}

export function AnswerProvider({ children }) {
  //what Answer related info i want to make available throughout the app
  const [fetchCategories, setFetchCategories]=useState(false)
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([])

  //get update list of categories from db
  useEffect(() => {
    const getCategories = async () => {
      const formattedCategories =[]
      try {
        const response = await axios.get(process.env.REACT_APP_CATEGORY_BASE_URL)
        const categories = response.data.forEach((category, idx) => {
          formattedCategories.push({value: idx,label: category.category})
        })
        setCategoryList(formattedCategories)
        console.log(response.data)
        setFetchCategories(true)
      } catch (error) {
        console.log(error)
        return
      }
    }

    getCategories().catch(console.error);
  }, [fetchCategories])

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

