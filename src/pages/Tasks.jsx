import { useState } from "react";
import { Plus, Trash2, CheckCircle2, Circle } from "lucide-react";
import { taskPageData } from "../data/taskPageData";

function Tasks() {
  const [tasks, setTasks] = useState(taskPageData);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTitle("");
    setPriority("Medium");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">✅ Tasks</h1>

        <p className="text-slate-500 mt-2">Manage your daily hostel tasks</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add Task
        </button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center"
          >
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? (
                <CheckCircle2 className="text-green-600" />
              ) : (
                <Circle className="text-gray-400" />
              )}

              <div>
                <h2
                  className={`font-semibold ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </h2>

                <span
                  className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${getPriorityColor(
                    task.priority,
                  )}`}
                >
                  {task.priority}
                </span>
              </div>
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 />
            </button>
          </div>
        ))}

        {tasks.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center text-slate-500">
            No tasks available.
          </div>
        )}
      </div>
    </div>
  );
}

export default Tasks;
