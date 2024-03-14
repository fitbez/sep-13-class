import "./App.css";
import NavBar from "./components/nav-bar/nav-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home-page";
import LoginPage from "./components/pages/login-page";
import ProductsPage from "./components/pages/products-page";
import RegisterPage from "./components/pages/register-page";

// This is the App components
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
