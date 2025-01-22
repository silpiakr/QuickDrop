import React from 'react';
import parcelAnimation from '../../../src/assets/animations/parcel-delivery.json'
import Lottie from 'lottie-react';
import { Button } from '@/components/ui/button';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center bg-slate-300 my-8'>
            <div className='text-center md:w-1/2 ml-6'>
                <h3 className='text-4xl font-bold'>Express Home <span className='text-orange-500'>Delivery</span> Services</h3>
                <p className='text-center text-gray-500 px-6 py-3'>Our Serices reliable transportation of packages to various destinations, ensuring secure handling, tracking, and timely delivery for businesses and individuals, meeting diverse shipping needs locally and globally.</p>
                <div className='flex items-center justify-center my-3'>
                    <input type="text" name="" id="" className='input rounded-none border-none rounded-s-lg w-1/2' placeholder='Type here anything' />
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