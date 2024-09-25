interface Props {
  icon:  JSX.Element;
  image: string;
  title: string;
  description: string
}

const DetailsReviews = ({icon, image, title, description}: Props) => {
  return (
    <div className="test-container">
      <img src={image} alt="" className="review-pic" />
      <div className="test-container-2">
        <span className="test-span">
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