interface Props {
  title: string;
  description: string;
  isBig?: boolean
}


const GridItem = ({ title, description, isBig }: Props) => {
  return (
    <div className="flex-col-container">
      <span className="book-details-title">{title}</span>
      <span className={isBig ? "book-details-description-big" : "book-details-description"}>{description}</span>
    </div>
  )
}

export default GridItem