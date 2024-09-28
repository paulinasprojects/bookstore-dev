import { useNavigate } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import SellectAllCheckbox from "@/components/checkbox";
import CartCards from "@/components/cart-cards";
import { CartItems } from "@/data/data";
import TotalSummary from "@/components/total-summary";
import "@/styles/cart.scss";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-page-container">
      <div className="cart-flex-container">
        {/* Left */}
        <div>
          <div className="checkbox-flex-container">
            <span className="your-cart-title">Your Cart</span>
            <div className="checkbox-container">
              <SellectAllCheckbox/>
              <span>Select All</span>
            </div>
          </div>
          <div className="out-of-stock-products">
            <span className="out-of-stock-title">
              <IoIosInformationCircleOutline className="info-outline"/>
              There are products that are currently out of stock
            </span>
            <span className="out-of-stock-description">Please check product availability or email us</span>
          </div>
          <div className="cart-page-cards-container">
            {/* Cart Cards */}
            {CartItems.map((item) => (
              <CartCards
                cardImage={item.cardImage}
                cardInStock={item.cardInStock}
                cardQuantity={item.cardQuantity}
                cardTitle={item.cardTitle}
                key={item.id}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="calculation-container">
          <div className="calculation-title-container">
            <span className="calculation-title">Calculation</span>
          </div>
          <div>
            <span className="delivery-location">Delivery Location</span>
          </div>
          <div className="delivery-location-container">
            <span className="delivery-home">Home</span>
            <button className="change-address">Change</button>
          </div>
          <div className="delivery-address-container">
            <span className="delivery-address">136 Hart Country Lane  <br /> Atlanta, GA 30303</span>
          </div>
          <div className="voucher-container">
            <span className="voucher-title">Voucher</span>
            <button className="voucher-button">
              14 promos are available
              <CiDiscount1 className="discount-icon"/>
            </button>
          </div>
          <div className="shopping-summary-container">
            <div className="shopping-summary-title-container">
              <span className="shopping-summary-title">Shopping Summary</span>
              <span className="shopping-summary-book-title">The Stories of Choo Choo: You're Not <br /> as Alone as You Think</span>
            </div>
            <div className="test-summary">
              <span className="summary-quantity">1 book x</span>
              <span className="summary-price">$19.0</span>
            </div>
            <div className="shopping-summary-second-title-container">
              <span className="shopping-summary-second-book-title">Laut Bercerita</span>
            </div>
            <div className="test-summary">
              <span className="summary-quantity">1 book x</span>
              <span className="summary-price">$22.0</span>
            </div>
            <div className="summary-hr-container">
              <hr  className="summary-hr"/>
            </div>
            <div className="summary-total-container">
              <TotalSummary
                summaryTitle="Total"
                summaryPrice="$31.0"
              />
              <TotalSummary
                summaryTitle="Delivery"
                summaryPrice="$5.0"
              />
              
              <TotalSummary
                summaryTitle="Voucher"
                summaryPrice="$11"
              />
            </div>
            <div className="summary-total-price-container">
              <div className="total-price-container">
                <span className="total-price-title">Total Price</span>
                <span className="total-price-title">$25.0</span>
              </div>
                <button className="summary-checkout-button" onClick={() => navigate("/checkout")}>Checkout (2 items)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage