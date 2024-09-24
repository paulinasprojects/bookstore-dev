import "@/styles/book-sorter.scss";
import BookDropdown from "./book-dropdown";

const BookSorter = () => {
  return (
    <div className="book-sorter-container">
      <div className="total-books">
        <span className="books-page">Showing 1 - 9 items out of a total of 13.7 million books</span>
      </div>
      <div className="sort-by-container">
        <span className="sort-by">Sort by</span>
        <div>
          <BookDropdown/>
        </div>
      </div>
    </div>
  )
}

export default BookSorter