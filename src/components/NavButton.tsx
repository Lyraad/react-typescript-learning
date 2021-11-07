import "./NavButton.css";
import { Link } from "react-router-dom";

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
      <Link to={linkTo}>
        <button className={btnClass} onClick={handleClick}>
          {pageName}
        </button>
      </Link>
    </>
  );
}

export default NavButton;
