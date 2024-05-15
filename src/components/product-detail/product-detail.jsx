import { useSearchParams } from "react-router-dom";
import { ProductContext } from "../../context";
import { useContext } from "react";

function ProductDetails() {
  const { products } = useContext(ProductContext);

  const [searchParams] = useSearchParams();

  const productId = Number(searchParams.get("product"));

  const productDetails = products.find((product) => product.id === productId);

  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <h2>Product Details</h2>
      <h3>
        <span style={{ fontWeight: "bold" }}>Product Name:</span>{" "}
        {productDetails.name}
      </h3>
      <img src={productDetails.image} alt="" />
      <p>
        <span style={{ fontWeight: "bold" }}>Product Description:</span>{" "}
        {productDetails.description}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
        {productDetails.price}
      </p>
      {productDetails.onSale && (
        <p>
          <strong>This product is on sale</strong>
        </p>
      )}
    </div>
  );
}

export default ProductDetails;
