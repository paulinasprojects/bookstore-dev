import classNames from "@/lib/utils";
import "@/styles/tabs.scss";

interface TabsProps {
  categoryName: string;
  isActive: boolean;
  onClick: () => void;
};

const Tabs = ({ categoryName, isActive, onClick }: TabsProps) => {
  return (
    <div 
      className={classNames( isActive ? "is-active" : "tab-container" )}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <span>
        {categoryName}
      </span>
    </div>
  )
}

export default Tabs;