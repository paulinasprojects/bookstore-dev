import { Link } from "react-router-dom";
import logo from '/bookstore-v2-logo.svg';
import logo2 from '/bookstore-logo.svg';
import { BiSearch } from "react-icons/bi";
import { CartIcon, NotificationIcon } from "./icons";
import profilePic from '/profile-pic-small.png';

import "@/styles/header-with-user.scss";

interface HeaderWithUserProps {
  isNotificationsPage?: boolean;
}

const HeaderWithUser = ({isNotificationsPage}: HeaderWithUserProps) => {

  return (
    <>
      <nav className="header-with-user-container">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <Link to="/">
          <img src={logo2} alt="" className="small-logo" />
        </Link>
        <div className="header-with-user-input-container">
        <BiSearch className="search-icon"/>
        <input type="text" placeholder="What book are you looking for?" className="header-input" />
      </div>
      {isNotificationsPage && (
        <div>
          <Link to="/discover" className="header-discover-button">Discover</Link>
        </div>
      )}
      <div className="header-content-container">
        <div>
          <Link to="#">
            <NotificationIcon />
          </Link>
        </div>
        <div>
          <Link to="/cart">
          <CartIcon/>
          </Link>
        </div>
        <Link to="/my-profile">
          <img src={profilePic} alt="" />
        </Link>
      </div>
      </nav>
    </>
  )
}

export default HeaderWithUser