import "@/styles/actions-modal.scss";

interface ActionModalProps {
  setOpen: () => void;
  title?: string;
  description?: string;
  buttonAction?: string;
}


const ActionModal = ({setOpen, title, description, buttonAction}: ActionModalProps) => {
  return (
    <div className="modal-background">
      <div className="actions-modal-container">
        <div className="actions-modal-title-container">
          <h1 className="actions-modal-title">{title}</h1>
          <span>{description}</span>
        </div>
        <div className="actions-modal-button-container">
          <button className="actions-modal-action-button" onClick={setOpen}>{buttonAction}</button>
          <button className="actions-modal-cancel-button" onClick={setOpen}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ActionModal