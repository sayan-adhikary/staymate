import { Bell, Search, CalendarDays } from "lucide-react";

function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between sticky top-0 z-40">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Welcome Back 👋</h2>

        <div className="flex items-center gap-2 mt-1 text-slate-500">
          <CalendarDays size={16} />
          <span>{today}</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        <button className="relative p-3 rounded-xl hover:bg-slate-100 transition">
          <Bell size={22} />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=Sayan+Ad&background=2563eb&color=fff"
            alt="Profile"
            className="w-11 h-11 rounded-full"
          />

          <div className="hidden lg:block">
            <h3 className="font-semibold text-slate-800">Sayan Das</h3>

            <p className="text-sm text-slate-500">Room B-19</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
