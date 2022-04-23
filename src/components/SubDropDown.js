import React, { useContext } from "react";
import { UIContext } from "../context/UIState/UIContext";

const SubDropDown = ({ items }) => {
  const { isFull } = useContext(UIContext);
  return (
    <ul
      className={`mr-8 mt-3 flex flex-col gap-2 border-r pr-2 border-solid${
        !isFull &&
        " right-20 whitespace-nowrap sm:absolute sm:gap-4 sm:rounded-md sm:border-none sm:bg-slate-900 sm:px-3 sm:py-3"
      } `}>
      {items.map((item) => (
        <li key={Math.random()}>
          <p className="hover:text-gray-200 ">{item.subItemTitle}</p>
        </li>
      ))}
    </ul>
  );
};

export default SubDropDown;
