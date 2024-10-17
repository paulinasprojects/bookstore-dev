interface Props {
  icon:  JSX.Element;
  image: string;
  title: string;
  description: string
}

const DetailsReviews = ({icon, image, title, description}: Props) => {
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
          {description}
        </span>
      </div>
    </div>
  )
}

export default DetailsReviews