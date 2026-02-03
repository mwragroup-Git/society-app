import React from 'react';
import AddMember from './components/AddMember';
import MemberList from './components/MemberList';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mahaveer Willet Society App</h1>

      <AddMember />
      <hr />
      <MemberList />
    </div>
  );
}

export default App;
