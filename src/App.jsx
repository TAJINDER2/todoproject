import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [taskData, setTaskData] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodos = () => {
    if (taskData.trim() === "") {
      alert("Please enter task");
    } else {
      const newTask = { text: taskData, completed: false };
      setTodoList([...todoList, newTask]);
      setTaskData("");
      alert("Task Added");
    }
  };
  const toggleComplete=(index)=>{
    const updatedList=[...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);

  }

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter your task.."
          value={taskData}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <button onClick={handleAddTodos}>Add Task</button>
      </div>
      <ul>
        {todoList.map((item, index) => {
          return(
          <li key={index} className={item.completed ? "done": ""}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={item.completed}
              onChange={() => toggleComplete(index)}
            />
            {item.text}
          </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
