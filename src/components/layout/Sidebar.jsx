import {
  LayoutDashboard,
  Utensils,
  TriangleAlert,
  Wallet,
  House,
  Bell,
  CheckSquare,
  User,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Food",
    path: "/food",
    icon: Utensils,
  },
  {
    name: "Complaints",
    path: "/complaints",
    icon: TriangleAlert,
  },
  {
    name: "Expenses",
    path: "/expenses",
    icon: Wallet,
  },
  {
    name: "Rent",
    path: "/rent",
    icon: House,
  },
  {
    name: "Notice",
    path: "/notice",
    icon: Bell,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 sticky top-0">
      <div className="p-8 border-b">
        <h1 className="text-3xl font-bold text-blue-600">StayMate</h1>

        <p className="text-sm text-slate-500 mt-1">Smart Hostel Companion</p>
      </div>

      <nav className="p-4 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
