import React from "react";
import {
  LayoutDashboard,
  UtensilsCrossed,
  CircleAlert,
  Wallet,
  IndianRupee,
  Bell,
  CheckSquare,
  User,
  Settings,
  House,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Food Menu",
    icon: UtensilsCrossed,
    path: "/food",
  },
  {
    name: "Complaints",
    icon: CircleAlert,
    path: "/complaints",
  },
  {
    name: "Expenses",
    icon: Wallet,
    path: "/expenses",
  },
  {
    name: "Rent",
    icon: IndianRupee,
    path: "/rent",
  },
  {
    name: "Notice Board",
    icon: Bell,
    path: "/notice",
  },
  {
    name: "Tasks",
    icon: CheckSquare,
    path: "/tasks",
  },
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold">
        <div className="flex items-center gap-2 p-6 text-2xl font-bold">
          <House />
          <span>StayMate</span>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-slate-700"
                }`
              }
              key={item.name}
              to={item.path}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Version */}
      <div className="mt-auto p-6 text-sm text-slate-400">Version 1.0</div>
    </aside>
  );
}

export default Sidebar;
