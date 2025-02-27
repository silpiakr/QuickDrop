import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useAddedParcel = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: addedParcel = [] } = useQuery({
        queryKey: ['addedParcel', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/petList?email=${user?.email}`)
            console.log('email', res)
            return res.data;
        }
    })
    return [addedParcel, refetch];
};

export default useAddedParcel;