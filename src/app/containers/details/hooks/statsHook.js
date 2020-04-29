import { useEffect, useState } from "react";
import { loadStats } from "../../../api";

const useStats = userId => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState([]);

  const loadStatistic = async userId => {
    try {
      setLoading(true);

      const newStats = await loadStats(userId);

      setLoading(false);
      setError(null);
      setStats(newStats);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    loadStatistic(userId);
  }, [userId]);

  return {
    loading,
    error,
    stats,
  };
};

export default useStats;
