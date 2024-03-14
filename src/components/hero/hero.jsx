import cart from "./cart.png";
import Button from "../button/button";

function Hero() {
  const isLoggedIn = true;
  //   const fName = "John";
  //   const lName = " Doe";

  const person = {
    fName: "John",
    lName: "Doe",
  };
  return (
    // JSX
    // React Fragment
    <>
      <section style={styledSection}>
        <div>
          <h1 style={{ fontSize: "64px", marginBottom: "1rem" }}>
            Sell Your Products
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
            habitasse platea dictumst vestibulum rhoncus est. Lorem ipsum dolor
            sit amet consectetur adipiscing elit duis tristique. Vitae elementum
            curabitur vitae nunc sed velit dignissim sodales ut. Consequat
            interdum varius sit amet mattis. Imperdiet proin fermentum leo vel
            orci porta non. Ut aliquam purus sit amet luctus venenatis lectus
            magna fringilla. Eget sit amet tellus cras adipiscing enim. Auctor
            eu augue ut lectus arcu bibendum at varius vel. Lectus urna duis
            convallis convallis tellus id interdum velit. Risus nec feugiat in
            fermentum posuere. Eget mi proin sed libero enim sed faucibus. Et
            magnis dis parturient montes nascetur. Morbi tincidunt ornare massa
            eget egestas purus viverra. Ut venenatis tellus in metus vulputate.
            Aenean sed adipiscing diam donec adipiscing tristique risus nec.
            Condimentum vitae sapien pellentesque habitant morbi.
          </p>
        </div>
        <img src={cart} alt="this is a cart" style={styledImage} />
      </section>
      {/* && loggical operator in JS */}
      {/* ? ternary operator in JS */}
      {isLoggedIn ? (
        <>
          <Button
            text="Add Product"
            backgroundColor="#11ccf4"
            border="none"
            color="#fff"
          />
          <Button
            text="Learn More"
            backgroundColor="transparent"
            border="2px solid #000"
            color="black"
          />
        </>
      ) : null}

      {/* <p>{`My full name is ${person.fName} ${person.lName}`}</p> */}
    </>
  );
}

const styledSection = {
  display: "flex",
  padding: "2rem 4rem 1rem 4rem",
  alignItems: "center",
  gap: "4rem",
};

const styledImage = {
  width: "250px",
  height: "250px",
};

// const obj = [{ name: "fitsume" }, {}];

export default Hero;
