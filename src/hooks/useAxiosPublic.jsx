import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://finalyearprojectbackend-2gsq.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
