import { Link } from "react-router-dom";
import logo from '/bookstore-v2-logo.svg';
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
      <nav className="header">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="header-input-container">
        <BiSearch className="search-icon"/>
        <input type="text" placeholder="What book are you looking for?" className="header-input" />
      </div>
      {isNotificationsPage && (
        <div>
          <Link to="/discover" className="discover-button">Discover</Link>
        </div>
      )}
      <div className="header-content-container">
        <div>
          <Link to="/notifications">
            <NotificationIcon />
          </Link>
        </div>
        <div>
          <Link to="/cart">
          <CartIcon/>
          </Link>
        </div>
        <div>
          <img src={profilePic} alt="" />
        </div>
      </div>
      </nav>
    </>
  )
}

export default HeaderWithUser