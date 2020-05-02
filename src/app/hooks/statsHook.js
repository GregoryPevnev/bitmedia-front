import { useEffect, useState } from "react";
import { loadStats } from "../api";
import { formatDate } from "../utils";

const YEAR = "2019";
const MONTH = "10";

const toDates = ({ from, to }) => ({
  from: formatDate(YEAR, MONTH, from),
  to: formatDate(YEAR, MONTH, to),
});

const useStats = (userId, defaultFrom, defaultTo) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [range, setRange] = useState({
    from: defaultFrom,
    to: defaultTo,
  });

  const loadStatistic = async () => {
    try {
      setLoading(true);

      const data = await loadStats(
        userId,
        formatDate(YEAR, MONTH, range.from),
        formatDate(YEAR, MONTH, range.to)
      );

      setLoading(false);
      setError(null);
      setData(data);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    loadStatistic();
  }, [range]);

  const state = {
    loading,
    error,
    data,

    range,

    dates: toDates(range),
  };

  return [state, setRange];
};

export default useStats;
