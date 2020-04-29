import React from "react";

const Row = ({ id, first_name, last_name, email, gender, ip_address, clicks, views }) => (
  <tr onClick={() => push({ pathname: `/users/${id}` })}>
    <td>{id}</td>
    <td>{first_name}</td>
    <td>{last_name}</td>
    <td>{email}</td>
    <td>{gender}</td>
    <td>{ip_address}</td>
    <td>{clicks}</td>
    <td>{views}</td>
  </tr>
);

export default Row;
