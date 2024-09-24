import "@/styles/discover.scss"
import BookSorter from "./book-sorter"
import { recommendationDiscoverBooks } from "@/data/data"
import Pagination from "./pagination"
import DiscoverBookCard from "./discover-book-card"
import BookDropdownMobile from "./book-dropdown-mobile"

const Discover = () => {
  return (
    <div className="discover-container">
      <div className="discover-flex-container">
        {/* Left */}
        <div className="discover-categories-container">
          <span className="fiction-books">Fiction & Literature</span>
          <span className="category-item">Thriller</span>
          <span className="romance-item">Romance</span>
          <span className="category-item">Young Adult</span>
          <span className="category-item">Serial</span>
          <div className="discover-categories-container-2">
            <span className="category-item">Non Fiction</span>
            <span className="category-item">Comic</span>
            <span className="category-item">Children Books</span>
          </div>
        </div>
        <div className="discover-categories-mobile-container">
          <div className="dropdown-container">
            <span className="fiction-literature">Fiction & Literature</span>
            <BookDropdownMobile
              menuButtonName="Romance"
            />
            <BookDropdownMobile
              menuButtonName="Category"
            />
          </div>
        </div>
        {/* Right */}
        <div>
          <BookSorter/>
        <div className="grid-container">
          {recommendationDiscoverBooks.map((book) => (
            <DiscoverBookCard
              key={book.bookTitle}
              bookImage={book.bookImage}
              bookPrice={book.bookPrice}
              bookTitle={book.bookTitle}
              bookWriter={book.bookWriter}
              discountPrice={book.discountPrice}
            />
          ))}
        </div>
        <div className="discover-pagination-container">
          <Pagination/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Discover