import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "./Icon/Icon";
import SideBar from "./SideBar";
import { CLOSE_MENU, OPEN_MENU } from "../redux/app/app-reducer";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector(({ appReducer }) => appReducer);

  const toggleMenu = () => {
    const action = isMenuOpen ? CLOSE_MENU : OPEN_MENU;
    dispatch({ type: action });
  };

  return (
    <div className="flex justify-between px-5 md:hidden bg-brand-primary-100 border-b border-gray-100 border-opacity-5 text-gray-100 h-14 items-center">
      <Link to="/">234Odd</Link>

      <Icon
        name={`icon-${isMenuOpen ? "closee" : "menu"}`}
        size="2rem"
        onClick={toggleMenu}
      />

      <SideBar isOpen={isMenuOpen} />
    </div>
  );
};

export default MobileMenu;
