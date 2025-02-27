import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useParcelReq = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data: reqCart = [] } = useQuery({
        queryKey: ['reqCart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcelRequest?email=${user?.email}`)
            return res.data;
        }
    })
    return[reqCart, refetch];
};

export default useParcelReq;