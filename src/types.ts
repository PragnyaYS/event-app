export type EventCategory =
  | "Social"
  | "Academic"
  | "Career"
  | "Sports"
  | "Workshop";

export type TicketType = "General" | "VIP" | "Member" | "Early Bird";

export type RegistrationStatus =
  | "Confirmed"
  | "Pending"
  | "Attended"
  | "Cancelled";

export interface Event {
  id: number;
  title: string;
  image: string;
  price: number; // 0 for free events
  date: string;
  location: string;
  category: EventCategory;
  description: string;
}

export interface TicketItem {
  id: number;
  registration_id: number;
  ticket_type: TicketType;
  quantity: number;
  event_id: number;
  event: Event;
}

export interface Registration {
  id: number;
  created_at: string;
  total: number;
  status: RegistrationStatus;
  user_id: string;
  ticket_items: TicketItem[];
}
