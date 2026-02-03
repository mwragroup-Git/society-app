import React, { useState } from "react";
import { useSociety } from "../context/SocietyContext";

function AddMember() {
  const { createMember } = useSociety();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await createMember({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Member</h2>
      <input
        type="text"
        placeholder="Member name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddMember;
