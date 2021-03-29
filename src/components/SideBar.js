import React from "react";
import SideLinks from "./SideLinks";

const SideBar = ({ isOpen }) => {
  return (
    <aside
      className={`bg-brand-primary-100 transform top-14 left-0 w-full fixed h-full overflow-scroll ease-in-out transition-all duration-700 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <header className="flex justify-end border-b border-gray-100 border-opacity-5 py-2.5 px-5">
        <Icon name="icon-closee" size="2rem"  />
      </header> */}

      <section>
        <SideLinks />
      </section>
    </aside>
  );
};

export default SideBar;
