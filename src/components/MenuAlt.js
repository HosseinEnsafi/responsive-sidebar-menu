import React from "react";

const MenuAlt = ({ openLogo, closeLogo, isNavOpen, onToggleMenu }) => {
  const toggleMenuHandler = () => {
    onToggleMenu();
  };
  return (
    <>
      <div
        className="fixed left-4 top-4 h-[25px] w-[25px] cursor-pointer text-black sm:hidden"
        onClick={toggleMenuHandler}>
        {isNavOpen ? closeLogo : openLogo}
      </div>
    </>
  );
};

export default MenuAlt;
