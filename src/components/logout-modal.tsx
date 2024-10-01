import "@/styles/logout-modal.scss";

interface LogoutModalProps {
  setOpen: () => void;
}


const LogoutModal = ({setOpen}: LogoutModalProps) => {
  return (
    <div className="modal-background">
      <div className="logout-modal-container">
        <div className="logout-modal-title-container">
          <h1 className="logout-modal-tite">Logout</h1>
          <span>Are you sure you want to logout now?</span>
        </div>
        <div className="logout-modal-button-container">
          <button className="logout-modal-logout-button">Logout</button>
          <button className="logout-mododal-cancel-button" onClick={setOpen}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal