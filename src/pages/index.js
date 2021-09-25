import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

const Home = () => {
  const {hello} = useContext(TaskContext);
  return (
    <div>
      {hello}
    </div>
  )
}

export default Home;