import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import RootLayout from "./layout/RootLayout"
import Error from "./components/errors/Error"
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Journal from "./pages/journal/Journal"




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
