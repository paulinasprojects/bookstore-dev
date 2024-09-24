import "@/styles/small-book-nav.scss";

const SmallBookNav = () => {
  return (
    <div>
      <div className="small-book-nav-container">
        <span className="active-nav-item">All Book</span>
        <span className="nav-item">What's new</span>
        <span className="nav-item">Popular</span>
      </div>
    </div>
  )
}

export default SmallBookNav