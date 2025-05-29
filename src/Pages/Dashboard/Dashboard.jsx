import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMenu from './SidebarMenu/SidebarMenu';
// import useUserRole from './UserRole/UserRole';
import { AuthContext } from '@/provider/AuthProvider';


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { role, loading } = useUserRole(); 

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
