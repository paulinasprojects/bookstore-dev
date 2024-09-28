interface TotalSummaryProps {
  summaryTitle: string;
  summaryPrice: string;
}

const TotalSummary = ({ summaryTitle, summaryPrice }: TotalSummaryProps) => {
  return (
      <>
      <div className="flex-row">
        <span className="total-title">{summaryTitle}</span>
        <span className="total-price">{summaryPrice}</span>
      </div>
      </>
  )
}

export default TotalSummary;