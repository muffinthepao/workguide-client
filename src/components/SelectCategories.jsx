// import axios from "axios";
import React, {useState, useEffect} from "react";
import Select from "react-select";
// import { colourOptions } from "../data";
import { useAnswer } from "../context/AnswerContext";

export default function SelectCategories() {
  const {categoryList, selectedCategories, setSelectedCategories} = useAnswer()

  return (
    <>
      <Select
        defaultValue={[]}
        onChange={(category) => {setSelectedCategories(category)}}
        menuPlacement="auto"
        // components={animatedComponents}
        isOptionDisabled={() => selectedCategories.length >= 3}
        closeMenuOnSelect={false}
        isMulti
        name="colors"
        options={categoryList}
        className="basic-multi-select pb-6"
        classNamePrefix="select"
        placeholder= 'Select 1 to 3 categories'
      />
    </>
  );
}
