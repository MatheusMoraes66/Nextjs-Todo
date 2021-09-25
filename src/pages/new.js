import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../context/TasksContext";
import { useRouter } from "next/router";
const TaskFormPage = () => {
  const { createTask, tasks, editTask } = useTasks();
  const {push, query} = useRouter();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    let newContent;

    if (e.target.name == "title") {
      newContent = {
        title: e.target.value,
        description: task.description,
      };
    } else {
      newContent = {
        title: task.title,
        description: e.target.value,
      };
    }
    setTask(newContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!query.id){
        createTask(task.title, task.description);
    }else{
        editTask(query.id, task)
    }
    push("/")
  };

  useEffect(()=> {
    if(query.id){
        const searchTask = tasks.filter(t => t.id === query.id)
        console.log(searchTask)
        let  newContent = {
            title: searchTask[0].title,
            description: searchTask[0].description,
          };
        setTask(newContent)
    }
  }, [])

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>{query.id ? 'Update a Task':'Create a Task'}</h1>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Write a title"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
        />
        <textarea
          rows="2"
          type="text"
          name="description"
          onChange={handleChange}
          value={task.description}
          placeholder="Write a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
        ></textarea>

        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30"
          disabled={task.description && task.title !== "" ? false : true}
        >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
