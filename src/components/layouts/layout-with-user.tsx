import HeaderWithUser from "../header-with-user"
import Footer from "../footer"

interface LayoutWithUserProps  {
  children: React.ReactNode
}

const LayoutWithUser = ({ children }: LayoutWithUserProps) => {
  return (
    <div className="main-layout">
      <HeaderWithUser/>
      <div className="children-continer">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default LayoutWithUser