import React from "react";
import { Link } from "react-router-dom";
import usePages from "../hooks/pagesHook";
import Page from "../layout/Page";
import Table from "../components/table/Table";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Pager from "../components/pager/Pager";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import { queryParams } from "../utils";

const Statistic = ({
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

      <div className="statistic">
        <h2 className="heading">Users statistic</h2>

        {/* TODO: Info-Component */}
        <div className="statistic__table">
          {/* TODO: Static height */}
          <Table users={users} onSelect={userId => push({ pathname: `/users/${userId}` })} />

          {/* TODO: Absolute position over */}
          {!loaded && <Loading />}

          {/* TODO: Right under */}
          {error && <Error>{error}</Error>}
        </div>
        <div className="statistic__pager">
          {loaded && (
            <Pager
              page={page}
              pages={pages}
              onPage={page => push({ search: `?page=${page}` })}
            />
          )}
        </div>
      </div>
    </Page>
  );
};

export default Statistic;
