import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Store/habitsslice";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const value = useSelector((state:any) => {
    return state.habits.value;
  });
  console.log(value);
  
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <p className="text-center text-2xl mt-10">Count {value || 0}</p>
        <div className="flex flex-row gap-10 mt-10">
          <button
            className="btn text-2xl bg-red-300 rounded-2xl p-4 cursor-pointer"
            onClick={() => dispatch(increment())}
          >
            Increase Count
          </button>
          <button
            className="btn text-2xl bg-green-300 rounded-2xl p-4 cursor-pointer"
            onClick={() => dispatch(decrement())}
          >
            Decrease Count
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
