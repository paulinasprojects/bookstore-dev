import failedImage from '/failed.png';
import "@/styles/checkout-failed.scss";

const CheckoutFailed = () => {
  return (
    <div className="checkout-success-container">
    <img src={failedImage} alt="" />
    <div className='checkout-title-container'>
      <span className='checkout-success-title'>Failed Transaction</span>
      <span className='checkout-success-description'>
          Something went wrong! Give us some time to <br /> make it work again.
       </span>
       <button className='checkout-success-button'>Try again</button>
    </div>
  </div>
  )
}

export default CheckoutFailed