import { Home, CalendarDays } from "lucide-react";
import StatusBadge from "./StatusBadge";

function RentCard({ rent }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-500">Monthly Rent</p>

          <h2 className="text-4xl font-bold mt-2">₹ {rent.amount}</h2>

          <div className="flex items-center gap-2 mt-5 text-slate-500">
            <CalendarDays size={18} />

            <span>Due : {rent.dueDate}</span>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-2xl">
          <Home size={30} className="text-blue-600" />
        </div>
      </div>

      <div className="mt-6">
        <StatusBadge status={rent.status} />
      </div>
    </div>
  );
}

export default RentCard;
