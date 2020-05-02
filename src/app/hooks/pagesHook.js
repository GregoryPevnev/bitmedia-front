import { useEffect, useState } from "react";
import { loadUsers } from "../api";

const usePages = page => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState(0);
  const [users, setUsers] = useState([]);

  const loadPage = async () => {
    try {
      setLoading(true);

      const {
        pages: newPages,
        users: newUsers,
      } = await loadUsers(page);

      setLoading(false);

      setError(null);

      setPages(newPages);
      setUsers(newUsers);
    } catch (e) {
      setLoading(false);

      setError(e.message);
    }
  };

  useEffect(() => {
    loadPage();
  }, [page]);

  return {
    loading,
    error,
    pages,
    users,
  };
};

export default usePages;
