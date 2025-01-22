import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log("Error caught from axios interceptor --->", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      },
    );
  }, [logOut, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
