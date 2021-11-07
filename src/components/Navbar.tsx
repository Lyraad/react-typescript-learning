import React from "react";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <div>
      <NavButton pageName="Home" isActivePage={true} linkTo="/" />
      <NavButton pageName="Add Post" isActivePage={false} linkTo="addPost" />
      <NavButton
        pageName="Delete Posts"
        isActivePage={false}
        linkTo="delPost"
      />
      <NavButton pageName="About" isActivePage={false} linkTo="about" />
    </div>
  );
}

export default Navbar;
