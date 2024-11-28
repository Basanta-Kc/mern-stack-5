import {
  useReducer,
  useState,
  useMemo,
  memo,
  useCallback,
  useEffect,
} from "react";
import "./App.css";

const calculateFactorial = (n) => {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

// setCount(0), setCount((prev) => {})
function reducer(state, action) {
  // if (action == "increment") return state + 1;
  // if (action == "decrement") return state - 1;
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

function DisplayValue({ value }) {
  useEffect(() => {
    return () => {
      console.log("cleanup function called");
    };
  }, []);
  return <h2>{value}</h2>;
}

function InputValue({ value, handleChange }) {
  return <input type="text" value={value} onChange={handleChange} />;
}

const InputValueMemoize = memo(InputValue);

const DisplayValueMemoized = memo(DisplayValue);

function Counter() {
  // let count = 0;
  // let [count, setCount] = useState(0); // [ 0, () => {}]
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("after cleanup");
    // lgoic
    return () => {
      console.log("cleanup function of counter", state.count);
    };
  }, [state.count]);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // value (numeric value)
  const factorial = useMemo(
    () => calculateFactorial(state.count),
    [state.count]
  );

  return (
    <>
      {/* <DisplayValue value={value} /> */}
      {state.count < 2 && <DisplayValueMemoized value={value} />}

      <InputValueMemoize value={value} handleChange={handleChange} />
      <p>
        {state.count > 4 ? "Cannot increment more than 5" : ""}
        <button disabled={state.count > 4} onClick={handleIncrement}>
          +
        </button>
        {state.count}
        <button disabled={state.count < -4} onClick={handleDecrement}>
          -
        </button>
        {state.count < -4 ? "Cannot decremnt less than - 5" : ""}
      </p>
      <p>
        Factorial of {state.count} is {factorial}
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
