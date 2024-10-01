import { useState } from "react";
import ActionModal from "./actions-modal";

interface LoginActivityCardProps {
  image: string;
  lastActive: string;
  lastLocation: string;
  LastIpAddress: string;
  buttonText: string;
}

const LoginActivityCard = ({ image, lastActive, lastLocation, LastIpAddress, buttonText }: LoginActivityCardProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  }

  return (
    <> 
    <div className='security-login-activity-container'>
        <div className='security-login-image-container'>
          <img src={image} alt="" />
        </div>
        <div className='security-login-activity-ip'>
          <span className="security-login-last-active">{lastActive}</span>
          <span className="security-login-last-location">{lastLocation}</span>
          <span>{LastIpAddress}</span>
        </div>
        <button className='security-login-activity-button' onClick={() => setOpen(!open)}>{buttonText}</button>
      </div>
      {open && (
        <ActionModal
          setOpen={toggleModal}
          title="Disconnect"
          description="Are you sure you want to disconnect from this device?"
          buttonAction="Disconnect"
        />
      )}
    </>
  )
}

export default LoginActivityCard