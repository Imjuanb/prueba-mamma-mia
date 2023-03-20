import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"

export default function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="container">
    <Routes>
      <Route
      path="/"
      element={<Home />} />
      <Route 
      path="/cart"
      element={<Cart />}  />
      <Route 
      path="/pizza/:id"
      element={<Pizza />} />
    </Routes>
    </div>
    </>
  )
}