// import React from 'react';
// import parcelAnimation from '../../../src/assets/animations/parcel-delivery.json'
// import Lottie from 'lottie-react';
// import { Button } from '@/components/ui/button';

// const Banner = () => {
//     return (
//         <div 
//             className=' relative flex flex-col md:flex-row bg-cover items-center bg-no-repeat bg-center my-8 p-5'
//             style={{backgroundImage: "url('https://i.ibb.co.com/fnYnghp/wrench-mobile-phone-shiny-pushing-professional.jpg')"}}
//         >
//             <div className="absolute inset-0 bg-black bg-opacity-30" />
//             <div className='text-center md:w-1/2 md:ml-8'>
//                 <h3 className='text-2xl md:text-5xl font-bold text-nowrap'>Express Home <span className='text-orange-500'>Delivery</span></h3>
//                 <p className='text-center text-gray-700 md:px-6 py-3'>Our Serices reliable transportation of packages to various destinations, ensuring secure handling, tracking, and timely delivery for businesses and individuals, meeting diverse shipping needs locally and globally.</p>
//                 <div className='flex items-center justify-center my-3'>
//                     <input type="text" name="" id="" className='input rounded-none border-none focus:outline-none rounded-s-lg w-1/2' placeholder='Type here...' />
//                     <input type="submit" value="Search" className='btn bg-orange-500 rounded-none border-none font-lg px-8 rounded-e-lg' />
//                 </div>
//                 <Button variant="destructive" className="bg-orange-500 my-6">Explore More</Button>
//             </div>
//             <div className='md:w-1/2'>
//                 <Lottie animationData={parcelAnimation}></Lottie>
//             </div>
//         </div>
//     );
// };

// export default Banner;


import React from 'react';
import Lottie from 'lottie-react';
import parcelAnimation from '../../../src/assets/animations/parcel-delivery.json';
import { Button } from '@/components/ui/button';

const Banner = () => {
    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-between bg-cover bg-no-repeat bg-center my-8 p-5 md:p-12 rounded-lg"
            style={{
                backgroundImage:
                    "url('https://i.ibb.co.com/fnYnghp/wrench-mobile-phone-shiny-pushing-professional.jpg')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg z-0" />

            {/* Left Content */}
            <div className="text-center md:text-left md:w-1/2 md:ml-8 text-white z-10">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                    Express Home <span className="text-orange-500">Delivery</span>
                </h3>
                <p className="text-sm md:text-base text-gray-200 md:pr-12 mb-4">
                    Our services ensure reliable transportation of packages to various destinations,
                    providing secure handling, real-time tracking, and timely delivery for businesses
                    and individuals — meeting local and global shipping needs.
                </p>

                {/* Search box */}
                <div className="flex items-center justify-center md:justify-start my-4">
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="input w-1/2 rounded-s-lg border-none focus:outline-none text-black px-3 py-2"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn ms-2 bg-orange-500 text-white font-semibold px-6 rounded-e-lg border-none"
                    />
                </div>

                {/* Explore Button */}
                <Button variant="destructive" className="bg-orange-500 mt-4">
                    Explore More
                </Button>
            </div>

            {/* Animation */}
            <div className="md:w-1/2 z-10">
                <Lottie animationData={parcelAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Banner;
