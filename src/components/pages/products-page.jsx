import { useContext } from "react";
import { ProductContext } from "../../context";

function ProductsPage() {
  const { products } = useContext(ProductContext);

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1200px",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px 30px",
      }}
    >
      <h2>New Arrivals</h2>
      <p>{products.length} products</p>
    </div>
  );
}

export default ProductsPage;
