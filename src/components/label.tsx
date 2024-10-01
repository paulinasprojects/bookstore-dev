
interface LabelProps {
  labelTitle: string;
  className?: string;
  htmlFor?: string
}

const Label = ({labelTitle, className, htmlFor}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>{labelTitle}</label>
  )
}

export default Label