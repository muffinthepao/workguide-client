import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext({});

//custom hooh - fuction that requires some stuff
export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  //what App related info i want to make available throughout the app
  const [fetchCategories, setFetchCategories]=useState(false)
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([])
  const [authPage, setAuthPage] = useState("login")
  const [userData, setUserData] = useState(null)
  const [questions, setQuestions] = useState([])

  //get update list of categories from db
  useEffect(() => {
    const getCategories = async () => {
      const formattedCategories =[]
      try {
        const response = await axios.get(process.env.REACT_APP_CATEGORY_BASE_URL)
        response.data.forEach((category, idx) => {
          formattedCategories.push({value: idx,label: category.category})
        })
        setCategoryList(formattedCategories)
        setFetchCategories(true)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories().catch(console.error);
  }, [fetchCategories])

  //is user logged in? meaning does user have token?

  const value = {
    categoryList,
    selectedCategories,
    authPage,
    userData,
    questions, 
    setQuestions,
    setUserData,
    setCategoryList,
    setSelectedCategories,
    setAuthPage,
  }
  // value - singular. CANNOT use values
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

