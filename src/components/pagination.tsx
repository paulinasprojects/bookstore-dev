import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import "@/styles/pagination.scss"

const Pagination = () => {
  return (
    <div className="pagination-container">
      <IoArrowBackCircleOutline className="pagination-arrows"/>
      <span className="pagination-circle-active">1</span>
      <span className="pagination-circle">2</span>
      <span className="pagination-dots">...</span>
      <span className="pagination-circle">9</span>
      <span className="pagination-circle">10</span>
      <IoArrowForwardCircleOutline className="pagination-arrows"/>
    </div>
  )
}

export default Pagination