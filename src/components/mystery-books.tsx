import { recommendationMysteryBooks } from "@/data/data";
import NewBookCard from "./new-book-card";

import "@/styles/all-books.scss";

const MysteryBooks = () => {
  return (
    <div className="all-books-container">
      {recommendationMysteryBooks.map((book) => (
        <NewBookCard
          itsAllBooks
          key={book.bookTitle}
          bookImage={book.bookImage}
          bookPrice={book.bookPrice}
          bookTitle={book.bookTitle}
          bookWriter={book.bookWriter}
          discountPrice={book.discountPrice}
        />
      ))}
    </div>
  )
}

export default MysteryBooks;