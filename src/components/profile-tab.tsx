import classNames from "@/lib/utils";
import "@/styles/profile-tab.scss";

interface ProfileTabProps {
  tabName: string;
  isActive: boolean;
  onClick: () => void;
  className: string;
};

const ProfileTab = ({ tabName, isActive, onClick, className }: ProfileTabProps) => {
  return (
   <div className="profile-tab-main-container">
     <div 
      className={classNames( isActive ? "profile-tab-active" : "profile-tab-container", className )}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <span>
        {tabName}
      </span>
    </div>
   </div>
  )
}

export default ProfileTab;