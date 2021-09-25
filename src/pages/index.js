import { useTasks } from "../context/taskContext";

const Home = () => {
  const {hello} = useTasks();
  return (
    <div>
      {hello}
    </div>
  )
}

export default Home;