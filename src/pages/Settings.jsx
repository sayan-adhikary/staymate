import { Bell, Moon, Globe, ShieldCheck } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold dark:text-white">⚙️ Settings</h1>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Customize your StayMate experience.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm divide-y dark:divide-slate-700">
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <Bell className="text-blue-600" />
            <div>
              <h2 className="font-semibold dark:text-white">Notifications</h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Receive hostel updates
              </p>
            </div>
          </div>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <Moon className="text-indigo-600" />
            <div>
              <h2 className="font-semibold dark:text-white">Dark Mode</h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Toggle application theme
              </p>
            </div>
          </div>

          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        </div>

        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <Globe className="text-green-600" />
            <div>
              <h2 className="font-semibold dark:text-white">Language</h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                English
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-red-600" />
            <div>
              <h2 className="font-semibold dark:text-white">Privacy</h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Manage account security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
