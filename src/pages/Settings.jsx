import { useState } from "react";
import { Bell, Moon, Globe, ShieldCheck } from "lucide-react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">⚙️ Settings</h1>

        <p className="text-slate-500 mt-2">
          Customize your StayMate experience.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm divide-y">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <Bell className="text-blue-600" />
            <div>
              <h2 className="font-semibold">Notifications</h2>
              <p className="text-sm text-slate-500">Receive hostel updates</p>
            </div>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <Moon className="text-indigo-600" />
            <div>
              <h2 className="font-semibold">Dark Mode</h2>
              <p className="text-sm text-slate-500">Toggle application theme</p>
            </div>
          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <Globe className="text-green-600" />
            <div>
              <h2 className="font-semibold">Language</h2>
              <p className="text-sm text-slate-500">English</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-red-600" />
            <div>
              <h2 className="font-semibold">Privacy</h2>
              <p className="text-sm text-slate-500">Manage account security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
