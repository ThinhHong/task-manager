import { AddTask } from "./Add";
import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const taskName = (event) =>{
    setNewTask(event.target.value);
  };

  const addTask = () =>{
    // set id to the last id in the taskList + 1
    // if taskList is empty, set id to 1
    const id = (taskList.length !== 0)
    ? taskList[taskList.length-1].id + 1
    : 1; 

    const newTaskAdd = ({
      id: id,
      task: newTask,
      completed: false
    });
    
    setTaskList([...taskList, newTaskAdd]);
  }

  const completeTask = (id) =>{
    const completeTaskList = taskList.map((task) =>{
      if (task.id === id){
        console.log(task.completed); 
        return {...task, completed: true};
      } else {
        return task;
      }
    });
    
    setTaskList(completeTaskList);
  } 
  const deleteTask = (id)=>{
    const deletedTaskList = taskList.filter((task)=>{
      return id !== task.id;
    })

    setTaskList(deletedTaskList);
  };



  return (
    <div className="App">
      <h1> Task Manager</h1>
      <div className="inputTask">
        <input type="text" onChange={taskName}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
      {taskList.map((task) =>{
        return (
          <AddTask
          id={task.id}
          taskName={task.task}
          completed={task.completed}
          completeTask={completeTask}
          deleteTask={deleteTask}
          />
        )})}
      </div>
    </div>
  );
}

export default App;
