import { FiTrash } from "react-icons/fi";

import "@/styles/cart-cards.scss";
import SellectAllCheckbox from "./checkbox";

interface CartCardsProps {
  cardTitle: string;
  cardQuantity: string;
  cardInStock: string;
  cardImage: string;
}

const CartCards = ({ cardImage, cardInStock, cardQuantity, cardTitle }: CartCardsProps) => {
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
            <button className="delete-item-button">
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
    </>
  )
}

export default CartCards