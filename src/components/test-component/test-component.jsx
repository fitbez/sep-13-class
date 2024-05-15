import { useRef } from "react";

const TestComponent = () => {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(`You have clicked ${ref.current} times`);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
};

export default TestComponent;
