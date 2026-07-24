function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={28} color={color} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
