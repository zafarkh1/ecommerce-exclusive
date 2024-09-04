import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarLng from "./components/NavbarLng";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarLng />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
