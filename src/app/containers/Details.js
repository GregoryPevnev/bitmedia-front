import React from "react";
import { Link } from "react-router-dom";
import useDetails from "../hooks/detailsHook";
import useStats from "../hooks/statsHook";
import Page from "../layout/Page";
import Information from "../components/helpers/Information";
import RangeSelector from "../components/range/RangeSelector";
import Breadcrumbs from "../components/helpers/Breadcrumbs";
import Graph from "../components/graph/Graph";
import { DATE_PREFIX, DEFAULT_FROM, DEFAULT_TO, MINIMUM_DATE, MAXIMUM_DATE } from "../components/constants";
import { queryParams } from "../utils";

const userName = ({ first_name, last_name }) => `${first_name} ${last_name}`;

const toClicks = records => records.map(({ date, clicks }) => ({ date, value: clicks }));
const toViews = records => records.map(({ date, views }) => ({ date, value: views }));

const PLACEHOLDER_USERNAME = "User Details";

const Details = ({
  match: {
    params: {
      id
    }
  },
  location: {
    search
  },
  history: {
    push
  }
}) => {
  const { from: fromParam, to: toParam } = queryParams(search, ["from", "to"]);
  const from = Number(fromParam || DEFAULT_FROM), to = Number(toParam || DEFAULT_TO);
  const details = useDetails(id);
  const stats = useStats(id, from, to);

  const name = details.user ? userName(details.user) : PLACEHOLDER_USERNAME;

  return (
    <Page>
      <Breadcrumbs>
        <Link to="/">Main Page</Link>
        <Link to="/users">User Statistics</Link>
        <Link to={`/users/${id}`}>{name}</Link>
      </Breadcrumbs>
      <div className="details">
        <Information
          loading={details.loading}
          error={details.error}
          loaded={details.user !== null}
        >
          <h2 className="heading">{name}</h2>

          <div className="details__group">
            <h3 className="sub-heading">Clicks</h3>

            <Information
              loading={stats.loading}
              error={stats.error}
            >
              <Graph
                data={toClicks(stats.data)}
                startDate={stats.dates.from}
                endDate={stats.dates.to}
              />
            </Information>
          </div>

          <div className="details__group">
            <h3 className="sub-heading">Views</h3>

            <Information
              loading={stats.loading}
              error={stats.error}
            >
              <Graph
                data={toViews(stats.data)}
                startDate={stats.dates.from}
                endDate={stats.dates.to}
              />
            </Information>
          </div>

          <div className="details__controls">
            <RangeSelector
              min={MINIMUM_DATE}
              max={MAXIMUM_DATE}
              from={from}
              to={to}
              prefix={DATE_PREFIX}
              onSelect={({ from, to }) => {
                push(`?from=${from}&to=${to}`);
              }}
            />
          </div>
        </Information>
      </div>
    </Page>
  );
};

export default Details;
