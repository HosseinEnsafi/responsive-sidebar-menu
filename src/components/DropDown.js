import React, { useState, useContext } from "react";
import SubDropDown from "./SubDropDown";
import { HiOutlineChevronDown } from "react-icons/hi";
const DropDown = ({ item }) => {
  const [showSubDropDown, setShowSubDropDown] = useState(false);
  return (
    <li key={Math.random()} className="relative cursor-pointer text-gray-400">
      <div
        onClick={() => setShowSubDropDown((prev) => !prev)}
        className="group flex items-center gap-3 ">
        <p className="group-hover:text-gray-200">{item.itemTitle}</p>
        {item.subItems && (
          <HiOutlineChevronDown
            className={`whitespace-nowrap transition-transform duration-100 group-hover:text-gray-200 
            ${showSubDropDown && "rotate-180"} `}
          />
        )}
      </div>

      {item.subItems && showSubDropDown && (
        <SubDropDown items={item.subItems} />
      )}
    </li>
  );
};

export default DropDown;
