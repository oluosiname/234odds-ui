import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon/Icon";

const MobileMenu = () => {
  return (
    <div className="flex justify-between py-2.5 px-1 md:hidden bg-brand-primary-100 text-gray-100">
      <Link to="/">234Odds</Link>
      <Icon name="icon-menu" size="2rem" />
    </div>
  );
};

export default MobileMenu;
