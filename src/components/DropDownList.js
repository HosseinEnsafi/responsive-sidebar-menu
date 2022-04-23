import React, { useContext } from "react";
import { UIContext } from "../context/UIState/UIContext";
import DropDown from "./DropDown";

const DropDownList = ({ items, subItems }) => {
  const { isFull } = useContext(UIContext);
  //prettier-ignore
  return (
    <ul
      className={`sm:px-3 mr-2 flex min-w-[115px] flex-col space-y-4 border-r  border-solid border-white py-0.5 pr-3 ${isFull? "": "right-[70px] top-2  sm:absolute sm:mr-0 sm:rounded-md sm:bg-slate-900 sm:py-4 "}`}>
      {items.map((item, i) => (
        <DropDown item={item} key={i} />
      ))}
    </ul>
  );
};

export default DropDownList;
