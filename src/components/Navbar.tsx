import React from "react";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <div>
      <NavButton page="Home" isActivePage={true} />
      <NavButton page="Add Post" isActivePage={false} />
      <NavButton page="Delete Posts" isActivePage={false} />
      <NavButton page="About" isActivePage={false} />
    </div>
  );
}

export default Navbar;
