import React from "react";
import { useState } from "react";
import { Sun, Sunrise, Moon } from "lucide-react";

function MenuCard() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const menus = {
    Monday: [
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
    ],

    Tuesday: [
      {
        meal: "Breakfast",
        food: "Poha & Tea",
        icon: Sunrise,
      },
      {
        meal: "Lunch",
        food: "Dal Rice & Potato Fry",
        icon: Sun,
      },
      {
        meal: "Dinner",
        food: "Paneer Butter Masala & Roti",
        icon: Moon,
      },
    ],

    Wednesday: [
      {
        meal: "Breakfast",
        food: "Bread Omelette",
        icon: Sunrise,
      },
      {
        meal: "Lunch",
        food: "Rajma Rice",
        icon: Sun,
      },
      {
        meal: "Dinner",
        food: "Egg Curry & Rice",
        icon: Moon,
      },
    ],

    Thursday: [
      {
        meal: "Breakfast",
        food: "Dosa & Coconut Chutney",
        icon: Sunrise,
      },
      {
        meal: "Lunch",
        food: "Chicken Biryani",
        icon: Sun,
      },
      {
        meal: "Dinner",
        food: "Veg Pulao & Raita",
        icon: Moon,
      },
    ],

    Friday: [
      {
        meal: "Breakfast",
        food: "Aloo Paratha & Curd",
        icon: Sunrise,
      },
      {
        meal: "Lunch",
        food: "Fish Curry & Rice",
        icon: Sun,
      },
      {
        meal: "Dinner",
        food: "Dal Tadka & Jeera Rice",
        icon: Moon,
      },
    ],

    Saturday: [
      {
        meal: "Breakfast",
        food: "Upma & Tea",
        icon: Sunrise,
      },
      {
        meal: "Lunch",
        food: "Chole Bhature",
        icon: Sun,
      },
      {
        meal: "Dinner",
        food: "Fried Rice & Manchurian",
        icon: Moon,
      },
    ],

    Sunday: [
      {
        meal: "Breakfast",
        food: "Puri & Aloo Sabzi",
        icon: Sunrise,
      },
      {
        meal: "Lunch",
        food: "Mutton Curry & Rice",
        icon: Sun,
      },
      {
        meal: "Dinner",
        food: "Khichdi & Papad",
        icon: Moon,
      },
    ],
  };

  const days = Object.keys(menus);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
      <h2 className="text-xl font-semibold">🍽 Today's Menu</h2>

      <p className="text-slate-500 text-sm">Today's hostel meals</p>
      <div className="flex gap-2 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={
              selectedDay === day
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                : "bg-gray-100 px-4 py-2 rounded-lg hover:bg-blue-700"
            }
          >
            {day}
          </button>
        ))}
      </div>
      {menus[selectedDay].map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.meal}
            className="flex items-center p-4 bg-slate-50 rounded-xl hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <Icon size={24} className="text-orange-500" />

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
