import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "success":
      return {
        state: "success",
        errorMssg: "",
        data: action.payload,
      };
    case "error":
      return {
        state: "error",
        errorMssg: action.payload,
        data: [],
      };
  }
  return state;
}

export function useQuery(url) {
  const [{ state, errorMssg, data }, dispatch] = useReducer(reducer, {
    state: "loading",
    errorMssg: "",
    data: [],
  });
  // const [state, setState] = useState("loading");
  // const [errorMssg, setErrorMssg] = useState("");
  // const [data, setData] = useState([]);
  useEffect(() => {
    // data fetch, set
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //throw new Error("api down.");
        // setData(data);
        // setState("success");
        dispatch({ type: "success", payload: data });
      })
      .catch((err) => {
        // setState("error");
        // setErrorMssg(err.message);
        dispatch({ type: "error", payload: err.message });
      });
  }, []);

  return { state, data, errorMssg };
}
