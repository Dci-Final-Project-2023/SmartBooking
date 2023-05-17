import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    await fetchData();
  };

  return { data, loading, error, reFetch };
}

export const usePaginate = (url) => {
  const { data, error, loading: isPending } = useFetch(url);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const totalPages = Math.ceil(data?.length / postsPerPage);
  const disablePrevious = currentPage === 1;
  const disableNext = currentPage >= totalPages || totalPages === 0;
  const pagIsShown = totalPages > 1;

  useEffect(() => {
    if (data) {
      setPosts(
        data.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
      );
    }
  }, [data, currentPage, postsPerPage]);

  const previous = (e) => {
    e.preventDefault();
    if (disablePrevious) return;
    setCurrentPage(currentPage - 1);
  };

  const next = (e) => {
    e.preventDefault();
    if (disableNext) return;
    setCurrentPage(currentPage + 1);
  };

  return {
    data,
    isPending,
    error,
    posts,
    setPosts,
    previous,
    next,
    currentPage,
    postsPerPage,
    setPostsPerPage,
    pagIsShown,
    disablePrevious,
    disableNext,
    totalPages,
  };
};
