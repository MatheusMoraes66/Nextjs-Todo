import Layout from "../components/Layout";

const TaskFormPage = () => {
  return (
    <Layout>
      <form>
        <h1>Add a Task</h1>
        <input
          type="text"
          placeholder="Write a title"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
        />
        <textarea
          rows="2"
          type="text"
          placeholder="Write a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
        ></textarea>

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-50" disabled>Save</button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
