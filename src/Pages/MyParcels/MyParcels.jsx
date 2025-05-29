import React, { useEffect, useState } from 'react';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useAuth from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [parcels, setParcels] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/parcels?email=${user.email}`)
        .then((res) => setParcels(res.data))
        .catch((err) => toast.error('Failed to fetch parcels'));
    }
  }, [user, axiosSecure]);

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this booking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/parcels/cancel/${id}`)
          .then(() => {
            toast.success('Booking canceled');
            setParcels((prev) =>
              prev.map((parcel) =>
                parcel._id === id ? { ...parcel, status: 'canceled' } : parcel
              )
            );
          })
          .catch(() => toast.error('Failed to cancel booking'));
      }
    });
  };

  const filteredParcels =
    filterStatus === 'All'
      ? parcels
      : parcels.filter((parcel) => parcel.status === filterStatus);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Parcels</h2>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="statusFilter" className="mr-2 font-semibold">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="on the way">On the Way</option>
          <option value="delivered">Delivered</option>
          <option value="returned">Returned</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      {/* Parcels Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Parcel Type</th>
              <th className="px-4 py-2 border">Requested Delivery Date</th>
              <th className="px-4 py-2 border">Approximate Delivery Date</th>
              <th className="px-4 py-2 border">Booking Date</th>
              <th className="px-4 py-2 border">Delivery Men ID</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredParcels.map((parcel) => (
              <tr key={parcel._id} className="text-center">
                <td className="px-4 py-2 border">{parcel.parcelType}</td>
                <td className="px-4 py-2 border">
                  {new Date(parcel.requestedDeliveryDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border">
                  {parcel.approximateDeliveryDate
                    ? new Date(parcel.approximateDeliveryDate).toLocaleDateString()
                    : 'N/A'}
                </td>
                <td className="px-4 py-2 border">
                  {new Date(parcel.bookingDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border">
                  {parcel.deliveryMenId || 'Not Assigned'}
                </td>
                <td className="px-4 py-2 border capitalize">{parcel.status}</td>
                <td className="px-4 py-2 border space-x-2">
                  {/* Update Button */}
                  <Link to={`/dashboard/update-parcel/${parcel._id}`}>
                    <button
                      className={`px-2 py-1 rounded ${
                        parcel.status !== 'pending'
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                      disabled={parcel.status !== 'pending'}
                    >
                      Update
                    </button>
                  </Link>

                  {/* Cancel Button */}
                  <button
                    onClick={() => handleCancel(parcel._id)}
                    className={`px-2 py-1 rounded ${
                      parcel.status !== 'pending'
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                    disabled={parcel.status !== 'pending'}
                  >
                    Cancel
                  </button>

                  {/* Review Button */}
                  {parcel.status === 'delivered' && (
                    <Link to={`/dashboard/review/${parcel._id}`}>
                      <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                        Review
                      </button>
                    </Link>
                  )}

                  {/* Pay Button */}
                  {/* Implement payment logic as needed */}
                  <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Pay
                  </button>
                </td>
              </tr>
            ))}
            {filteredParcels.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No parcels found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
