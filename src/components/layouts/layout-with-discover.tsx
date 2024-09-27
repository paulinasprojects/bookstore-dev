import HeaderWithUser from "../header-with-user"

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
    </div>
  )
}

export default LayoutWithDiscover