import HeaderWithUser from "../header-with-user"
import Footer from "../footer"

interface LayoutWithDiscoverProps  {
  children: React.ReactNode
}

const LayoutWithDiscover = ({ children }: LayoutWithDiscoverProps) => {
  return (
    <div className="main-layout">
      <HeaderWithUser isNotificationsPage/>
      <div className="children-continer">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default LayoutWithDiscover