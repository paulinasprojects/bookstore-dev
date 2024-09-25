import { useNavigate } from "react-router-dom";
import "@/styles/discover-book-card.scss";

interface DiscoverBookCardProps {
  bookImage: string;
  bookTitle: string;
  bookWriter: string;
  itsAllBooks?: boolean;
  discountPrice: string | undefined;
  bookPrice: string | undefined;
}


const DiscoverBookCard = ({bookImage, bookTitle, bookWriter, discountPrice, bookPrice, itsAllBooks}: DiscoverBookCardProps) => {
  const navigate = useNavigate();

  return (
    <div className='new-book-card-container' onClick={() => navigate("/detail/books/1")}>
    <div className={itsAllBooks ? "all-books-card" : "book-card"}>
      <div className='book-card-title-container'>
        <img src={bookImage} alt="" className= "discover-image" />
        <span className='booktitle book-title'>{bookTitle}</span>
        <hr className='book-separator'/>
      </div>
      <div className='discover-book-card-writer-and-price-container'>
        <div className='book-card-writer'>
          <span className='subtitle-4 discover-writer'>Writer</span>
          <span className='book-writer'>{bookWriter}</span>
        </div>
        <div className='book-card-buy-now'>
        <span className='subtitle-4 discover-buy-now'>Buy now</span>
          <div className='discover-book-card-price'>
            <span className='subtitle-2-strikes-through discount-price'>{discountPrice}</span>
            <span className='discover-book-price'>{bookPrice}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DiscoverBookCard