import { useEffect, useState } from "react";
import { loadStats } from "../../../api";

const YEAR = "2019";
const MONTH = "10";

const toDate = day => `${YEAR}-${MONTH}-${day}`;

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

      const data = await loadStats(userId, toDate(range.from), toDate(range.to));

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
  };

  return [state, setRange];
};

export default useStats;
