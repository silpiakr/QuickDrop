// import React from 'react';

// const BookParcels = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default BookParcels;

import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const BookParcels = () => {
  const { user } = useAuth();
  const { register, handleSubmit, watch, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const weight = watch('weight');
  let price = 0;
  if (weight == 1) price = 50;
  else if (weight == 2) price = 100;
  else if (weight > 2) price = 150;

  const onSubmit = async (data) => {
    const booking = {
      ...data,
      name: user.displayName,
      email: user.email,
      price,
      status: 'pending',
      bookingDate: new Date().toISOString(),
    };
    const res = await axiosSecure.post('/parcels', booking);
    if (res.data.insertedId) {
      alert('Booking Successful');
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <input value={user.displayName} readOnly className="input" />
      <input value={user.email} readOnly className="input" />
      <input {...register('phone', { required: true })} placeholder="Phone Number" className="input" />
      <input {...register('type', { required: true })} placeholder="Parcel Type" className="input" />
      <input {...register('weight', { required: true, valueAsNumber: true })} placeholder="Weight (kg)" className="input" />
      <input {...register('receiverName', { required: true })} placeholder="Receiver's Name" className="input" />
      <input {...register('receiverPhone', { required: true })} placeholder="Receiver's Phone" className="input" />
      <input {...register('address', { required: true })} placeholder="Delivery Address" className="input" />
      <input {...register('deliveryDate', { required: true })} type="date" className="input" />
      <input {...register('latitude', { required: true, valueAsNumber: true })} placeholder="Latitude" className="input" />
      <input {...register('longitude', { required: true, valueAsNumber: true })} placeholder="Longitude" className="input" />
      <input value={`৳ ${price}`} readOnly className="input" />
      <button className="btn btn-primary">Book</button>
    </form>
  );
};

export default BookParcels;
