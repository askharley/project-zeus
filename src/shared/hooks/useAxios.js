import { useState } from 'react';
import axios from 'axios';

/**
 * This is the highest level hook for making HTTP requests. It's just a wrapper for basic HTTP requests.
 */
export default function useAxios() {
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  const getRequest = (url) => {
    setIsLoading(true);
    return axios.get(url)
      .then((res) => res.data)
      .finally(() => setIsLoading(false));
  };

  const postRequest = (url, data) => {
    setIsLoading(true);
    return axios.post(url, data)
      .then((res) => res.data)
      .finally(() => setIsLoading(false));
  };

  const putRequest = (url, data) => {
    setIsLoading(true);
    return axios.put(url, data)
      .then((res) => res.data)
      .finally(() => setIsLoading(false));
  };

  const deleteRequest = (url) => {
    setIsLoading(true);
    return axios.delete(url)
      .then((res) => res.data)
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    getRequest,
    postRequest,
    putRequest,
    deleteRequest
  };
}
