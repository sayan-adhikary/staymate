import { useState } from "react";
import { CheckCircle2, Circle, Plus, Trash2 } from "lucide-react";

function TaskCard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Pay Hostel Rent",
      completed: false,
    },
    {
      id: 2,
      title: "Wash Clothes",
      completed: true,
    },
    {
      id: 3,
      title: "Buy Groceries",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-5">✅ Tasks</h2>

      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition"
        >
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between border rounded-xl p-3 hover:bg-slate-50 transition"
          >
            <div
              onClick={() => toggleTask(task.id)}
              className="flex items-center gap-3 cursor-pointer flex-1"
            >
              {task.completed ? (
                <CheckCircle2 size={22} className="text-green-600" />
              ) : (
                <Circle size={22} className="text-gray-400" />
              )}

              <span
                className={
                  task.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }
              >
                {task.title}
              </span>
            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        {tasks.length === 0 && (
          <p className="text-center text-slate-500 py-6">No tasks available.</p>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
