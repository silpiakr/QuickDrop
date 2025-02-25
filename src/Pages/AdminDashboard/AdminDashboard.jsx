// import React from 'react';
// import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import dynamic from 'next/dynamic';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
// const AdminDashboard = () => {
//     const { data: session } = useSession();
//     const router = useRouter();
//     const [bookingsData, setBookingsData] = useState([]);
//     const [comparisonData, setComparisonData] = useState([]);

//     useEffect(() => {
//         if (!session || session.user.userType !== 'Admin') {
//             router.push('/');
//         }
//         fetch('/api/bookings')
//             .then((res) => res.json())
//             .then((data) => {
//                 setBookingsData(data.bookingsByDate);
//                 setComparisonData(data.bookedVsDelivered);
//             });
//     }, [session, router]);

//     return (
//         <div className="flex min-h-screen bg-base-200">
//             <div className="drawer drawer-mobile w-64 bg-base-100 p-4">
//                 <ul className="menu p-4 w-full text-base-content">
//                     <li><a href="/admin">Dashboard</a></li>
//                     <li><a href="/admin/users">Manage Users</a></li>
//                 </ul>
//             </div>
//             <main className="flex-1 p-6">
//                 <div className="card bg-base-100 shadow-xl p-6">
//                     <h2 className="card-title">Bookings by Date</h2>
//                     <div className="p-4">
//                         <Chart
//                             type="bar"
//                             options={{ chart: { id: 'bookings-chart' }, xaxis: { categories: bookingsData.map(item => item.date) } }}
//                             series={[{ name: 'Bookings', data: bookingsData.map(item => item.count) }]}
//                         />
//                     </div>
//                 </div>

//                 <div className="card bg-base-100 shadow-xl p-6 mt-6">
//                     <h2 className="card-title">Booked vs Delivered</h2>
//                     <div className="p-4">
//                         <Chart
//                             type="line"
//                             options={{ chart: { id: 'comparison-chart' }, xaxis: { categories: comparisonData.map(item => item.date) } }}
//                             series={[
//                                 { name: 'Booked', data: comparisonData.map(item => item.booked) },
//                                 { name: 'Delivered', data: comparisonData.map(item => item.delivered) }
//                             ]}
//                         />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;