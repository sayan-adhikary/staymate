import { noticePageData } from "../data/noticePageData";
import { Bell } from "lucide-react";

function Notice() {
  const getBadgeColor = (type) => {
    switch (type) {
      case "Important":
        return "bg-red-100 text-red-700";
      case "Event":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">📢 Notices</h1>

        <p className="text-slate-500 mt-2">
          Latest announcements from the hostel.
        </p>
      </div>

      <div className="space-y-5">
        {noticePageData.map((notice) => (
          <div key={notice.id} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <Bell className="text-blue-600 mt-1" />

                <div>
                  <h2 className="text-xl font-semibold">{notice.title}</h2>

                  <p className="text-slate-500 mt-2">{notice.description}</p>

                  <p className="text-sm text-gray-400 mt-3">{notice.date}</p>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${getBadgeColor(
                  notice.type,
                )}`}
              >
                {notice.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notice;
