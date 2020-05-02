import { useEffect, useState } from "react";
import { loadStats } from "../api";
import { formatDate as formatDateFull } from "../utils";
import { YEAR, MONTH } from "../components/constants";

const formatDate = date => formatDateFull(YEAR, MONTH, date);

const toDates = ({ from, to }) => ({
  from: formatDate(from),
  to: formatDate(to),
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
        formatDate(range.from),
        formatDate(range.to)
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
