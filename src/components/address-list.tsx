import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import "@/styles/address-list.scss";
import AddNewAddressModal from "./add-new-address-modal";

const AddressList = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  }

  return (
    <div>
      <div className="address-list-container">
        <input type="text" placeholder="Search address" className="address-list-input" />
        <button className="add-new-address-button" onClick={() => setOpen(!open)}>Add New Address</button>
      </div>
      <div className="address-list-title-container">
        <span className="address-list-title">Address List</span>
      </div>
      <div className="address-list-main-container">
        <div className="address-list-house-address">
          <span className="address-list-main-house">Jeremy Zucker's House</span>
          <span className="address-list-main-address">Main Address</span>
          <span className="address-list-active">Active</span>
        </div>
        <div className="address-list-main">
          <span>42 Buckingham St.Staten Island, NY 10312</span>
        </div>
        <div className="address-list-change">
          <span className="address-list-phone-number">081234567890</span>
          <div className="address-list-change-address">
            <BiTrash className="trash-icon"/>
            <button className="address-list-change-button">Change</button>
          </div>
        </div>
      </div>
      <div className="address-list-main-container">
        <div className="address-list-house-address">
          <span className="address-list-main-house">Office Address</span>
        </div>
        <div className="address-list-main">
          <span>9244 Chapel Street Huntington, NY 11743</span>
        </div>
        <div className="address-list-change">
          <span className="address-list-phone-number">081234567890</span>
          <div className="address-list-change-address">
            <BiTrash className="trash-icon"/>
            <button className="address-list-change-button">Change</button>
          </div>
        </div>
      </div>
      {open && (
        <AddNewAddressModal setOpen={toggleModal}/>
      )}
    </div>
  )
}

export default AddressList