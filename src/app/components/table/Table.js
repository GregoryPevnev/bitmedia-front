import React from "react";
import Row from "./Row";
import useTable from "./hooks/tableHook";

const Table = ({ users, onSelect }) => {
  const { headRef, bodyRef } = useTable(users);

  return (
    <table className="table">
      <thead ref={headRef}>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP Address</th>
          <th>Total Clicks</th>
          <th>Total Page Views</th>
        </tr>
      </thead>
      <tbody ref={bodyRef}>
        {users.map(user => (
          <Row
            key={user.id}
            onSelect={() => onSelect(user.id)}
            {...user}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
