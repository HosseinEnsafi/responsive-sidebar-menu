import React, { useContext } from "react";
//prettier-ignore
import { HiChevronLeft,HiMenuAlt2, HiOutlineHome, HiOutlineUser, HiOutlineDocumentText, HiOutlineShoppingBag, HiOutlineX,HiOutlineCog } from "react-icons/hi";
import { UIContext } from "../context/UIState/UIContext";
import Item from "./Item";
import MenuAlt from "./MenuAlt";

const Sidebar = () => {
  const { isNavOpen, toggleFull, isFull, toggleMenu } = useContext(UIContext);

  return (
    <>
      {/* CLOSE ICON */}
      <MenuAlt
        openLogo={<HiMenuAlt2 className="h-full w-full" />}
        closeLogo={<HiOutlineX className="h-full w-full" />}
        isNavOpen={isNavOpen}
        onToggleMenu={toggleMenu}
      />
      {/* prettier-ignore */}
      <aside 
        className={`fixed h-screen w-64 bg-slate-900  transition-all  ease-in-out 
        ${isFull ? "w-64": ""}
        ${!isFull ? "w-64 sm:w-20": ""}
        ${isNavOpen ? "translate-x-0 translate-y-0 ": ""} 
        ${!isNavOpen ? "translate-x-64 translate-y-0 sm:translate-x-0": ""}
        
        `}
>
        
        <button name="fullMenuButton" onClick={toggleFull} className={`hidden transition-transform duration-100 absolute -left-[15px] top-10 sm:block bg-black   p-2 rounded-full text-white ${isFull ? 'rotate-180':''}`} >
        <HiChevronLeft/>
        </button>

        <nav className="h-64 ">
          {/* LOGO */}
          <h1 className=
          {`mb-4 select-none  text-center pt-5  font-bold text-white
            ${isFull?"text-2xl":"text-lg"}
          `}>
            لوگو 
          </h1>

          <ul className={`flex  select-none  flex-col space-y-3 ${isFull && "overflow-x-hidden"} px-4 ${!isFull ?"sm:items-center":""}`}>
            <Item title={"صفحه اصلی"} logo={<HiOutlineHome className="h-6 w-6"/> }  />
            <Item title={"اعضا"} logo={<HiOutlineUser className="h-6 w-6" />} items={[{ itemTitle: 'گزینه اول' }, { itemTitle: 'گزینه دوم',subItems:[{ subItemTitle: 'گزینه  اول' }, { subItemTitle: 'گزینه  دوم' }, { subItemTitle: "گزینه  سوم" }] }, { itemTitle: 'گزینه سوم' }]} />
            {/*prettier-ignore*/}
            <Item title={"پست ها"}logo={<HiOutlineDocumentText className="h-6 w-6"/>} />
            {/*prettier-ignore*/}
            <Item title={"خرید ها"} logo={<HiOutlineShoppingBag className="h-6 w-6" />} items={[{itemTitle:"خرید اول"},{itemTitle:"خرید دوم"},{itemTitle:"خرید سوم"}]}/>
            {/*prettier-ignore*/}
            <Item title={"تنظیمات"} logo={<HiOutlineCog className="h-6 w-6 "/>}   />
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
