import "@/styles/product-item.scss";

interface CheckoutProductItemProps {
  productLabel: string
  image: string;
  productTitle: string;
  productWeight: string;
  productQuantity: string;
  productPrice: string;
  productNotes: string;
}

const CheckoutProductItem = ({productLabel, image, productTitle, productWeight, productQuantity, productPrice, productNotes}: CheckoutProductItemProps) => {
  return (
    <div>
      <div className='product-item-flex-container'>
        {/* Left */}
        <div>
          <div className='product-item-image-container'>
            <span className='product-item-number'>{productLabel}</span>
            <img src={image} alt="" />
          </div>
          </div>
          {/* Right */}
          <div>
            <span className='product-item-title'>{productTitle}</span>
            <div className='right-flex-container'>
            <div className='grams-container'>
              <span className='body-text-3'>{productWeight}</span>
              <span className='span-gram | body-text-3'>{productQuantity}
                <span className='product-item-price'>{productPrice}</span>
              </span>
            </div>
            <div className='notes-container'>
              <span className='note-title'>Note:</span>
              <span className='botdy-text-3'>{productNotes}</span>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CheckoutProductItem