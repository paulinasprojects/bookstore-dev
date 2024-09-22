import "@/styles/recommendation.scss";
import BookTabs from "./book-tabs";

const Recommendation = () => {
  return (
    <div>
      <div className="recommendation-title-container">
        <h1 className="recommendation-title">Recommendation</h1>
      </div>
      <div>
        <BookTabs/>
      </div>
    </div>
  )
}

export default Recommendation