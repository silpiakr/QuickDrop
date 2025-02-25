import React from 'react';
// import { Navbar } from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Navbar from '../Shared/Header/Navbar';


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section className='my-6'>
            {/* <Navbar></Navbar> */}
            <Navbar></Navbar>
            </section>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;