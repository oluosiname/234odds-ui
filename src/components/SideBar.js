import React from "react";
import Icon from "./Icon/Icon";
import SideLinks from "./SideLinks";

const SideBar = ({ isOpen, setisOpen }) => {
  return (
    <aside
      className={`bg-brand-primary-100 transform top-0 left-0 w-80 py-2.5 px-5 fixed h-full overflow-auto ease-in-out transition-all duration-700 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <header className="flex justify-end">
        <Icon name="icon-closee" size="2rem" onClick={() => setisOpen(false)} />
      </header>

      <section>
        <SideLinks />
      </section>
    </aside>
  );
};

export default SideBar;
