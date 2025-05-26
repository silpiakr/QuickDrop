// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";

// const TopDeliveryMen = () => {
//     const [topDeliveryMen, setTopDeliveryMen] = useState([]);

//     useEffect(() => {
//         fetch("") 
//             .then((res) => res.json())
//             .then((data) => setTopDeliveryMen(data))
//             .catch((error) => console.error("Error fetching delivery men:", error));
//     }, []);

//     return (
//         <div className="my-16 px-4 md:px-16">
//             <h2 className="text-3xl font-bold text-center mb-10">
//                 Top Delivery Men
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {topDeliveryMen.map((man, index) => (
//                     <div
//                         key={index}
//                         className="bg-white shadow-lg rounded-xl p-6 text-center"
//                     >
//                         <img
//                             src={man.image}
//                             alt={man.name}
//                             className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
//                         />
//                         <h3 className="text-xl font-semibold">{man.name}</h3>
//                         <p className="text-gray-600 mt-2">
//                             Parcels Delivered:{" "}
//                             <span className="font-bold text-orange-500">{man.parcelsDelivered}</span>
//                         </p>
//                         <p className="text-gray-600 mt-1 flex justify-center items-center gap-1">
//                             Average Rating:{" "}
//                             <span className="font-bold text-yellow-500 flex items-center">
//                                 {man.averageRating?.toFixed(1) || "N/A"} <FaStar />
//                             </span>
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TopDeliveryMen;
