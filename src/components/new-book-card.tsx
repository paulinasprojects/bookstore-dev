import "@/styles/new-book-card.scss";

interface NewBookCardProps {
  bookImage: string;
  bookTitle: string;
  bookWriter: string;
  discountPrice: string | undefined;
  bookPrice: string | undefined;
}


const NewBookCard = ({bookImage, bookTitle, bookWriter, discountPrice, bookPrice}: NewBookCardProps) => {
  return (
    <div className=''>
    <div className="book-card">
      <div className='book-card-title-container'>
        <img src={bookImage} alt="" className='book-image' />
        <span className='subtitle-1 book-title'>{bookTitle}</span>
        <hr className='book-separator'/>
      </div>
      <div className='book-card-writer-and-price-container'>
        <div className='book-card-writer'>
          <span className='subtitle-4 writer'>Writer</span>
          <span className='subtitle-2'>{bookWriter}</span>
        </div>
        <div className='book-card-buy-now'>
        <span className='subtitle-4 buy-now'>Buy now</span>
          <div className='book-card-price'>
            <span className='subtitle-2-strikes-through discount-price'>{discountPrice}</span>
            <span className='subtitle-2'>{bookPrice}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewBookCard