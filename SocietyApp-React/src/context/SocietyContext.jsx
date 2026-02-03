import { createContext, useContext, useState, useEffect } from "react";
import { addMember, fetchMembers, removeMember } from "../services/fireStoreService";

const SocietyContext = createContext();

export const SocietyProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadMembers = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchMembers();
      setMembers(data);
    } catch (err) {
      console.error("Failed to load members:", err);
      setError(err?.message || "Could not load members. Check Firebase config/rules and try again.");
    } finally {
      setLoading(false);
    }
  };

  const createMember = async (member) => {
    try {
      setError("");
      await addMember(member);
      await loadMembers();
    } catch (err) {
      console.error("Failed to add member:", err);
      setError(err?.message || "Could not add member. Check Firebase permissions.");
    }
  };

  const deleteMember = async (id) => {
    try {
      setError("");
      await removeMember(id);
      await loadMembers();
    } catch (err) {
      console.error("Failed to delete member:", err);
      setError(err?.message || "Could not delete member. Check Firebase permissions.");
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  return (
    <SocietyContext.Provider value={{ members, loading, error, createMember, deleteMember }}>
      {children}
    </SocietyContext.Provider>
  );
};

export const useSociety = () => useContext(SocietyContext);
