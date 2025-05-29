import { Link } from 'react-router-dom';

const SidebarMenu = ({ role }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {role === 'User' && (
          <>
            <li><Link to="/dashboard/book-parcel">📦 Book a Parcel</Link></li>
            <li><Link to="/dashboard/my-parcels">📄 My Parcels</Link></li>
            <li><Link to="/dashboard/my-profile">👤 My Profile</Link></li>
          </>
        )}
        {role === 'DeliveryMen' && (
          <>
            <li><Link to="/dashboard/delivery-list">🚚 My Delivery List</Link></li>
            <li><Link to="/dashboard/my-reviews">⭐ My Reviews</Link></li>
          </>
        )}
        {role === 'Admin' && (
          <>
            <li><Link to="/dashboard/all-parcels">📦 All Parcels</Link></li>
            <li><Link to="/dashboard/all-users">👥 All Users</Link></li>
            <li><Link to="/dashboard/delivery-men">🧍 All Delivery Men</Link></li>
            <li><Link to="/dashboard/statistics">📊 Statistics</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SidebarMenu;
