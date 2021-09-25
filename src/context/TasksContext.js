import { createContext, useContext, useState } from "react";
import {v4 as uuid} from "uuid";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
  
  ]);

  const createTask = (title, description) => {
    setTasks([...tasks, { title: title, description: description, id: uuid()}])
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>{children}</TaskContext.Provider>
  );
};
