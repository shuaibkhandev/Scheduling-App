"use client";
import { useState } from "react";

const MeetingForm = () => {
  const [title, setTite] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e:React.FormEvent) => {
     e.preventDefault()

     const meeting = {
      title,
      time
     }
     console.log(meeting);
     
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="Meeting Title"
        className="border p-2 rounded"
        value={title}
        onChange={(e) => setTite(e.target.value)}
      />
      <input
        type="datetime-local"
        className="border p-2 rounded"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button className="bg-green-500 text-white p-2 rounded cursor-pointer">
        Create Meeting
      </button>
    </form>
  );
};

export default MeetingForm;
