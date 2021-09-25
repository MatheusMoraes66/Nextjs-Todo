import Layout from "../components/Layout";
import { useTasks } from "../context/TasksContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
const Home = () => {
  const { tasks, deleteTask } = useTasks();
  const {push} = useRouter();
  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <h2>There are no Tasks</h2>
        ) : (
          <div>
            {tasks.map((task, index) => {
              return (
                <div
                  key={index}
                  className="flex bg-gray-700 hover:bg-gray-600 px-10 py-5 m-2 items-center"
                >
                  <div className="flex-none w-16 h-16 items-center">
                    <span className="text-5xl">{index}</span>
                  </div>
                  <div className="flex-grow h-16 items-stretch">
                    <h1 className="font-bold">{task.title}</h1>
                    <p className="text-gray-300">{task.description}</p>
                    <small className="text-gray-400">{task.id}</small>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex-grow-0 w-16 h-8 text-center">
                      <button className="inline-flex cursor-pointer" onClick={() => deleteTask(task.id)} >
                        <AiOutlineDelete className="text-red-300 hover:text-red-500" />
                      </button>
                    </div>
                    <div className="flex-grow-0 w-16 h-8 text-center">
                      <button className="inline-flex cursor-pointer" onClick={() =>push("/edit/"+ task.id)}>
                        <AiOutlineEdit className="text-yellow-300 hover:text-yellow-500" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
