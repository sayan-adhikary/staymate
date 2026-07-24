import { useState } from "react";
import { menus } from "../data/menuData";
import { Sunrise, Sun, Moon } from "lucide-react";

function Food() {

  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = Object.keys(menus);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">🍽 Food Menu</h1>
        <p className="text-slate-500 mt-2">Weekly hostel food schedule</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-2 rounded-xl font-medium transition ${
              selectedDay === day
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-slate-100"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menus[selectedDay].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.meal}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <div>
                  <h2 className="font-semibold text-lg">{item.meal}</h2>

                  <p className="text-slate-500">{item.food}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Food;
