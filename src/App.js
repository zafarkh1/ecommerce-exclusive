import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import NavbarLng from "./components/NavbarLng";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import ProductSeries from "./pages/ProductSeries";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <NavbarLng />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductSeries />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
