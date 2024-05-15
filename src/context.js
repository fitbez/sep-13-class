import { useState, useEffect, createContext } from "react";
import axios from "axios";
// Create the context
export const ProductContext = createContext();

// Create a provider component
const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const handleProductAdd = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  //fetch all products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/product/products"
      );
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        console.error("Error fetching products", response.statusText);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, handleProductAdd, fetchProducts }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
