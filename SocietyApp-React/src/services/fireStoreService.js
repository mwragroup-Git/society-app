import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  getDocsFromCache,
  deleteDoc,
  doc
} from "firebase/firestore";

const memberCollection = collection(db, "members");
const FIRESTORE_TIMEOUT_MS = 10000;
const LOCAL_MEMBERS_KEY = "society_members_local_v1";

const withTimeout = (promise, label) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out. Check internet/firewall access to Firebase.`)), FIRESTORE_TIMEOUT_MS)
    )
  ]);

const readLocalMembers = () => {
  try {
    const raw = localStorage.getItem(LOCAL_MEMBERS_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const writeLocalMembers = (members) => {
  try {
    localStorage.setItem(LOCAL_MEMBERS_KEY, JSON.stringify(members));
  } catch {
    // Ignore localStorage errors (private mode, quota, etc.)
  }
};

export const addMember = async (member) => {
  try {
    return await withTimeout(addDoc(memberCollection, member), "Add member");
  } catch (err) {
    const localMembers = readLocalMembers();
    const localMember = { id: `local-${Date.now()}`, ...member };
    writeLocalMembers([localMember, ...localMembers]);
    return localMember;
  }
};

export const fetchMembers = async () => {
  try {
    const snapshot = await withTimeout(getDocs(memberCollection), "Load members");
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    // If server fetch fails (timeout/firewall), try cached data to keep the UI usable.
    try {
      const cached = await getDocsFromCache(memberCollection);
      return cached.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch {
      return readLocalMembers();
    }
  }
};

export const removeMember = async (id) => {
  try {
    return await withTimeout(deleteDoc(doc(db, "members", id)), "Delete member");
  } catch (err) {
    const localMembers = readLocalMembers();
    writeLocalMembers(localMembers.filter((m) => m.id !== id));
    return { id };
  }
};
