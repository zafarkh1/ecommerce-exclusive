import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarLng from "./components/NavbarLng";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <NavbarLng />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
