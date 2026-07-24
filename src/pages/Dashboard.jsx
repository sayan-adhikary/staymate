import React from "react";
import StatCard from "../components/dashboard/StatCard.jsx";
import MenuCard from "../components/dashboard/MenuCard.jsx";
import NoticeCard from "../components/dashboard/NoticeCard.jsx";
import { stats } from "../data/statData.js";

function Dashboard() {
  //rendaring the page
  const hour = new Date().getHours();

  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{greeting}</h1>
        <p className="text-slate-500 mt-2">Welcome back, Sayan!</p>
        <p className="text-slate-500">Manage your hostel life efficiently.</p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            color={item.color}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="mt-8">
        <MenuCard />
      </div>
      <div className="mt-8">
        <NoticeCard />
      </div>
    </>
  );
}

export default Dashboard;
