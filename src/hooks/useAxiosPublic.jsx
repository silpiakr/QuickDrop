import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://parcel-management-server-rosy.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;