import React from "react";

function StatCard({ title, value, color, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div className={`${color} p-4 rounded-full`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;