import successImage from '/success.png';
import "@/styles/checkout-success.scss";

const CheckoutSuccess = () => {
  return (
    
    <div className="checkout-success-container">
      <img src={successImage} alt="" />
      <div className='checkout-title-container'>
        <span className='checkout-success-title'>Successful Transaction</span>
        <span className='checkout-success-description'>
          Congrats your order has been successful. Keep an eye <br />
          on your order process on the transaction page!
         </span>
         <button className='checkout-success-button'>Transactions</button>
      </div>
    </div>
  )
}

export default CheckoutSuccess