import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon/Icon";
import SideBar from "./SideBar";

const MobileMenu = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="flex justify-between py-2.5 px-5 md:hidden bg-gray-300 border-b border-gray-100 border-opacity-5 text-gray-100">
      <Link to="/">234Odd</Link>
      {!isOpen && (
        <Icon name="icon-menu" size="2rem" onClick={() => setisOpen(true)} />
      )}
      <SideBar isOpen={isOpen} setisOpen={setisOpen} />
    </div>
  );
};

export default MobileMenu;
