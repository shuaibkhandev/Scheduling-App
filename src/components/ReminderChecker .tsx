"use client";
import { useEffect } from "react";
import { checkReminder } from "@/utils/reminder";
import { Meeting } from "@/types/meeting";

type Props = { meetings: Meeting[] };

const ReminderChecker = ({ meetings }: Props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      meetings.forEach((meeting) => {
        checkReminder(meeting);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [meetings]);

  return null;
};

export default ReminderChecker;