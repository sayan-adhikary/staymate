import { useState } from "react";
import {
  Bell,
  Moon,
  Globe,
  ShieldCheck,
  User,
  Lock,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { darkMode, toggleTheme } = useTheme();

  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">Settings</h1>

        <p className="text-slate-500 mt-2">
          Manage your account preferences and application settings.
        </p>
      </div>

      {/* Account */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b p-5">
          <h2 className="text-xl font-semibold">Account</h2>
        </div>

        <button className="w-full flex justify-between items-center px-6 py-5 hover:bg-slate-50 transition">
          <div className="flex items-center gap-4">
            <User className="text-blue-600" />

            <div className="text-left">
              <h3 className="font-medium">Edit Profile</h3>

              <p className="text-sm text-slate-500">
                Update your personal information
              </p>
            </div>
          </div>

          <ChevronRight />
        </button>

        <button className="w-full flex justify-between items-center px-6 py-5 hover:bg-slate-50 transition">
          <div className="flex items-center gap-4">
            <Lock className="text-red-500" />

            <div className="text-left">
              <h3 className="font-medium">Change Password</h3>

              <p className="text-sm text-slate-500">
                Update your account password
              </p>
            </div>
          </div>

          <ChevronRight />
        </button>
      </div>

      {/* Preferences */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b p-5">
          <h2 className="text-xl font-semibold">Preferences</h2>
        </div>

        {/* {Notification} */}
        
        <div className="flex justify-between items-center px-6 py-5 border-t">
          <div className="flex items-center gap-4">
            <Bell className="text-yellow-500" />

            <div>
              <h3 className="font-medium">Notifications</h3>

              <p className="text-sm text-slate-500">
                Enable hostel notifications
              </p>
            </div>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center px-6 py-5 border-t">
          <div className="flex items-center gap-4">
            <Globe className="text-green-600" />

            <div>
              <h3 className="font-medium">Email Updates</h3>

              <p className="text-sm text-slate-500">Receive important emails</p>
            </div>
          </div>

          <input
            type="checkbox"
            checked={emailUpdates}
            onChange={() => setEmailUpdates(!emailUpdates)}
            className="w-5 h-5"
          />
        </div>
      </div>

      {/* Privacy */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b p-5">
          <h2 className="text-xl font-semibold">Privacy & Security</h2>
        </div>

        <button className="w-full flex justify-between items-center px-6 py-5 hover:bg-slate-50 transition">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-emerald-600" />

            <div className="text-left">
              <h3 className="font-medium">Privacy Settings</h3>

              <p className="text-sm text-slate-500">
                Manage your privacy preferences
              </p>
            </div>
          </div>

          <ChevronRight />
        </button>
      </div>

      {/* Logout */}

      <div className="flex justify-end">
        <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
