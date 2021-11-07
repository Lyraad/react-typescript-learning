import React from "react";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
      <NavButton
        pageName="Home"
        isActivePage={path.toLowerCase() === "/"}
        linkTo="/"
      />
      <NavButton
        pageName="Add Post"
        isActivePage={path.toLowerCase() === "/addpost"}
        linkTo="/AddPost"
      />
      <NavButton
        pageName="Delete Posts"
        isActivePage={path.toLowerCase() === "/delpost"}
        linkTo="/DelPost"
      />
      <NavButton
        pageName="About"
        isActivePage={path.toLowerCase() === "/about"}
        linkTo="/About"
      />
    </div>
  );
}

export default Navbar;
