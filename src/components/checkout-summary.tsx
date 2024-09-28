import { useNavigate } from "react-router-dom";
import TotalSummary from "./total-summary";

const CheckoutSummary = () => {
  const navigate = useNavigate();
  
  return (
    <div className="checkout-summary-container">
    <div className="checkout-summary-title-container">
      <span className="checkout-summary-title">Shopping Summary</span>
      <span className="checkout-summary-book-title">The Stories of Choo Choo: You're Not <br /> as Alone as You Think</span>
    </div>
    <div className="checkout-summary">
      <span className="checkout-quantity">1 book x</span>
      <span className="checkout-price">$19.0</span>
    </div>
    <div className="checkout-summary-second-title-container">
      <span className="checkout-summary-second-book-title">Laut Bercerita</span>
    </div>
    <div className="checkout-summary">
      <span className="checkout-quantity">1 book x</span>
      <span className="checkout-price">$22.0</span>
    </div>
    <div className="checkout-hr-container">
      <hr  className="checkout-hr"/>
    </div>
    <div className="checkout-total-container">
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
    <div className="checkout-total-price-container">
      <div className="total-price-container">
        <span className="total-price-title">Total Price</span>
        <span className="total-price-title">$25.0</span>
      </div>
    </div>
    <div className="checkout-pay-container">
      <span className="checkout-terms-and-policy">By registering, I agree Terms and  <br /> Conditions and Privacy Policy</span>
      <button className="checkout-pay-button" onClick={() => navigate("/checkout/success")}>Pay $25</button>
    </div>
  </div>
  )
}

export default CheckoutSummary