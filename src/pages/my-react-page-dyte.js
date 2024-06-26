import { useDyteMeeting, useDyteSelector } from "@dytesdk/react-web-core";
import { useState, useEffect } from "react";

export default function CustomMeetingPreview() {
  const { meeting } = useDyteMeeting();
  const permissions = useDyteSelector((m) => m.self.permissions);
  const [participantName, setParticipantName] = useState("");

  useEffect(() => {
    if (!meeting) {
      return;
    }
    setParticipantName(meeting.self.name);
  }, [meeting]);


}