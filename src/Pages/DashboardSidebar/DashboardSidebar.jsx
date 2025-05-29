import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useUserType from '../hooks/useUserType';

const DashboardSidebar = () => {
  const { user } = useAuth();
  const userType = useUserType();

  return (
    <div className="w-64 p-4 bg-gray-200 h-full">
      <ul className="space-y-4">
        {userType === 'User' && (
          <>
            <li><Link to="/book-parcel">Book a Parcel</Link></li>
            <li><Link to="/parcels">My Parcels</Link></li>
            <li><Link to="/my-profile">My Profile</Link></li>
          </>
        )}
        {userType === 'DeliveryMen' && (
          <>
            <li><Link to="/delivery-list">My Delivery List</Link></li>
            <li><Link to="/my-reviews">My Reviews</Link></li>
          </>
        )}
        {userType === 'Admin' && (
          <>
            <li><Link to="/all-parcels">All Parcels</Link></li>
            <li><Link to="/all-users">All Users</Link></li>
            <li><Link to="/delivery-men">All Delivery Men</Link></li>
            <li><Link to="/statistics">Statistics</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DashboardSidebar;