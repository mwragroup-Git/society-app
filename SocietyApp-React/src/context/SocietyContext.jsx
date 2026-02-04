import { createContext, useContext, useMemo, useState } from "react";

const SocietyContext = createContext();

const initialMembers = [
  { id: 1, name: "Sumith" },
  { id: 2, name: "Sush" },
  { id: 3, name: "Aarav" }
];

const initialEvents = [
  {
    id: 1,
    title: "Community Clean-Up Drive",
    date: "2026-02-10",
    image: "https://placehold.co/600x400",
    description: "Join us for a morning clean-up and refreshments."
  },
  {
    id: 2,
    title: "Festival Night",
    date: "2026-03-01",
    image: "https://placehold.co/600x400",
    description: "Music, food stalls, and family activities."
  }
];

const initialComplaints = [
  { id: 1, title: "Elevator issue", details: "Lift B is making noise.", status: "Pending" },
  { id: 2, title: "Water leakage", details: "Leak near Block C basement.", status: "In Progress" }
];

const initialMarketplace = [
  { id: 1, name: "Dining Table", price: 250, seller: "Kiran", image: "https://placehold.co/400x300" },
  { id: 2, name: "Bicycle", price: 80, seller: "Meera", image: "https://placehold.co/400x300" },
  { id: 3, name: "Kids Books", price: 20, seller: "Rahul", image: "https://placehold.co/400x300" }
];

const initialMaintenance = [
  { id: 1, month: "January 2026", amount: 120, status: "Paid" },
  { id: 2, month: "February 2026", amount: 120, status: "Due" },
  { id: 3, month: "March 2026", amount: 120, status: "Upcoming" }
];

export function SocietyProvider({ children }) {
  const [members, setMembers] = useState(initialMembers);
  const [events, setEvents] = useState(initialEvents);
  const [complaints, setComplaints] = useState(initialComplaints);
  const [marketplace, setMarketplace] = useState(initialMarketplace);
  const [maintenanceBills] = useState(initialMaintenance);

  const addMember = (name) => {
    if (!name?.trim()) return;
    setMembers((prev) => [{ id: Date.now(), name: name.trim() }, ...prev]);
  };

  const removeMember = (id) => setMembers((prev) => prev.filter((m) => m.id !== id));

  const addEvent = (event) => setEvents((prev) => [{ id: Date.now(), ...event }, ...prev]);
  const updateEvent = (id, updates) => setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, ...updates } : e)));
  const deleteEvent = (id) => setEvents((prev) => prev.filter((e) => e.id !== id));

  const addComplaint = (complaint) => setComplaints((prev) => [{ id: Date.now(), status: "Pending", ...complaint }, ...prev]);
  const updateComplaintStatus = (id, status) =>
    setComplaints((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));

  const value = useMemo(
    () => ({
      members,
      events,
      complaints,
      marketplace,
      maintenanceBills,
      addMember,
      removeMember,
      addEvent,
      updateEvent,
      deleteEvent,
      addComplaint,
      updateComplaintStatus
    }),
    [members, events, complaints, marketplace, maintenanceBills]
  );

  return <SocietyContext.Provider value={value}>{children}</SocietyContext.Provider>;
}

export function useSociety() {
  return useContext(SocietyContext);
}
