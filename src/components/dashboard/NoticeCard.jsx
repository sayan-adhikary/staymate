import { useState } from "react";

function NoticeCard() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      id: 1,
      title: "Water supply maintenance",
      description: "Water will be unavailable from 2 PM to 4 PM.",
      type: "important",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Rent Reminder",
      description: "Pay your hostel rent before 5th August.",
      type: "warning",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "Movie Night",
      description: "Join us in the common hall at 8 PM.",
      type: "event",
      time: "2 days ago",
    },
  ];

  return (
    <div>
      {notices.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            setSelectedNotice(selectedNotice === item.id ? null : item.id)
          }
          className="bg-slate-50 rounded-xl p-4 cursor-pointer hover:bg-slate-100 transition"
        >
          <p>{item.title}</p>
          {/* Only if selected */}
          {selectedNotice === item.id && (
            <div>
              <p>{item.description}</p>
              <p>{item.type}</p>
              <p>{item.time}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoticeCard;
