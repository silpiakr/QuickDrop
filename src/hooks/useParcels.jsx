import { useEffect, useState } from 'react';

const useParcels = () => {
    const [parcels, setParcels] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('https://parcel-management-server-rosy.vercel.app/parcels')
        .then(res => res.json())
        .then(data => {
            setParcels(data);
            setLoading(false);
        });
    }, [])

    return [parcels, loading];
};

export default useParcels;