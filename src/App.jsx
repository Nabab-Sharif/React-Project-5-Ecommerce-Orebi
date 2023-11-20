import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home"
import RootLayout from "./layout/RootLayout"
import Error from "./components/Error"




const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
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
