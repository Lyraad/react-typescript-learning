import React from "react";

interface props {
  content: string;
}

const Header = ({ content }: props) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

export default Header;
