import '@/styles/security.scss';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { laptop, graylaptop } from '@/data/images';
import LoginActivityCard from './login-activity-card';

const Security = () => {
  return (
    <div>
      <div className="security-container">
        <span className='security-title'>Security</span>
      </div>
      <div className='security-alert-container'>
        <span className='security-alert-title'>
          <IoIosInformationCircleOutline className="info-outline"/>
          If you see an activity you don't recognize, click "Log out" and Change your password
          </span>
          <span className='security-alert-description'>If you see an activity you don't recognize, click "Log out" and <b>Change your password</b></span>
      </div>
      <div className='login-activity'>
        <span className='login-activity-title'>Login Activity</span>
        <span className='login-activity-description'>Your recent login activity</span>
      </div>
      <div className='security-activity-container'>
        <div className='security-image-container'>
          <img src={laptop} alt="" />
        </div>
        <div className='security-activity-ip'>
          <span className='security-activity-laptop'>Chrome in Intel Mac OS X 10_15_7</span>
          <span>36.72.214.18</span>
        </div>
        <span className='security-activity-button'>Active now</span>
      </div>
      <div className='login-history-container'>
        <span className='login-history-title'>Login history in the last 30 days</span>
      </div>
      <LoginActivityCard
        image={graylaptop}
        lastActive='Last Active 6 Jul 2022, 11.57'
        lastLocation='Chrome in Intel Windows OS X 10_15_7'
        LastIpAddress='36.72.214.18'
        buttonText='Disconnect'
      />
      <LoginActivityCard
        image={graylaptop}
        lastActive='Last Active 6 Jul 2022, 11.57'
        lastLocation='Chrome in Intel Windows OS X 10_15_7'
        LastIpAddress='36.72.214.18'
        buttonText='Disconnect'
      />
    </div>
  )
}

export default Security