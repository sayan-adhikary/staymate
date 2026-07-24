import React from "react";
import { Sun, Sunrise, Moon, Icon } from "lucide-react";

function MenuCard() {
  const menu = [
    {
      meal: "Breakfast",
      food: "Idli & Sambar",
      icon: Sunrise,
    },
    {
      meal: "Lunch",
      food: "Veg Biryani",
      icon: Sun,
    },
    {
      meal: "Dinner",
      food: "Chicken Curry",
      icon: Moon,
    },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
      <h2 className="text-xl font-semibold">🍽 Today's Menu</h2>

      <p className="text-slate-500 text-sm">Today's hostel meals</p>
      {menu.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.meal}
            className="flex items-center p-4 bg-slate-50 rounded-xl hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">
                <Icon size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.meal}</h3>
                <p className="text-slate-500">{item.food}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuCard;
