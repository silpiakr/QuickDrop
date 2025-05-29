import { Link } from 'react-router-dom';

const SidebarMenu = ({ role }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {role === 'User' && (
          <>
            <li><Link to="book-parcel">📦 Book a Parcel</Link></li>
            <li><Link to="my-parcels">📄 My Parcels</Link></li>
            <li><Link to="my-profile">👤 My Profile</Link></li>
          </>
        )}
        {role === 'DeliveryMen' && (
          <>
            <li><Link to="delivery-list">🚚 My Delivery List</Link></li>
            <li><Link to="my-reviews">⭐ My Reviews</Link></li>
          </>
        )}
        {role === 'Admin' && (
          <>
            <li><Link to="all-parcels">📦 All Parcels</Link></li>
            <li><Link to="all-users">👥 All Users</Link></li>
            <li><Link to="delivery-men">🧍 All Delivery Men</Link></li>
            <li><Link to="statistics">📊 Statistics</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SidebarMenu;
