import React from "react";
import "./NavButton.css";

interface props {
  page: string;
  isActivePage: boolean;
}

function NavButton({ isActivePage, page }: props) {
  let btnClass = isActivePage ? "active" : "inactive";

  return (
    <>
      <button className={btnClass}> {page} </button>
    </>
  );
}

export default NavButton;
