import { FaArrowRight } from "react-icons/fa6";
import heroImage from '/hero-image.png'
import profilePic from '/profile-pic-big.png';
import MilestoneContent from "@/components/milestone-content";

import "../styles/hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        {/* Left */}
        <div className="hero-title-container">
          <h1 className="hero-textt hero-title">
            The easiest 
            way to find
            the best book!
          </h1>
          <span className="hero-description">
            With us, you can shop online & help save
            your high street at the same time
          </span>
          <div className="hero-button-container">
            <button className="hero-button">
              Explore Book
              <FaArrowRight className="hero-icon" />
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="hero-image-container">
          <img src={heroImage} alt="" className="hero-image" />
        </div>
      </div>
      {/* Testimonial */}
      <div className="testimonial-container">
        <div className="hero-testimonial-container">
           <img src={profilePic} alt="" className="profile-pic" />
           <span className="subtitle-1 testimonial-title">Jeremy Zucker</span> 
           <span className="testimonial-description">The best book store in the world! Easy <br />
            to use and shipping.
          </span> 
        </div>
        {/* Milestones */}
        <div className="milestone-content">
          <MilestoneContent
            milestoneNumber="01"
            milestoneTitle="Shipping"
            milestoneDescription="Worldwide shipping"
          />
          <MilestoneContent
            milestoneNumber="02"
            milestoneTitle="Best Price"
            milestoneDescription="Best price with best quality"
          />
          <MilestoneContent
            milestoneNumber="03"
            milestoneTitle="Author"
            milestoneDescription="Authors from around the world"
          />
        </div>
      </div>
    </>
  )
}

export default Hero