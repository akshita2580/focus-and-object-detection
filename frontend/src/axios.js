import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      try {
        // Optional: surface a toast if react-toastify is available at call sites
        // and allow callers to handle redirects.
        console.warn('Unauthorized (401): redirect to login');
      } catch (_) {}
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
