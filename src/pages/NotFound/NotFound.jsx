import React from "react";
import notFoundPic from "../NotFound/NotFound.png";
export default function NotFound() {
  return (
    <div className="container px-5 py-24 pb-4 mx-auto">
      <div className="flex text-center w-full mb-20 justify-center">
        <img className="w-2/3" src={notFoundPic} alt="404.img" />
      </div>
    </div>
  );
}
