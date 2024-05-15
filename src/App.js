import "./App.css";
import NavBar from "./components/nav-bar/nav-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home-page";
import LoginPage from "./components/pages/login-page";
import ProductsPage from "./components/pages/products-page";
import RegisterPage from "./components/pages/register-page";
import About from "./components/pages/about-page";
import AddProductPage from "./components/pages/add-product-page";
import ProductProvider from "./context";
import ProductDetails from "./components/product-detail/product-detail";
import TestComponent from "./components/test-component/test-component";

// This is the App components
function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
