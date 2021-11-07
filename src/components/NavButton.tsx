import React from "react";
import "./NavButton.css";

interface props {
  pageName: string;
  linkTo: string;
  isActivePage: boolean;
}

function NavButton({ isActivePage, pageName, linkTo }: props) {
  let btnClass = isActivePage ? "active" : "inactive";

  const handleClick = function (): void {
    console.log(linkTo);
  };

  return (
    <>
      <button className={btnClass} onClick={handleClick}>
        {pageName}
      </button>
    </>
  );
}

export default NavButton;
