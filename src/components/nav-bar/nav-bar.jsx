// named export
import "./nav-bar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default function NavBar() {
  return (
    // JSX
    <nav className="product-nav">
      <h3>Logo</h3>
      <ul className="product-menu-items">
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/products">Products</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Login</StyledLink>
        </li>
        <li>
          <StyledLink to="/register">Register</StyledLink>
        </li>
      </ul>
    </nav>
  );
}
