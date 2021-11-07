import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  let pageName: string;

  switch (location.pathname.toLowerCase()) {
    case "/":
      pageName = "Message Board";
      break;
    case "/about":
      pageName = "About Page";
      break;
    case "/addpost":
      pageName = "Add a new message";
      break;
    case "/delpost":
      pageName = "Delete Posts";
      break;
    default:
      pageName = "Unknown Page";
  }

  return (
    <div>
      <h1>{pageName}</h1>
    </div>
  );
};

export default Header;
