import { useEffect, useState } from "react";
import { loadUser } from "../api";

const useDetails = userId => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const loadDetails = async userId => {
    try {
      setLoading(true);

      const newUser = await loadUser(userId);

      setLoading(false);
      setError(null);
      setUser(newUser);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    loadDetails(userId);
  }, [userId]);

  return {
    loading,
    error,
    user,
  };
};

export default useDetails;
