import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import SignUpPage from "./pages/sign-up"
import SignInPage from "./pages/sign-in"
import MainLayout from "./components/layouts/main-layout"
import ForgotPassword from "./pages/forgot-password"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<MainLayout><HomePage/></MainLayout>}/>
    <Route path="/sign-up" element={<SignUpPage/>}/>
    <Route path="/sign-in" element={<SignInPage/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
  )
}

export default App
