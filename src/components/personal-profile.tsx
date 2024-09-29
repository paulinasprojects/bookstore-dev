import { profileImageBig } from "@/data/images";
import "@/styles/personal-profile.scss";
import { Upload } from "./icons";
import GenderDropdown from "./gender-dropdown";

const PersonalProfile = () => {
  return (
    <div className="personal-profile-container">
      <div className="personal-profile-image-container">
        <img src={profileImageBig} alt="" className="personal-profile-image" />
        <span>Upload picture</span>
        <div className="personal-profle-div-el">
          <label htmlFor="inputField" className="change-profile-picture-button"><Upload/>Upload</label>
          <input type="file" className="personal-profile-file-button" title=" " style={{display: "none"}} id="inputField" />
          <span className="allowed-file-extensions">Max 10 Mb and allowed file extensions: .JPG .JPEG .PNG</span>
        </div>
      </div>
        <div className="profile-bio-container">
          <span className="profile-bio-title">Profile Bio</span>
          <div className="personal-profile-form-container">
            <div className="personal-profile-form-input">
              <label className="personal-profile-label">Full Name</label>
              <input type="text" placeholder="Jeremy Zucj" className="profile-form-input" />
            </div>
            <div className="personal-profile-form-input">
              <label className="personal-profile-label">Date of Birth</label>
              <input type="number" placeholder="1945, August 17" className="profile-form-input" />
            </div>
            <div className="personal-profile-form-input">
              <label className="personal-profile-label">Gender</label>
              <GenderDropdown/>
            </div>
          </div>
            <div className="personal-profile-save-button-container">
               <button className="personal-profile-save-button">Save</button>
            </div>
      </div>
        <div className="profile-contact-info-container">
          <span className="profile-contact-title">Contact Info</span>
          <div className="profile-contact-form-container">
            <div className="profile-contact-form-input">
              <label className="profile-contact-label">
                Email
                <span className="verified-text">Verified</span>
              </label>
              <input type="email" placeholder="jeremyzucker@email.com" className="profile-contact-input" />
            </div>
            <div className="profile-contact-form-input">
              <label className="profile-contact-label">Phone Number
                <span className="verified-text">Verified</span>
              </label>
              <input type="number" placeholder="081234567890" className="profile-contact-input" />
            </div>
          </div>
        </div>
        <div className="personal-profile-log-out">
          <button className="personal-profile-log-out-button">Logout</button>
        </div>
    </div>
  )
}

export default PersonalProfile