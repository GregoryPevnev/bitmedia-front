import React from "react";
import useDetails from "../hooks/detailsHook";
import useStats from "../hooks/statsHook";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import RangeSelector from "../components/range/RangeSelector";

const userName = ({ first_name, last_name }) => `${first_name} ${last_name}`;

const UserDetails = ({
  match: {
    params: {
      id
    }
  }
}) => {
  const details = useDetails(id);
  const [stats, setRange] = useStats(id, 24, 30);

  console.log(stats.data);

  if (details.loading)
    return (
      // TODO: Center
      <div>
        <Loading />
      </div>
    );

  if (details.error)
    return <Error>{details.error}</Error>

  if (details.user)
    return (
      <div>
        <h2>{userName(details.user)}</h2>

        <h3>Clicks</h3>

        <h3>Views</h3>

        <RangeSelector
          min={1}
          max={30}
          from={stats.range.from}
          to={stats.range.to}
          onSelect={setRange}
        />
      </div>
    );

  return null;
};

export default UserDetails;
