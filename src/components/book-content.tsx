interface BookContentProps {
  content: React.ReactNode;
}

const BookContent = ({ content }: BookContentProps) => {
  return (
    <div>{content}</div>
  )
}

export default BookContent;