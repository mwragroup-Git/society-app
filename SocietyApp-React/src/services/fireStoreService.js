import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocsFromServer, deleteDoc, doc } from "firebase/firestore";

const memberCollection = collection(db, "members");
const FIRESTORE_TIMEOUT_MS = 10000;

const withTimeout = (promise, label) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out. Check internet/firewall access to Firebase.`)), FIRESTORE_TIMEOUT_MS)
    )
  ]);

export const addMember = async (member) => {
  return await withTimeout(addDoc(memberCollection, member), "Add member");
};

export const fetchMembers = async () => {
  const snapshot = await withTimeout(getDocsFromServer(memberCollection), "Load members");
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const removeMember = async (id) => {
  return await withTimeout(deleteDoc(doc(db, "members", id)), "Delete member");
};
