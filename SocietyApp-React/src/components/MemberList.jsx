import React from "react";
import { useSociety } from "../context/SocietyContext";
import Loader from "./Loader";

function MemberList() {
  const { members, loading, error, deleteMember } = useSociety();

  if (loading) return <Loader />;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;

  return (
    <div>
      <h2>Members</h2>

      {members.length === 0 && <p>No members found.</p>}

      <ul>
        {members.map((m) => (
          <li key={m.id}>
            {m.name}
            <button onClick={() => deleteMember(m.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberList;
