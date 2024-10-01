import "@/styles/logout-modal.scss";

interface ActionModalProps {
  setOpen: () => void;
  title?: string;
  description?: string;
  buttonAction?: string;
}


const ActionModal = ({setOpen, title, description, buttonAction}: ActionModalProps) => {
  return (
    <div className="modal-background">
      <div className="logout-modal-container">
        <div className="logout-modal-title-container">
          <h1 className="logout-modal-title">{title}</h1>
          <span>{description}</span>
        </div>
        <div className="logout-modal-button-container">
          <button className="logout-modal-logout-button">{buttonAction}</button>
          <button className="logout-mododal-cancel-button" onClick={setOpen}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ActionModal