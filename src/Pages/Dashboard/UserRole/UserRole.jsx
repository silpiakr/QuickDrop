import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const UserRole = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/users/role/${user.email}`)
        .then(res => {
          setRole(res.data.role);
          setLoading(false);
        });
    }
  }, [user]);

  return { role, loading };
};

export default UserRole;
