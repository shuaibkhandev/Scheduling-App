"use client";
import { Meeting } from "@/types/meeting";

type Props = { meetings: Meeting[] };

const MeetingList = ({ meetings }: Props) => {
  return (
    <div className="mt-4 space-y-2">
      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className="border p-2 rounded flex justify-between"
        >
          <span>{meeting.title}</span>
          <span>{new Date(meeting.startTime).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default MeetingList;