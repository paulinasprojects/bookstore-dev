
interface MilestoneContentProps {
  milestoneNumber: string;
  milestoneTitle: string;
  milestoneDescription: string;
}

const MilestoneContent = ({ milestoneDescription, milestoneNumber, milestoneTitle }: MilestoneContentProps) => {
  return (
    <div className="milestone-container">
      <span className="subtitle-1 number">{milestoneNumber}</span>
      <div className="flex-container">
        <span className="subtitle-1">
          {milestoneTitle}
        </span>
        <span className="testimonial-milestone-description">{milestoneDescription}</span>
      </div>
    </div>
  );
};

export default MilestoneContent;