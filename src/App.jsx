import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

// Your existing imports
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import Dashboard from "./pages/Dashboard";
import Food from "./pages/Food";
import Complaints from "./pages/Complaints";
import Expenses from "./pages/Expenses";
import Rent from "./pages/Rent";
import Notice from "./pages/Notice";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Navbar />

          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/food" element={<Food />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
