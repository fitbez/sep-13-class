import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 40px auto;
  background-color: #f4f4f4;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24);
  padding: 2rem;
  gap: 1rem;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 250px;
  border: none;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 5px 7.5px;
`;
const StyledSelect = styled.select`
  width: 250px;
  border: none;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 5px 7.5px;
`;

const StyledButton = styled.button`
  padding: 5px 0px;
  background-color: #11ccf4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const StyledSuccessMessage = styled.div`
  border: 1px solid #60d394;
  background-color: #aaf683;
  width: 100%;
  height: 40px;
  padding: 5px;
  opacity: 0.7;
  color: #333;
`;
const StyledErrorMessage = styled.div`
  border: 1px solid #e71d36;
  background-color: #f25c54;
  width: 100%;
  padding: 5px;
  height: 40px;
  opacity: 0.7;
  color: #fff;
`;

function AddProduct(props) {
  //initializing the productData state
  const [productData, setProductData] = useState({
    product_name: "",
    description: "",
    price: "",
    image: "",
    onSale: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setProductData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  console.log("product data", productData);

  //sending the form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/product",
        productData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (!response.data) {
        setIsLoading(true);
      }

      if (response.status === 200) {
        setIsSuccess(true);
        navigate("/");
        console.log("Product is created successfully:", response.data);
        setProductData({
          product_name: "",
          description: "",
          category: "",
          price: "",
          image: "",
          onSale: false,
        });
      } else {
        console.error("Error creating product", response.statusText);
      }
    } catch (error) {
      setIsError(true);
      console.error("Error", error);
    }
    // update our products state with a new product data
    // props.handleProductAdd(productData);
    // reset the form fields after adding the product
  };

  const categories = ["Electronics", "Clothing", "Furniture", "Books"];

  console.log("is error", isError);
  return (
    <>
      <StyleForm onSubmit={handleSubmit}>
        {isSuccess && (
          <StyledSuccessMessage>
            <p>Product has been successfuly added</p>
          </StyledSuccessMessage>
        )}
        {isError && (
          <StyledErrorMessage>
            <p>Something went wrong. Please try again!</p>
          </StyledErrorMessage>
        )}
        {isLoading && <p>Loading...</p>}
        <StyledLabel htmlFor="">
          Product Name:
          <StyledInput
            onChange={handleChange}
            type="text"
            name="product_name"
            value={productData.product_name}
          />
        </StyledLabel>
        <StyledLabel htmlFor="">
          Description:
          <StyledInput
            onChange={handleChange}
            type="text"
            name="description"
            value={productData.description}
          />
        </StyledLabel>
        <StyledLabel htmlFor="">
          Category:
          <StyledSelect
            onChange={handleChange}
            name="category"
            value={productData.category}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <StyledLabel htmlFor="">
          Price:
          <StyledInput
            onChange={handleChange}
            type="text"
            name="price"
            value={productData.price}
          />
        </StyledLabel>
        <StyledLabel htmlFor="">
          ImageURl:
          <StyledInput
            onChange={handleChange}
            type="text"
            name="image"
            value={productData.image}
          />
        </StyledLabel>
        <StyledButton type="submit"> Submit</StyledButton>
      </StyleForm>
    </>
  );
}

export default AddProduct;
