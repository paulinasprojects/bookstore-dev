import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import SignUpPage from "./pages/sign-up"
import SignInPage from "./pages/sign-in"
import MainLayout from "@/components/layouts/main-layout"
import LayoutWithUser from "@/components/layouts/layout-with-user"
import ForgotPassword from "./pages/forgot-password"
import ForgotPasswordStep2 from "./pages/forgot-password-step-2"
import ForgotPasswordStep3 from "./pages/forgot-password-step-3"
import ForgotPasswordStep4 from "./pages/forgot-password-step-4"
import DiscoverPage from "./pages/discover-page"
import BookDetailsPage from "./pages/book-details-page"
import NotificationsPage from "./pages/notifications-page"
import LayoutWithDiscover from "./components/layouts/layout-with-discover"
import CartPage from "./pages/cart-page"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<MainLayout><HomePage/></MainLayout>}/>
    <Route path="/sign-up" element={<SignUpPage/>}/>
    <Route path="/sign-in" element={<SignInPage/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/forgot-password/step-2" element={<ForgotPasswordStep2/>}/>
    <Route path="/forgot-password/step-3" element={<ForgotPasswordStep3/>}/>
    <Route path="/forgot-password/step-4" element={<ForgotPasswordStep4/>}/>
    <Route path="/discover" element={<LayoutWithUser><DiscoverPage/></LayoutWithUser>}/>
    <Route path="/notifications" element={<LayoutWithDiscover><NotificationsPage/></LayoutWithDiscover>}/>
    <Route path="/cart" element={<LayoutWithDiscover><CartPage/></LayoutWithDiscover>}/>
    <Route path="/detail/books/:bookId" element={<LayoutWithUser><BookDetailsPage/></LayoutWithUser>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
  )
}

export default App
