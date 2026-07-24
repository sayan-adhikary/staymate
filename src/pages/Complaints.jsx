import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { complaintData } from "../data/complaintData.js";

function Complaints() {
  const [complaints, setComplaints] = useState(complaintData);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Maintenance");

  const addComplaint = () => {
    if (title.trim() === "") return;

    const newComplaint = {
      id: Date.now(),
      title,
      category,
      status: "Pending",
    };

    setComplaints([newComplaint, ...complaints]);
    setTitle("");
    setCategory("Maintenance");
  };

  const deleteComplaint = (id) => {
    setComplaints(complaints.filter((complaint) => complaint.id !== id));
  };

  const toggleStatus = (id) => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id
          ? {
              ...complaint,
              status: complaint.status === "Pending" ? "Resolved" : "Pending",
            }
          : complaint,
      ),
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">🚨 Complaints</h1>

        <p className="text-slate-500 mt-2">Raise and track hostel complaints</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
        <input
          type="text"
          placeholder="Complaint title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        >
          <option>Maintenance</option>
          <option>Food</option>
          <option>Internet</option>
          <option>Cleaning</option>
          <option>Electricity</option>
        </select>

        <button
          onClick={addComplaint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
        >
          <Plus size={18} />
          Add Complaint
        </button>
      </div>

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-lg">{complaint.title}</h2>

              <p className="text-slate-500">{complaint.category}</p>

              <button
                onClick={() => toggleStatus(complaint.id)}
                className={`mt-3 px-3 py-1 rounded-full text-sm font-medium ${
                  complaint.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {complaint.status}
              </button>
            </div>

            <button
              onClick={() => deleteComplaint(complaint.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}

        {complaints.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center text-slate-500">
            No complaints found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Complaints;
