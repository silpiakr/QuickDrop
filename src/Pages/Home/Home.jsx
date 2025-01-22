import React from 'react';
import { Navbar } from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;