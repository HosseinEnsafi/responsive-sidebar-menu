import React, { useState, useContext } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import DropDownList from "./DropDownList";
import { UIContext } from "../context/UIState/UIContext";
import OutsideClickHandler from "react-outside-click-handler";
const Item = ({ title, logo, items }) => {
  const { isFull } = useContext(UIContext);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  return (
    <li>
      <OutsideClickHandler onOutsideClick={() => setShowDropDown(false)}>
        <div
          className={`relative `}
          onMouseEnter={() => setShowTitle(true)}
          onMouseLeave={() => setShowTitle(false)}>
          <div
            onClick={() => setShowDropDown((prevState) => !prevState)}
            className={` flex cursor-pointer  items-center justify-between  rounded p-2 text-lg text-gray-400 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-50 
        ${isFull ? "justify-start" : "justify-center"}
        `}>
            <div className="flex items-center gap-2">
              <h1
                className={` whitespace-nowrap  text-lg      
            ${
              !isFull && showTitle
                ? "-top-3 right-7  sm:absolute sm:rounded-md sm:border sm:border-gray-800 sm:bg-gray-900 sm:px-2 sm:py-1 sm:text-sm"
                : "" || (!isFull && !showTitle)
                ? "sm:hidden"
                : ""
            }`}>
                {title}
              </h1>
              {logo}
            </div>

            <HiOutlineChevronDown
              className={` transition-transform duration-100 
            ${showDropDown && "rotate-180"}
            ${isFull ? "" : "sm:hidden"}
            ${!items ? "hidden" : ""}
          `}
            />
          </div>

          {items && showDropDown && <DropDownList items={items} />}
        </div>
      </OutsideClickHandler>
    </li>
  );
};

export default Item;
