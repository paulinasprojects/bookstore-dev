import { useState } from "react";
import TabContent from "./tab-content";
import ProfileTab from "./profile-tab";
import PersonalProfile from "./personal-profile";
import AddressList from "./address-list";
import Security from "./secury";

import "@/styles/profile-tabs.scss";

const ProfileTabs = () => {
  const [toggle, setToggle] = useState(1);
  
  const getContent = () => {
    switch (toggle) {
      case 1:
        return <PersonalProfile/>;
      case 2:
        return <AddressList/>;
      case 3:
        return <Security/>;
      default:
        return null;
    }
  }

  return (
    <div className="profile-tabs-test-container">
      <div className="profile-tabs-container">
        <ProfileTab
          className="profile-tab-personal-profile"   
          tabName="Personal Profile"
          isActive={toggle === 1}
          onClick={() => setToggle(1)}
        />
        <ProfileTab
          className="profile-tab"
          tabName="Address List"
          isActive={toggle === 2}
          onClick={() => setToggle(2)}
        />
        <ProfileTab
          className="profile-tab"
          tabName="Security"
          isActive={toggle === 3}
          onClick={() => setToggle(3)}
        />
      </div>
    <div>
      <TabContent content={getContent()}/>
    </div>
    </div>
  )
}

export default ProfileTabs;