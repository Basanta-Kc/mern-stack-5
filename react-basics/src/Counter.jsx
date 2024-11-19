import { useState } from "react";
import "./App.css";
// setCount(0), setCount((prev) => {})
function Counter() {
  // let count = 0;
  let [count, setCount] = useState(0); // [ 0, () => {}]
  const handleIncrement = () => {
    //count = count + 1;
    setCount(++count);
    // setCount((prev) => {
    //   return prev + 1;
    // }); // 0 + 1 = 1
    // setCount((prev) => {
    //   return prev + 1;
    // }); // 0 + 1  = 1
  };

  const handleDecrement = () => {
    // count = count - 1;
    setCount(count - 1);
  };

  console.log("app function called (re-render)");
  return (
    <>
      <p>
        {count > 4 ? "Cannot increment more than 5" : ""}
        <button disabled={count > 4} onClick={handleIncrement}>
          +
        </button>
        {count}
        <button disabled={count < -4} onClick={handleDecrement}>
          -
        </button>
        {count < -4 ? "Cannot decremnt less than - 5" : ""}
      </p>
    </>
  );
}

// doucment.getElementById('button').addEventLister('click', () => {})

export default Counter;

// const num = [1, 2];
// const [a, b] = num;
// function useState() {
//   return;
// }

// function test() {
//   console.log("test");
// }

// test()
// test()
