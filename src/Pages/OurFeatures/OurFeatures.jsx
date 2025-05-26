import React from "react";
import { FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import CountUp from "react-countup";

const features = [
    {
        icon: <FaShieldAlt className="text-4xl text-orange-500" />,
        title: "Parcel Safety",
        description: "All packages are handled with top-tier security to ensure safe delivery.",
    },
    {
        icon: <FaRocket className="text-4xl text-orange-500" />,
        title: "Super Fast Delivery",
        description: "Lightning-fast delivery options with real-time tracking included.",
    },
    {
        icon: <MdLocalShipping className="text-4xl text-orange-500" />,
        title: "Global Coverage",
        description: "We deliver across the globe with reliable carrier partners.",
    },
];

const OurFeatures = ({ stats }) => {
    const { totalParcels, deliveredParcels, totalUsers } = stats || {};

    return (
        <div className="my-12 px-4 md:px-16">
            {/* Feature Section */}
            <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 hover:shadow-orange-200 transition duration-200"
                    >
                        <div className="mb-4 w-20 mx-auto">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Statistics Section */}
            <h2 className="text-3xl font-bold text-center mt-16 mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-base-100 shadow-md rounded-lg p-6">
                    <h4 className="text-4xl font-bold text-orange-500">
                        <CountUp end={totalParcels || 0} duration={2} />
                    </h4>
                    <p className="text-lg mt-2 text-white">Total Parcels Booked</p>
                </div>
                <div className="bg-base-100 shadow-md rounded-lg p-6">
                    <h4 className="text-4xl font-bold text-orange-500">
                        <CountUp end={deliveredParcels || 0} duration={2} />
                    </h4>
                    <p className="text-lg mt-2 text-white">Parcels Delivered</p>
                </div>
                <div className="bg-base-100 shadow-md rounded-lg p-6">
                    <h4 className="text-4xl font-bold text-orange-500">
                        <CountUp end={totalUsers || 0} duration={2} />
                    </h4>
                    <p className="text-lg mt-2 text-white">Registered Users</p>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;
