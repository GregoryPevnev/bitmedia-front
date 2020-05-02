import React from "react";
import { Link } from "react-router-dom";
import useDetails from "../hooks/detailsHook";
import useStats from "../hooks/statsHook";
import Page from "../layout/Page";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import RangeSelector from "../components/range/RangeSelector";
import Breadcrumbs from "../components/navigation/Breadcrumbs";
import Graph from "../components/graph/Graph";

const userName = ({ first_name, last_name }) => `${first_name} ${last_name}`;

const toClicks = records => records.map(({ date, clicks }) => ({ date, value: clicks }));
const toViews = records => records.map(({ date, views }) => ({ date, value: views }));

const Details = ({
  match: {
    params: {
      id
    }
  }
}) => {
  const details = useDetails(id);
  const [stats, setRange] = useStats(id, 24, 30);

  if (details.loading)
    return (
      // TODO: Center
      <div>
        <Loading />
      </div>
    );

  if (details.error)
    return <Error>{details.error}</Error>

  if (details.user) {
    const name = userName(details.user);

    return (
      <Page>
        <Breadcrumbs>
          <Link to="/">Main Page</Link>
          <Link to="/users">User Statistics</Link>
          <Link to={`/users/${id}`}>{name}</Link>
        </Breadcrumbs>

        <h2>{name}</h2>

        <h3>Clicks</h3>

        {(stats.data.length > 0) && (
          <Graph
            data={toClicks(stats.data)}
            startDate={stats.dates.from}
            endDate={stats.dates.to}
          />
        )}

        <h3>Views</h3>

        {(stats.data.length > 0) && (
          <Graph
            data={toViews(stats.data)}
            startDate={stats.dates.from}
            endDate={stats.dates.to}
          />
        )}

        <RangeSelector
          min={1}
          max={30}
          from={stats.range.from}
          to={stats.range.to}
          onSelect={setRange}
        />
      </Page>
    );
  }

  return null;
};

export default Details;
