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
        defaultValue={[categoryList[2], categoryList[3]]}
        onChange={(category) => setSelectedCategories(category)}
        // components={animatedComponents}
        isOptionDisabled={() => selectedCategories.length >= 3}
        closeMenuOnSelect={false}
        isMulti
        name="colors"
        options={categoryList}
        className="basic-multi-select px-6 pb-6"
        classNamePrefix="select"
      />
    </>
  );
}
