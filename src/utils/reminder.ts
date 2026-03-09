// src/utils/reminder.ts
import { Meeting } from "@/types/meeting";

export const checkReminder = (meeting: Meeting) => {
  const meetingTime = new Date(meeting.startTime).getTime();
  const now = Date.now();
  const diff = meetingTime - now;

  if (diff <= 5 * 60 * 1000 && diff > 0 && !meeting.notified) {
    if (Notification.permission === "granted") {
      new Notification("Meeting Reminder", {
        body: `Your meeting "${meeting.title}" starts in 5 minutes`,
      });
    }
    meeting.notified = true;
  }
};