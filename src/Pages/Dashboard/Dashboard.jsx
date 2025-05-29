import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '@/provider/AuthProvider';
import useUserRole from '@/hooks/useUserRole'; // Custom hook to get user role
import SidebarMenu from './SidebarMenu';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { role, loading } = useUserRole(); // returns 'User' | 'Admin' | 'DeliveryMen'

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen">
      <SidebarMenu role={role} />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
