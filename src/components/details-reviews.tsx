interface Props {
  icon:  JSX.Element;
  image: string;
  title: string;
}
const DetailsReviews = ({icon, image, title}: Props) => {
  return (
    <div className="details-review-container">
      <img src={image} alt="" className="review-pic" />
      <div className="review-container">
        <span className="icon-span">
          {icon} 5.0
        </span>
        <span className="span-title">
          {title}
        </span>
        <span className="span-description">
        The Stories of Choo Choo is a compilation of drawings created by Citra <br /> Marina during her daily train ride on Jakarta Commuter Line.
        </span>
      </div>
    </div>
  )
}

export default DetailsReviews