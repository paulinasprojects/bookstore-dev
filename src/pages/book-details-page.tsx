import { sneakPeak1, sneakpeak2, sneakpeak3, testimage, reviewPic1, reviewPic2, reviewPic3 } from '@/components/images';
import { BookDetailsNewBooksData, GridItemsData } from "@/data/data";
import { Star, Share, CartIcon } from "@/components/icons";
import NewBookCard from "@/components/new-book-card";
import AddProductCounter from "@/components/add-product-counter";
import DetailsReviews from "@/components/details-reviews";
import GridItem from "@/components/grid-item";

import "@/styles/book-details.scss";

const BookDetailsPage = () => {

  return (
    <div>
      <div className="book-details-flex-container">
        {/* Left */}
        <div className="book-details-images-container">
          <div className="book-details-container">
            <div className="images-container">
              <div className="first-image-container">
                <img src={testimage} alt="" className="image-1" />
              </div>
              <div className="second-image-container">
                <div>
                  <img src={sneakPeak1} alt="" className="image-2" />
                </div>
                <div>
                  <img src={sneakpeak2} alt="" className="image-3" />
                </div>
                <div>
                  <img src={sneakpeak3} alt="" className="image-4" />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="book-details-summary-container">
            <div className="book-summary-container">
              <span className="book-summary-title">Summary</span>
              <span className="book-summary-description">
                The Stories of Choo Choo is a compilation of drawings created by Citra <br />
                 Marina during her daily train ride on Jakarta Commuter Line. These <br />
                drawings feature Choo Choo, a fox dog character named after the train <br />
                 sound, speaking out thoughts that are occasionally deep, often amusing..
              </span>
              <div className="summary-last-paragraph-container">
               <span className="summary-last-paragraph"> ...and hopefully relatable.</span>
              </div>
            </div>
          </div>
          <div className="book-details-reviews-container">
              <div className="book-details-review-title-container">
                <span className="reviews-title">Review</span>
                <button className="reviews-see-all">See All</button>
              </div>
              <DetailsReviews
                description=" The Stories of Choo Choo is a compilation of drawings created by Citra Marina during her daily train ride on Jakarta Commuter Line."
                icon={<Star/>}
                title="Jeremy Zucker"
                image={reviewPic1}
              />
              <DetailsReviews
                description=" The Stories of Choo Choo is a compilation of drawings created by Citra Marina during her daily train ride on Jakarta Commuter Line."
                icon={<Star/>}
                title="Jeremy Zucker"
                image={reviewPic3}
              />
              <DetailsReviews
                description=" The Stories of Choo Choo is a compilation of drawings created by Citra Marina during her daily train ride on Jakarta Commuter Line."
                icon={<Star/>}
                title="Jeremy Zucker"
                image={reviewPic2}
              />
          </div>
        </div>
        {/* Right */}
        <div className="book-details-right-container">
          <div className="book-details-title-share-container">
            <span className="book-details-writer">Citra Marina</span>
            <Share/>
          </div>
          <div className="book-details-title-container">
            <span className="book-details-book-title">The Stories of Choo Choo: <br /> You're Not as Alone as You <br /> Think</span>
          </div>
          <div className="book-details-price-container">
            <span className="book-details-price-discount">$29.5</span>
            <span className="book-details-book-price">$19.5</span>
          </div>
          <div className="book-details-hr-container">
            <hr className="book-details-hr" />
          </div>
          <div className="grid-item-container">
            {GridItemsData.map((item) => (
              <GridItem
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="second-grid-item-container">
            <GridItem
              isBig={true}
              title='Stock'
              description='103'
            />
            <div className="flex-col-container">
              <span className="book-details-title">Add Product </span>
              <AddProductCounter/>
            </div>
            <GridItem
              isBig={true}
              title='Total Price'
              description='$55,5'
            />
          </div>
          <div className="book-details-button-container">
            <button className="book-details-get-book">
              Get Book
              <CartIcon/>
            </button>
            <button className="book-details-buy-now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="book-details-books-summary-container">
            <div className="book-details-new-books ">
              <span className="reviews-title">New Books</span>
              <button className="reviews-see-all">See All</button>
            </div>
            <div className="book-details-books-container">
              {BookDetailsNewBooksData.map((book) => (
                <NewBookCard
                  bookImage={book.bookImage}
                  bookPrice={book.bookPrice}
                  bookTitle={book.bookTitle}
                  bookWriter={book.bookWriter}
                  discountPrice={book.discountPrice}
                  key={book.bookTitle}
                />
              ))}
            </div>
          </div>
    </div>
  )
}

export default BookDetailsPage