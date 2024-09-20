import { FaGooglePlay, FaApple, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

import logo from '/bookstore-v2-logo.svg';

import "../styles/footer.scss";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      {/* Left */}
      <div className="left-container">
        <Link to="/">
          <img src={logo} alt="" className="footer-logo" />
        </Link>
        <span className="footer-description">
          The largest, most complete and trusted online <br /> 
          bookstore in the wolrd. With us, you can shop online <br />
          & help save your high street at the same time
        </span>
        <div className="footer-button-container">
          <button className="footer-google-play-button">
            <FaGooglePlay className="footer-icon"/>
            Google Play
          </button>
          <button className="footer-app-store-button">
            <FaApple className="footer-icon"/>
            Apple Store
          </button>
        </div>
        
      </div>
      {/* Right */}
      <div className="footer-links">
        <div className="footer-about-bookstore">
          <span className="about-bookstore">About Bookstore</span>
          <Link to="/" className="footer-link">Explore</Link>
          <Link to="/" className="footer-link">Jobs</Link>
          <Link to="/" className="footer-link">About Us</Link>
          <Link to="/" className="footer-link">Contact Us</Link>
        </div>
        <div className="footer-about-bookstore">
          <span className="about-bookstore">Others</span>
          <Link to="/" className="footer-link">Terms and Conditions</Link>
          <Link to="/" className="footer-link">Privacy Policy</Link>
          <Link to="/" className="footer-link">Help Center</Link>
        </div>
      </div>
      </div>
      <div className="footer-social-link-container">
        <div>
          <span className="copyright">Copyright © 2024 Bookstore. All rights reserved</span>
        </div>
        <div className="social-links">
          <Link to="/"><PiInstagramLogoFill className="social-icon"/></Link>
          <Link to="/"><FaLinkedin className="social-icon"/></Link>
          <Link to="/"><FaFacebookF className="social-icon"/></Link>
          <Link to="/"><FaXTwitter className="social-icon" /></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer