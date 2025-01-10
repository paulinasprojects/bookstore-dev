import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from '/bookstore-v2-logo.svg';
import smallLogo from '/bookstore-logo.svg';
import { useNavigate } from "react-router-dom";

import "../styles/header.scss";


const Header = () => {
  const navigate = useNavigate();

  return (
    <>
    <nav className="header">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
      <div className="header-input-container">
        <BiSearch className="search-icon"/>
        <input type="text" placeholder="What book are you looking for" className="header-input" />
      </div>
        <div className="header-button-container">
          <Link to="/"><img src={smallLogo} alt="" className="small-logo" /></Link>
          <button className="discover-button" onClick={() => navigate("/discover")}>Discover</button>
          <button className="login-button" onClick={() => navigate("/sign-in")}>Login</button>
        </div>
    </nav>
    </>
  );
};

export default Header