import dayjs from "dayjs";
import { Registration } from "../../src/types";
import events from "./events";

const now = dayjs();

const registrations: Registration[] = [
  {
    id: 10101,
    created_at: now.subtract(2, "hours").toISOString(),
    total: 30.0,
    status: "Confirmed",
    user_id: "1",
    ticket_items: [
      {
        id: 1,
        registration_id: 10101,
        ticket_type: "General",
        quantity: 2,
        event_id: events[1].id,
        event: events[1],
      },
    ],
  },
  {
    id: 10102,
    created_at: now.subtract(4, "days").toISOString(),
    total: 5.0,
    status: "Confirmed",
    user_id: "1",
    ticket_items: [
      {
        id: 2,
        registration_id: 10102,
        ticket_type: "Member",
        quantity: 1,
        event_id: events[2].id,
        event: events[2],
      },
    ],
  },
  {
    id: 10103,
    created_at: now.subtract(2, "weeks").toISOString(),
    total: 0.0,
    status: "Attended",
    user_id: "1",
    ticket_items: [
      {
        id: 3,
        registration_id: 10103,
        ticket_type: "General",
        quantity: 1,
        event_id: events[0].id,
        event: events[0],
      },
      {
        id: 4,
        registration_id: 10103,
        ticket_type: "VIP",
        quantity: 1,
        event_id: events[4].id,
        event: events[4],
      },
    ],
  },
];

export default registrations;
