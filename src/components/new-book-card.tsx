import { useNavigate } from "react-router-dom";
import classNames from "@/lib/utils";
import "@/styles/new-book-card.scss";

interface NewBookCardProps {
  bookImage: string;
  bookTitle: string;
  bookWriter: string;
  itsAllBooks?: boolean;
  discountPrice: string | undefined;
  bookPrice: string | undefined;
}


const NewBookCard = ({bookImage, bookTitle, bookWriter, discountPrice, bookPrice, itsAllBooks}: NewBookCardProps) => {
  const navigate = useNavigate();

  return (
    <div className='new-book-card-container' onClick={() => navigate("/detail/books/1")}>
    <div className={itsAllBooks ? "all-books-card" : "book-card"}>
      <div className='book-card-title-container'>
        <img src={bookImage} alt="" className={classNames(itsAllBooks ? "all-books" : "book-image", "discover-image")} />
        <span className='booktitle book-title'>{bookTitle}</span>
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
            <span className='book-price'>{bookPrice}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NewBookCard