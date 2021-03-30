import React from "react";
import SideLinks from "./SideLinks";

const SideBar = ({ isOpen }) => {
  return (
    <aside
      className={`bg-brand-primary-100 transform top-14 left-0 w-full fixed h-full overflow-scroll ease-in-out transition-all duration-500 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section>
        <SideLinks />
      </section>
    </aside>
  );
};

export default SideBar;
