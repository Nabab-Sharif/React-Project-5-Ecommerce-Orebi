import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import RootLayout from "./layout/RootLayout"
import Error from "./components/errors/Error"
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Journal from "./pages/journal/Journal"
import CartPage from "./pages/viewCart/CartPage"
import CheckoutPage from "./pages/checkout/CheckoutPage"
import Myaccount from "./pages/myAccount/Index"
import Dashboard from './pages/myAccount/Dashboard';
import Others from './pages/myAccount/Others';
import Download from './pages/myAccount/Download';
import Address from './pages/myAccount/Address';
import AccountDetails from './pages/myAccount/AccountDetails';
import SingleProduct from './pages/product/SingleProduct';




const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route element={<Myaccount />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/others" element={<Others />} />
            <Route path="/download" element={<Download />} />
            <Route path="/address" element={<Address />} />
            <Route path="/accountdetails" element={<AccountDetails />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </>
    )
  )



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}



export default App
