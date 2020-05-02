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
import Information from "../components/helpers/Information";

const Statistic = ({
  location: { search },
  history: {
    push
  }
}) => {
  const { page: pageNumber } = queryParams(search, ["page"]);
  const page = Number(pageNumber || 1);

  const { loading, error, users, pages } = usePages(page);

  return (
    <Page>
      <Breadcrumbs>
        <Link to="/">Main Page</Link>
        <Link to="/users">User Statistics</Link>
      </Breadcrumbs>

      <div className="statistic">
        <div className="statistic__head">
          <h2 className="heading">Users statistics</h2>
        </div>

        <div className="statistic__table">
          <Information
            loading={loading}
            error={error}
            loaded={users.length > 0}
          >
            <Table users={users} onSelect={userId => push({ pathname: `/users/${userId}` })} />
          </Information>
        </div>
        <div className="statistic__pager">
          {(pages > 0) && (
            <Pager
              page={page}
              pages={pages}
              active={!loading}
              onPage={page => push({ search: `?page=${page}` })}
            />
          )}
        </div>
      </div>
    </Page>
  );
};

export default Statistic;
