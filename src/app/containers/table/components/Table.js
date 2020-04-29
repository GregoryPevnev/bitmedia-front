import React from "react";
import Row from "./Row";

const Table = ({ users }) => (
  <table>
    <thead>
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
    <tbody>
      {users.map(user => <Row key={user.id} {...user} />)}
    </tbody>
  </table>
);
