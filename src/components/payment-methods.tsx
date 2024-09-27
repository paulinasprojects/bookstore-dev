import {RadioGroup, Radio, Label} from 'react-aria-components';
import "@/styles/payment-methods.scss";
import cashApp from '/cash-app-logo.svg';
import bcaIcon from '/bca-icon.png'

const PaymentMethods = () => {
  return (
    <RadioGroup className="radio-group-container">
      <Label style={{display: "none"}}>Label</Label>
      <div className='radio-group-test'>
        <div style={{display: "flex", gap: "15px"}}>
        <img src={cashApp} alt="" className='cash-app-icon' />
        <div className='cash-app-container'>
          <span className='payment-method-title'>Cash App</span>
          <span className='body-text-3'>$jeremyzucker</span>
        </div>
        </div>
        <Radio value="cash-app"  aria-label='test'></Radio>
      </div>
      <div className='radio-group-test'>
        <div style={{display: "flex", gap: "15px"}}>    
      <img src={bcaIcon} alt="" className='cash-app-icon' />
        <div className='cash-app-container'>
          <span className='payment-method-title'>BCA Virtual <br /> Account</span>
          <span className='body-text-3'>1234 **** **** 6789</span>
        </div>
        </div>
        <Radio value="BCA Virtual Account" aria-label='test'></Radio>
      </div>
  </RadioGroup>
  )
}

export default PaymentMethods