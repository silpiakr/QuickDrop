// // import React, { useContext, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AuthContext } from '@/provider/AuthProvider';
// // import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// // import { AiOutlineGoogle } from "react-icons/ai";
// // import { toast } from 'react-toastify';



// // const Register = () => {
// //     const { signInWithGoogle, createUser, updateUserProfile } = useContext(AuthContext);
// //     const [showPassword, setShowPassword] = useState(false);
// //     const [error, setError] = useState('');
// //     const navigate = useNavigate();

// //     const googleSignIn = () => {
// //         signInWithGoogle()
// //             .then(result => {
// //                 console.log(result.user);
// //                 toast.success('Registration successful');
// //                 navigate('/');
// //             })
// //             .catch(error => {
// //                 toast.error(`Registration Failed: ${error.message}`);
// //             });
// //     };

// //     const handleSignup = (e) => {
// //         e.preventDefault();

// //         const name = e.target.name.value;
// //         const photo = e.target.photo.value;
// //         const email = e.target.email.value;
// //         const password = e.target.password.value;

// //         if (password.length < 6) {
// //             setError('Password must be at least 6 characters.');
// //             return;
// //         }

// //         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// //         if (!passwordRegex.test(password)) {
// //             setError('Password must contain at least one uppercase and one lowercase letter.');
// //             return;
// //         }

// //         createUser(email, password)
// //             .then(result => {
// //                 console.log(result.user);
// //                 e.target.reset();
// //                 toast.success('Sign Up successful');

// //                 return updateUserProfile({
// //                     displayName: name,
// //                     photoURL: photo,
// //                 });
// //             })
// //             .then(() => {
// //                 navigate('/');
// //             })
// //             .catch(error => {
// //                 toast.error(`Registration Failed: ${error.message}`);
// //             });
// //     };

// //     return (
// //         <div className="hero bg-base-200 min-h-screen">
// //             <div className="flex flex-col justify-center items-center card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
// //                 <div className="text-center">
// //                     <h1 className="text-2xl font-bold">Register Now!</h1>
// //                 </div>
// //                 <form onSubmit={handleSignup} className="card-body w-full">
// //                     <div className="form-control">
// //                         <button type="button" onClick={googleSignIn} className="btn text-base">
// //                             <AiOutlineGoogle className="text-2xl text-green-600" />
// //                             Continue With Google
// //                         </button>
// //                     </div>
// //                     <div className="form-control">
// //                         <label className="label">
// //                             <span className="label-text">Name</span>
// //                         </label>
// //                         <input type="text" name="name" placeholder="Name" className="input bg-base-200 rounded-none" required />
// //                     </div>
// //                     <div className="form-control">
// //                         <label className="label">
// //                             <span className="label-text">Photo URL</span>
// //                         </label>
// //                         <input type="text" name="photo" placeholder="Photo Url" className="input bg-base-200 rounded-none" />
// //                     </div>
// //                     <div className="form-control">
// //                         <label className="label">
// //                             <span className="label-text">Email</span>
// //                         </label>
// //                         <input type="email" name="email" placeholder="Email" className="input bg-base-200 rounded-none" required />
// //                     </div>
// //                     <div className="form-control relative">
// //                         <label className="label">
// //                             <span className="label-text">Password</span>
// //                         </label>
// //                         <input
// //                             type={showPassword ? 'text' : 'password'}
// //                             name="password"
// //                             placeholder="Password"
// //                             className="input bg-base-200"
// //                             required
// //                         />
// //                         <button
// //                             type="button"
// //                             onClick={() => setShowPassword(!showPassword)}
// //                             className="btn btn-xs absolute right-3 top-12"
// //                         >
// //                             {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
// //                         </button>
// //                     </div>
// //                     {error && <div className="text-red-400 text-sm mb-4">{error}</div>}
// //                     <div className="form-control mt-6">
// //                         <button type="submit" className="btn bg-teal-600 text-white">Register</button>
// //                     </div>
// //                 </form>
// //                 <p className="text-gray-600 font-semibold">
// //                     Already Have An Account? <Link className="text-teal-700" to="/login">Login</Link>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Register;


// import { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useAxiosPublic from "@/hooks/useAxiosPublic";
// import { AuthContext } from "@/provider/AuthProvider";
// import SocialLogin from "@/Pages/Shared/SocialLogin/SocialLogin";

// const Register = () => {
//     const axiosPublic = useAxiosPublic();
//     const [showPassword, setShowPassword] = useState(false);
//     const {createUser, updateUserProfile} = useContext(AuthContext);
//     const navigate = useNavigate();
//     const {register, handleSubmit, reset,
//     formState: { errors }} = useForm();

//     const onSubmit = data => {
//         console.log(data)
//         createUser(data.email, data.password)
//         .then(result => {
//             const loggedUser = result.user;
//             console.log(loggedUser);
//             updateUserProfile(data.name, data.photoURL)
//             .then(() => {
//                 const userInfo = {
//                     name: data.name,
//                     email: data.email,
//                     photoURL: data.photoURL
//                 }
//                 axiosPublic.post('/users', userInfo)
//                 .then(res =>{
//                     if(res.data.insertedId){
//                         console.log('user added')
//                         reset();
//                         Swal.fire({
//                             title: "Sign Up Successful",
//                             icon: "success",
//                             showClass: {
//                                 popup: `
//                                 animate__animated
//                                 animate__fadeInUp
//                                 animate__faster
//                                 `
//                             },
//                             hideClass: {
//                                 popup: `
//                                 animate__animated
//                                 animate__fadeOutDown
//                                 animate__faster
//                                 `
//                             }
//                         });
//                     }
//                     navigate('/');
//                 })
                
