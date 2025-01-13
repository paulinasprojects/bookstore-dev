import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import SellectAllCheckbox from "./checkbox";
import ActionModal from "./actions-modal";
import "@/styles/cart-cards.scss";

interface CartCardsProps {
  cardTitle: string;
  cardQuantity: string;
  cardInStock: string;
  cardImage: string;
}

const CartCards = ({ cardImage, cardInStock, cardQuantity, cardTitle }: CartCardsProps) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const onDeleteOpenModal = () => {
    setOpenDeleteModal(!openDeleteModal)
  };

  return (
    <> 
    <div className="card-container">
      <div>
      <SellectAllCheckbox/>
      </div>
      <div className="card-content">
        <div className="card-details">   
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-quantity">{cardQuantity}</p>
          <p className="card-stock">{cardInStock}</p>
          <div className="card-actions">
            <button className="add-item-button">ADD ITEM</button>
            <button className="delete-item-button" onClick={() => setOpenDeleteModal(!openDeleteModal)}>
              <FiTrash className="trash-icon"/>
            </button>
          </div>
        </div>
        <div className="card-image">
          <img
            src={cardImage}
            alt="Book Cover"
          />
        </div>
      </div>
    </div>
    {openDeleteModal && (
      <ActionModal
        setOpen={onDeleteOpenModal}
        title="Remove"
        description="Are you sure you want to remove this item from the cart"
          buttonAction="Remove"
        />
    )}
    </>
  )
}

export default CartCards