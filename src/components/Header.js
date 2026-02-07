import { LOGO_URL } from "../utils/common";

const LOGO = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={LOGO_URL} />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <LOGO />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
