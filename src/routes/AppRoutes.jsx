import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Food from "../pages/Food";
import Complaints from "../pages/Complaints";
import Expenses from "../pages/Expenses";
import Rent from "../pages/Rent.jsx"
import Notice from "../pages/Notice";
import Tasks from "../pages/Tasks";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="food" element={<Food />} />

        <Route path="complaints" element={<Complaints />} />

        <Route path="expenses" element={<Expenses />} />

        <Route path="rent" element={<Rent />}/>

        <Route path="notice" element={<Notice />} />

        <Route path="tasks" element={<Tasks />} />

        <Route path="profile" element={<Profile />} />

        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
