import newbookOne from "/new-book.png";
import newbookTwo from "/new-book-two.png";
import newbookThree from "/new-book-three.png";
import newbookFour from "/new-book-four.png";

import paintBook from "/paint-book.png";
import lautBercerita from "/laut-bercerita.png";
import harryPotterBook from "/harry-potter.png";
import matahariBook from "/matahari-book.png";

export const newBooksData = [
  {
    bookImage: newbookOne,
    bookTitle: "English Classics: The Island Of Doctor Moreau",
    bookWriter: "H.g. Wells",
    discountPrice: "$23.5",
    bookPrice: "$19.0",
  },
  {
    bookImage: newbookThree,
    bookTitle: "Funiculi Funicula : Newly Revealed Stories",
    bookWriter: "Toshikazu",
    bookPrice: "$19.0",
  },
  {
    bookImage: newbookTwo,
    bookTitle: "Sagaras",
    bookWriter: "Tere Liye",
    bookPrice: "$19.0",
  },
  {
    bookImage: newbookFour,
    bookTitle: "We Go Today",
    bookWriter: "Ziggy",
  },
];

export const recommendedBookCategories = [
  {
    categoryName: "All books",
  },
  {
    categoryName: "Fiction",
  },
  {
    categoryName: "Literature",
  },
  {
    categoryName: "Non Fiction",
  },
  {
    categoryName: "Realism",
  },
  {
    categoryName: "School",
  },
  {
    categoryName: "Magazine",
  },
  {
    categoryName: "Ebook",
  },
];

export const recommendationAllBooks = [
  {
    bookImage: paintBook,
    bookTitle: "Paint",
    bookWriter: "Lee Heeyoung",
    bookPrice: "$19.0",
  },
  {
    bookImage: lautBercerita,
    bookTitle: "Laut Bercerita",
    bookWriter: "Leila S.",
    discountPrice: "$23.5",
    bookPrice: "$19.0",
  },
  {
    bookImage: harryPotterBook,
    bookTitle: "Harry Potter and the POA",
    bookWriter: "JK Rowling",
    bookPrice: "$34.0",
  },
  {
    bookImage: matahariBook,
    bookTitle: "Matahari",
    bookWriter: "Tere Liye",
    discountPrice: "$22.25",
    bookPrice: "$19.0",
  },
];
