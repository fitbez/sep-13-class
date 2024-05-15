import AddProduct from "../add-product/add-product";

function AddProductPage(props) {
  return <AddProduct handleProductAdd={props.handleProductAdd} />;
}

export default AddProductPage;
