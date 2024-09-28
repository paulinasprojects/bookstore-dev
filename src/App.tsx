import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import SignUpPage from "./pages/sign-up"
import SignInPage from "./pages/sign-in"
import MainLayout from "@/components/layouts/main-layout"
import ForgotPassword from "./pages/forgot-password"
import ForgotPasswordStep2 from "./pages/forgot-password-step-2"
import ForgotPasswordStep3 from "./pages/forgot-password-step-3"
import ForgotPasswordStep4 from "./pages/forgot-password-step-4"
import DiscoverPage from "./pages/discover-page"
import BookDetailsPage from "./pages/book-details-page"
import LayoutWithDiscover from "./components/layouts/layout-with-discover"
import CartPage from "./pages/cart-page"
import CheckoutPage from "./pages/checkout-page"
import CheckoutSuccess from "./pages/checkout-success"
import CheckoutFailed from "./pages/checkout-failed"

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
    <Route path="/discover" element={<LayoutWithDiscover><DiscoverPage/></LayoutWithDiscover>}/>
    <Route path="/cart" element={<LayoutWithDiscover><CartPage/></LayoutWithDiscover>}/>
    <Route path="/checkout" element={<LayoutWithDiscover><CheckoutPage/></LayoutWithDiscover>}/>
    <Route path="/checkout/success" element={<LayoutWithDiscover><CheckoutSuccess/></LayoutWithDiscover>}/>
    <Route path="/checkout/failed" element={<LayoutWithDiscover><CheckoutFailed/></LayoutWithDiscover>}/>
    <Route path="/detail/books/:bookId" element={<LayoutWithDiscover><BookDetailsPage/></LayoutWithDiscover>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
  )
}

export default App