//             })
//             .catch(error => console.log(error));
//         })
//     }

//     return (
//         <div className="pt-20">
           
//             <div className="max-w-3xl mx-auto border-2 border-pcolor p-8 rounded-lg my-32">
//                 <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-full flex-col gap-4">
//                 <h2 className="text-3xl font-bold text-center py-5">Let's create an account!</h2>
//                     <div>
//                         <div className="mb-2 block">
//                         <label htmlFor="name" value="Your Name" />
//                         </div>
//                         <input {...register("name", { required: true })} id="name" type="text" placeholder="Your Name" />
//                         {errors.name && <span className="text-red-600">Name is required</span>}
//                     </div>
//                     <div>
//                         <div className="mb-2 block">
//                         <label htmlFor="email1" value="Your email" />
//                         </div>
//                         <input {...register("email", { required: true })} id="email1" type="email" placeholder="Email" />
//                         {errors.email && <span className="text-red-600">email is required</span>}
//                     </div>
//                     <div>
//                         <div className="mb-2 block">
//                         <label htmlFor="photo" value="Your Photo URL" />
//                         </div>
//                         <input {...register("photoURL", { required: true })} id="photo" type="photo" placeholder="Photo URL" />
//                         {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
//                     </div>
//                     <div className="relative">
//                         <div className="mb-2 block">
//                             <label htmlFor="password1" value="Your password" />
//                         </div>
//                         <input {...register("password", { required: true, 
//                             minLength: 6, 
//                             maxLength: 20,
//                             pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/ 
//                             })} id="password1" type={showPassword? 'text' : 'password'} placeholder="Password" />
//                         {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
//                         {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
//                         {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less 20 characters</span>}
//                         {errors.password?.type === 'pattern' && <span className="text-red-600">Password must one uppercase, one lowercase, one number, one special character</span>}
//                         <button className="btn absolute right-4 top-11"
//                         onClick={() => setShowPassword(!showPassword)}>
//                             {
//                                 showPassword ? <FaEye /> :<FaEyeSlash /> 
//                             }
                            
//                         </button>
//                     </div>
//                     <button type="submit" className="bg-pcolor py-1 font-bold text-xl">Register</button>
//                     <SocialLogin></SocialLogin>
//                     <p>Have you Already a account? <Link to='/login' className="text-pcolor">login here</Link> </p>
//                 </form>
//             </div>

//         </div>
//     );
// };

// export default Register;




// import { useState } from "react";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "@/firebase.config";
// import { toast } from "react-toastify";

// const Register = () => {
//     const [form, setForm] = useState({ name: '', email: '', password: '', photo: '', role: 'User' });

//     const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         try {
//             const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password);
//             await updateProfile(user, {
//                 displayName: form.name,
//                 photoURL: form.photo
//             });

//             // Save to database
//             await fetch('https://your-api.com/users', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     name: form.name,
//                     email: form.email,
//                     photo: form.photo,
//                     role: form.role
//                 })
//             });

//             toast.success("Registered successfully");
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleRegister} className="space-y-4">
//             <input name="name" type="text" onChange={handleChange} placeholder="Name" required />
//             <input name="photo" type="text" onChange={handleChange} placeholder="Photo URL" />
//             <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
//             <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
//             <select name="role" onChange={handleChange} required>
//                 <option value="User">User</option>
//                 <option value="DeliveryMen">DeliveryMen</option>
//             </select>
//             <button type="submit">Register</button>
//         </form>
//     );
// };
// export default Register;




import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import SocialLogin from "@/Pages/Shared/SocialLogin/SocialLogin";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                return updateUserProfile(data.name, data.photoURL).then(() => {
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        photoURL: data.photoURL,
                        userType: data.userType || "User"  // default to User
                    };

                    return axiosPublic.post('/users', userInfo);
                });
            })
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        title: "Sign Up Successful",
                        icon: "success"
                    });
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    return (
        <div className="pt-20">
            <div className="max-w-3xl mx-auto border-2 border-pcolor p-8 rounded-lg my-32">
                <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-full flex-col gap-4">
                    <h2 className="text-3xl font-bold text-center py-5">Let's create an account!</h2>

                    {/* Name Field */}
                    <input {...register("name", { required: true })} type="text" placeholder="Your Name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}

                    {/* Email Field */}
                    <input {...register("email", { required: true })} type="email" placeholder="Email" />
                    {errors.email && <span className="text-red-600">Email is required</span>}

                    {/* Photo URL */}
                    <input {...register("photoURL", { required: true })} type="url" placeholder="Photo URL" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}

                    {/* User Type Selection */}
                    <select {...register("userType", { required: true })} className="input">
                        <option value="">Select User Type</option>
                        <option value="User">User</option>
                        <option value="DeliveryMen">DeliveryMen</option>
                    </select>
                    {errors.userType && <span className="text-red-600">User Type is required</span>}

                    {/* Password Field */}
                    <div className="relative">
                        <input
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-2">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                        {errors.password?.type === 'pattern' && (
                            <span className="text-red-600">Password must include upper/lowercase, number & special character</span>
                        )}
                    </div>

                    <button type="submit" className="bg-pcolor py-1 font-bold text-xl">Register</button>

                    {/* Social Login (userType will be "User") */}
                    <SocialLogin />

                    <p>Already have an account? <Link to='/login' className="text-pcolor">Login here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
