import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contactus";
import About from "./pages/about";
import Product from "./pages/product";
import Services from "./pages/service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/produk" element={<Product />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
