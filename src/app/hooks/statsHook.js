import { useEffect, useState } from "react";
import { loadStats } from "../api";
import { formatDate as formatDateFull } from "../utils";
import { YEAR, MONTH } from "../components/constants";

const formatDate = date => formatDateFull(YEAR, MONTH, date);

const toDates = (from, to) => ({
  from: formatDate(from),
  to: formatDate(to),
});

const useStats = (userId, from, to) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const loadStatistic = async () => {
    try {
      setLoading(true);

      const data = await loadStats(
        userId,
        formatDate(from),
        formatDate(to)
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
  }, [from, to]);

  return {
    loading,
    error,
    data,

    dates: toDates(from, to),
  };
};

export default useStats;
