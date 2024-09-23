import { FaGooglePlay, FaApple } from 'react-icons/fa';
import "@/styles/newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-title-container">
        <h1 className="newsletter-title">Our Special Surprise <br /> Just for You</h1>
        <span className="newsletter-description">With us, you can shop online & help save your high street at <br /> the same time.</span>
        <div className="newsletter-button-container">
          <button className='newsletter-google-play-button'>
            <FaGooglePlay className='newsletter-icon'/>
            Google Play
          </button>
          <button className='newsletter-app-store-button'>
            <FaApple className='newsletter-icon'/>
            App Store
          </button>
        </div>
        <div className='newsletter-input-container'>
          <input type="email" placeholder='Your Email Address' className='newsletter-input' />
          <button className='newsletter-send-button'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter