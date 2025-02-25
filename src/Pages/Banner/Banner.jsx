import React from 'react';
import parcelAnimation from '../../../src/assets/animations/parcel-delivery.json'
import Lottie from 'lottie-react';
import { Button } from '@/components/ui/button';

const Banner = () => {
    return (
        <div 
            className=' relative flex flex-col md:flex-row bg-cover items-center bg-no-repeat bg-center my-8 p-5'
            style={{backgroundImage: "url('https://i.ibb.co.com/fnYnghp/wrench-mobile-phone-shiny-pushing-professional.jpg')"}}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className='text-center md:w-1/2 md:ml-8'>
                <h3 className='text-2xl md:text-5xl font-bold text-nowrap'>Express Home <span className='text-orange-500'>Delivery</span></h3>
                <p className='text-center text-gray-700 md:px-6 py-3'>Our Serices reliable transportation of packages to various destinations, ensuring secure handling, tracking, and timely delivery for businesses and individuals, meeting diverse shipping needs locally and globally.</p>
                <div className='flex items-center justify-center my-3'>
                    <input type="text" name="" id="" className='input rounded-none border-none focus:outline-none rounded-s-lg w-1/2' placeholder='Type here...' />
                    <input type="submit" value="Search" className='btn bg-orange-500 rounded-none border-none font-lg px-8 rounded-e-lg' />
                </div>
                <Button variant="destructive" className="bg-orange-500 my-6">Explore More</Button>
            </div>
            <div className='md:w-1/2'>
                <Lottie animationData={parcelAnimation}></Lottie>
            </div>
        </div>
    );
};

export default Banner;