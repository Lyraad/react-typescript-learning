import "./NavButton.css";
import { useNavigate } from "react-router-dom";

interface props {
  pageName: string;
  linkTo: string;
  isActivePage: boolean;
}

function NavButton({ isActivePage, pageName, linkTo }: props) {
  const navigate = useNavigate();
  let btnClass = isActivePage ? "active" : "inactive";

  const handleClick = function (): void {
    if (
      window.confirm(
        "Warning! Data does not currently persist and will be erased. Do you want to continue?"
      )
    ) {
      navigate(linkTo);
    }
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
