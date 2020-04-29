import React from "react";
import usePages from "./hooks/pages-hook";
import Pager from "../../components/pager/Pager";
import queryParams from "../../utils/queryParams";

const UsersTable = ({
  location: { search },
  history: {
    push
  }
}) => {
  const { page: pageNumber } = queryParams(search, ["page"]);
  const page = Number(pageNumber || 1);

  const { loading, errors, users, pages } = usePages(page);

  return (
    <div>
      <h2>Users</h2>
      {/* TODO: Separate */}
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
          {users.map(({ id, first_name, last_name, email, gender, ip_address, clicks, views }) => (
            <tr key={id} onClick={() => push({ pathname: `/users/${id}` })}>
              <td>{id}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{gender}</td>
              <td>{ip_address}</td>
              <td>{clicks}</td>
              <td>{views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {pages !== 0 && (
        <Pager
          page={page}
          pages={pages}
          onPage={page => push({ search: `?page=${page}` })}
        />
      )}
    </div>
  );
};

export default UsersTable;
