import successImage from '/success.png';
import "@/styles/checkout-success.scss";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const { height, width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <>
    <Confetti
      width={width}
      height={height}
    />
    <div className="checkout-success-container">
      <img src={successImage} alt="" />
      <div className='checkout-title-container'>
        <span className='checkout-success-title'>Successful Transaction</span>
        <span className='checkout-success-description'>
          Congrats your order has been successful. Keep an eye <br />
          on your order process on the transaction page!
         </span>
         <button className='checkout-success-button' onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
    
    </>
  )
}

export default CheckoutSuccess