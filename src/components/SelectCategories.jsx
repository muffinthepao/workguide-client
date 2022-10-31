// import axios from "axios";
import React, {useState, useEffect} from "react";
import Select from "react-select";
// import { colourOptions } from "../data";

export default function SelectCategories() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const options = [
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


  ]

  return (
    <>
      <Select
        defaultValue={[options[2], options[3]]}
        onChange={(option) => setSelectedOptions(option)}
        // components={animatedComponents}
        isOptionDisabled={() => selectedOptions.length >= 3}
        closeMenuOnSelect={false}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select px-6 pb-6"
        classNamePrefix="select"
      />
    </>
  );
}
