import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from '/bookstore-v2-logo.svg';
import smallLogo from '/bookstore-logo.svg';

import "../styles/header.scss";


const Header = () => {
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
          <Link to="/" className="discover-button">Discover</Link>
          <Link to="/sign-in" className="login-button">Login</Link>
        </div>
    </nav>
    </>
  )
}

export default Header