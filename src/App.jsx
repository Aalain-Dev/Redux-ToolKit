import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "./features/tasks/taskSlice";

function App() {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.task.value)
  console.log(data);
  
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addtask(Number(text)));
    settext("");
  };
  return (
    <>
      <h1>Task Manager</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="">Enter task</label>
        <input
          type="number"
          value={text}
          onChange={(e)=> settext(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default App;
