import { useState } from "react";
import checkoutImage from '/checkout-image.png';
import CheckoutDropdown from "@/components/checkout-dropdown";
import CheckoutProductItem from "@/components/checkout-product-item";
import CheckoutSummary from "@/components/checkout-summary";
import PaymentMethods from "@/components/payment-methods";
import checkoutImage2 from '/checkout-image-two.png';
import AddNewCardModal from "@/components/modal";
import "@/styles/checkout.scss";

const CheckoutPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="checkout-flex-container">
        {/* Left */}
        <div className="left-container-flex">
          <div className="checkout-title-container">
            <h1 className="checkout-title">Checkout</h1>
          </div>
            <span className="checkout-shipping-address">Shipping Address</span>
            <div className="checkout-home-shipping-container">
              <div className="checkout-home-container">
                <span className="checkout-home">Home</span>
                <span className="checkout-description">Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit.</span>
              </div>
              <div className="checkout-duration-container">
                <span className="checkout-home">Choose Duration</span>
                <span className="checkout-description">The default fee is same as the cost of <br /> any location</span>
                <CheckoutDropdown/>
              </div>
            </div>
            <div className="checkout-title-container">
              <span className="checkout-title">Product Item</span>
            </div>
            <div className="checkout-product-items">
            <CheckoutProductItem
              image={checkoutImage}
              productLabel="01"
              productTitle="Para Pelindung (The Guardians)"
              productWeight="100gr"
              productQuantity="1 book x"
              productPrice="$19.0"
              productNotes="Please put plastic cover for the book"
            />
            <CheckoutProductItem
              image={checkoutImage2}
              productLabel="02"
              productTitle="Laut Bercerita"
              productWeight="100gr"
              productQuantity="1 book x"
              productPrice="$19.0"
              productNotes="-"
            />
            </div>
        </div>
        {/* Right */}
        <div className="checkout-right-container">
            <div className="checkout-right-title-container">
              <span className="checkout-right-title">Payment Method</span>
              <button className="checkout-right-add-new" onClick={() => setOpen(!open)}>Add new</button>
            </div>
            <div>
              <PaymentMethods/>
            </div>
            {/* Summary */}
              <CheckoutSummary/>
          </div>
      </div>
        {open && (
          <AddNewCardModal setOpen={toggleModal}/>
        )}
    </div>
  )
}

export default CheckoutPage