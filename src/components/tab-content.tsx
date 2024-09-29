interface TabContentProps {
  content: React.ReactNode;
}

const TabContent = ({ content }: TabContentProps) => {
  return (
    <div>{content}</div>
  )
}

export default TabContent;