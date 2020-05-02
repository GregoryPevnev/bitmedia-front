import React from "react";
import Loading from "../common/Loading";
import Error from "../common/Error";

const Information = ({
  loading,
  error,
  children
}) => (
    <div className="information">
      {(loading || error) && (
        <div className="information__container">
          {loading ? (
            <Loading />
          ) : (
              <Error>{error}</Error>
            )}
        </div>
      )}

      <div className="information__content">
        {children}
      </div>
    </div>
  );

export default Information;
