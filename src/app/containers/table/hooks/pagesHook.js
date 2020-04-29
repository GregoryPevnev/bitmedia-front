import { useEffect, useState } from "react";
import { loadUsers } from "../../../api";

const usePages = page => {
  // Loaded - Set after initial loading (Specifies that number of pages and initial users have been loaded)
  const [loaded, setLoaded] = useState(false);
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
      setLoaded(true);

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
    loaded,
    loading,

    error,

    pages,
    users,
  };
};

export default usePages;
