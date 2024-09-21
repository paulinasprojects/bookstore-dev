import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { newBooksData } from "@/data/data";

import "@/styles/new-books.scss";
import NewBookCard from "./new-book-card";

const NewBooks = () => {
  return (
    <div>
      <div className="new-books-container">
        <h1 className="new-books-title">New Books</h1>
        <div className="new-books-button-container">
          <button className="arrow-back-button">
            <IoMdArrowBack className="new-books-arrow-icon"/>
          </button>
          <button className="arrow-forward-button">
            <IoMdArrowForward className="new-books-arrow-icon"/>
          </button>
        </div>
      </div>
      <div className="book-card-container">
        {newBooksData.map((book) => (
        <NewBookCard
          key={book.bookTitle}
          bookImage={book.bookImage}
          bookTitle={book.bookTitle}
          bookWriter={book.bookWriter}
          bookPrice={book.bookPrice}
          discountPrice={book.discountPrice}
        />
        ))}
      </div>
    </div>
  )
}

export default NewBooks