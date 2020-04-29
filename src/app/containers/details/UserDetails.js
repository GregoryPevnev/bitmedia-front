import React from "react";
import useDetails from "./hooks/detailsHook";
import useStats from "./hooks/statsHook";
import Loading from "../../components/common/Loading";
import Error from "../../components/common/Error";

const userName = ({ first_name, last_name }) => `${first_name} ${last_name}`;

const UserDetails = ({
  match: {
    params: {
      id
    }
  }
}) => {
  const details = useDetails(id);
  const stats = useStats(id);

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
      </div>
    );

  return null;
};

export default UserDetails;
