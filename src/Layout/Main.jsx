import Footer from '@/Pages/Shared/Footer/Footer';
import Navbar from '@/Pages/Shared/Header/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;