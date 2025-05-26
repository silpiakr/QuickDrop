import React from 'react';
// import { Navbar } from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import OurFeatures from '../OurFeatures/OurFeatures';


const Home = () => {
    //  const [stats, setStats] = useState({});

    // useEffect(() => {
    //     fetch("http://localhost:5000/")
    //         .then((res) => res.json())
    //         .then((data) => setStats(data))
    //         .catch((err) => console.error(err));
    // }, []);

    return (
        <div>
            <section className='my-6'>
            </section>
            <Banner></Banner>
            <OurFeatures></OurFeatures>
            {/* <OurFeatures stats={stats}></OurFeatures>  */}
            
        </div>
    );
};

export default Home;