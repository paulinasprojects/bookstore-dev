import "@/styles/book-of-the-week.scss";
import bookoftheweek from '/book-of-the-week.png';
import { FaBookmark } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";



const BookOfTheWeek = () => {
  return (
    <div className="book-of-the-week-container">
      <div className="book-of-the-week-title-container">
        <h1 className="book-of-the-week-title">Book of The Week</h1>
      </div>
      <div className="book-of-the-week-flex-container">
        {/* Left */}
      <div className="book-of-the-week-card-container">
        <div className="book-of-the-week-card">
          <span className="book-of-the-week-card-writer">Keigo Higashino</span>
          <span className="book-of-the-week-card-title">Salvation of a <br /> Saint</span>
        </div>
        <div className="hr-container">
          <hr className="card-separator" />
        </div>
        <div className="book-of-the-week-card-published">
          <div className="book-of-the-week-originally-published">
            <span className="originally-published">Originally published</span>
            <span className="original-date">July 11, 1960</span>
          </div>
          <div className="book-of-the-week-original-publisher">
            <span className="original-publisher">Publisher</span>
            <span className="original-company">Shin Publishing</span>
          </div>
        </div>
        <div className="book-of-the-week-categories">
          <span className="book-of-the-week-category">Categories</span>
          <span className="book-categories">Fictional, Magical Realism, Asian Literature,<br /> Domestic Fiction</span>
        </div>
        <div className="get-book-container">
          <div>
            <FaBookmark className="bookmark-icon"/>
          </div>
          <div className="get-book-button-container"> 
            <button className="get-book-button">
              Get book
              <BsCart3 className="cart-icon"/>
            </button>
          </div>
        </div>
      </div>
        {/* Right */}
        <div className="book-test">
          <div className="book-of-the-week-image-container">
            <img src={bookoftheweek} alt="" className="book-of-the-week-image" />
          </div>
          <div>
            <span className="image-quote">A, euismod risus mi eget massa at justo <br /> sem. Sed eu id suscipit sociis. Nec nisl viverra <br /> a eget pellentesque quam ornare vitae <br /> facilisi.</span>
            <hr className="image-separator" />
            <span className="image-quote">Chicago Tribune</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookOfTheWeek