import { useState } from "react";
import { AlertTriangle, Bell, Calendar, X } from "lucide-react";
import { notices } from "../../data/noticeData";

function NoticeCard() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  const handleCloseModal = () => {
    setSelectedNotice(null);
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case "important":
        return "bg-red-100 text-red-700";

      case "warning":
        return "bg-yellow-100 text-yellow-700";

      case "event":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "important":
        return <AlertTriangle className="text-red-500" size={20} />;

      case "warning":
        return <Bell className="text-yellow-500" size={20} />;

      case "event":
        return <Calendar className="text-blue-500" size={20} />;

      default:
        return <Bell size={20} />;
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">📢 Recent Notices</h2>

        <div className="space-y-4">
          {notices.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNoticeClick(item)}
              className="cursor-pointer rounded-xl border border-slate-200 p-4 hover:shadow-md hover:bg-slate-50 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  {getIcon(item.type)}

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>

                    <p className="text-sm text-slate-500 mt-1">{item.time}</p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getBadgeColor(
                    item.type,
                  )}`}
                >
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedNotice && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg shadow-xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              {getIcon(selectedNotice.type)}

              <h2 className="text-2xl font-bold">{selectedNotice.title}</h2>
            </div>

            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize ${getBadgeColor(
                selectedNotice.type,
              )}`}
            >
              {selectedNotice.type}
            </span>

            <p className="mt-5 text-slate-700 leading-7">
              {selectedNotice.description}
            </p>

            <p className="text-sm text-slate-500 mt-6">
              Posted {selectedNotice.time}
            </p>

            <button
              onClick={handleCloseModal}
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NoticeCard;
