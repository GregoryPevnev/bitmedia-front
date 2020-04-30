import React from "react";
import { Link } from "react-router-dom";
import usePages from "../hooks/pagesHook";
import Page from "../layout/Page";
import Table from "../components/table/Table";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Pager from "../components/pager/Pager";
import Breadcrumbs from "../components/navigation/Breadcrums";
import { queryParams } from "../utils";

const UsersTable = ({
  location: { search },
  history: {
    push
  }
}) => {
  const { page: pageNumber } = queryParams(search, ["page"]);
  const page = Number(pageNumber || 1);

  const { loaded, loading, error, users, pages } = usePages(page);

  return (
    <Page>
      <Breadcrumbs>
        <Link to="/">Main Page</Link>
        <Link to="/users">User Statistics</Link>
      </Breadcrumbs>

      <h2>Users</h2>

      <div>
        {/* TODO: Static height */}
        <Table users={users} onSelect={userId => push({ pathname: `/users/${userId}` })} />

        {/* TODO: Absolute position over */}
        {!loaded && <Loading />}
      </div>
      {error && <Error>{error}</Error>}
      {(loaded && loading) && <p>Loading...</p>}

      {loaded && (
        <Pager
          page={page}
          pages={pages}
          onPage={page => push({ search: `?page=${page}` })}
        />
      )}
    </Page>
  );
};

export default UsersTable;
