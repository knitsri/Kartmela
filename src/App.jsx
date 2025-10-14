
import Home from "./components/home"
import Login from "./components/login"
import SignUp from "./components/signup"
import ProductItemDetails from "./components/ProductItemDetails"
import Cart from "./components/cart"
import Wishlist from "./components/wishlist"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import ProductCategoryDetails from "./components/ProductCategoryDetails"
import ProfilePage from "./components/Profile"
import OrderConfirmation from "./components/OrderConfirmation"
import SearchPage from "./components/SearchPage"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfService from "./components/TermsOfServices"

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductItemDetails/>}/>
        <Route path="/product/category/:category" element={<ProductCategoryDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/profile" element={<ProfilePage/>}></Route>
        <Route path="/order-confirmation" element={<OrderConfirmation/>}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-of-services" element={<TermsOfService/>}></Route>
      </Routes>

     </BrowserRouter>
    </>
  )
}

export default App



