import StatCard from "../components/dashboard/StatCard";
import MenuCard from "../components/dashboard/MenuCard";
import NoticeCard from "../components/dashboard/NoticeCard";
import TaskCard from "../components/dashboard/TaskCard";
import { stats } from "../data/statData";

function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to StayMate. Here's everything happening today.
        </p>
      </div>

      {/* Stats */}

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
      </section>

      {/* Main Grid */}

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">
          <MenuCard />
        </div>

        <div>
          <NoticeCard />
        </div>

      </section>

      {/* Tasks */}

      <section>
        <TaskCard />
      </section>

      {/* Quick Summary */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-6 shadow">
          <h2 className="text-lg font-semibold">
            Monthly Rent
          </h2>

          <h1 className="text-4xl font-bold mt-4">
            ₹6000
          </h1>

          <p className="mt-2 text-blue-100">
            Due on 5th of every month
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl p-6 shadow">
          <h2 className="text-lg font-semibold">
            Pending Tasks
          </h2>

          <h1 className="text-4xl font-bold mt-4">
            3
          </h1>

          <p className="mt-2 text-green-100">
            Complete today's checklist
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 shadow">
          <h2 className="text-lg font-semibold">
            Complaints
          </h2>

          <h1 className="text-4xl font-bold mt-4">
            2
          </h1>

          <p className="mt-2 text-orange-100">
            Pending hostel issues
          </p>
        </div>

      </section>
    </div>
  );
}

export default Dashboard;