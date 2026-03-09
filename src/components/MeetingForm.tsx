"use client";
import { useEffect, useState } from "react";
import MeetingList from "./MeetingList";
import { Meeting } from "@/types/meeting";
import ReminderChecker from "./ReminderChecker ";


const MeetingForm = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // ✅ Run on client only, check Notification permission
  useEffect(() => {
    if (typeof Notification !== "undefined") {
      setNotificationsEnabled(Notification.permission === "granted");
    }
  }, []);

  // ✅ Function to enable notifications
  const enableNotifications = () => {
    if (typeof Notification !== "undefined") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Notifications enabled!", {
            body: "You will now receive meeting reminders.",
          });
          setNotificationsEnabled(true);
        } else {
          alert("Notification permission denied.");
        }
      });
    }
  };

  // ✅ Handle creating new meetings
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !time) return;

    const utcTime = new Date(time).toISOString();

    const meeting: Meeting = {
      id: crypto.randomUUID(),
      title,
      startTime: utcTime,
      createdAt: new Date().toISOString(),
      notified: false,
    };

    setMeetings((prev) => [...prev, meeting]);
    setTitle("");
    setTime("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Enable Notifications Button */}
      {!notificationsEnabled && (
        <button
          onClick={enableNotifications}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Enable Notifications
        </button>
      )}

      {/* Meeting Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Meeting Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          className="border p-2 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min={new Date().toISOString().slice(0, 16)}
        />
        <button className="bg-green-500 text-white p-2 rounded cursor-pointer">
          Create Meeting
        </button>
      </form>

      {/* Meeting List */}
      <h3 className="mt-8 text-2xl font-bold">Meeting List</h3>
      <MeetingList meetings={meetings} />

      {/* Reminder Checker */}
      <ReminderChecker meetings={meetings} />
    </div>
  );
};

export default MeetingForm;