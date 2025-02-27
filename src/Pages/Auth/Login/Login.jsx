// import React, { useContext, useRef, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '@/provider/AuthProvider';
// import { AiOutlineGoogle } from "react-icons/ai";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { sendPasswordResetEmail } from 'firebase/auth';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';

// const Login = () => {

//     const {signInUser, signInWithGoogle} = useContext(AuthContext);
//     const [showPass, setShowPass] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [loginError, setLoginError] = useState(false);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const emailRef = useRef();

//     const handleLogin = e => {
//         e.preventDefault();

//         const email = e.target.email.value;
//         const password = e.target.password.value;
//        console.log(email, password);

//         signInUser(email, password)
//         .then(result => {
//            console.log(result.user);
//            Swal.fire("Success", "Login successful!", "success");
//             e.target.reset();
//             navigate('/');

//         })
//         .catch(error => {
//            toast.error('ERROR', error.message);
//             setLoginError(true);
//         })

//     }
//     const googleSignIn = () => {
//         signInWithGoogle()
//         .then(result => {
//            console.log(result.user);
//             setSuccess(true);

//             Swal.fire('Login with Google successfully!');
//             navigate('/');
//         })
//         .catch(error => {
//            console.log('ERROR', error.message);
//             setLoginError(true);
//         })
//     }

//     const handleForgetPassword = () => {
//        console.log('get email for change password', emailRef.current.value);
//         const email = emailRef.current.value;
//         if(!email){
//             toast.error('Invalid email');
//         }
//         else{
//             sendPasswordResetEmail(auth, email)
//             .then(() => {
//                 Swal.fire('Password reset email sent, check your email');
//             })
//         }

//         navigate(`/forgotPassword?email=${encodeURIComponent(email)}`);
//     }

//     return (
//         <div className="hero bg-base-200 min-h-screen">
//                 <div className=" flex flex-col justify-center items-center card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold">Login Now!</h1>
//                 </div>
//                     <form onSubmit={handleLogin} className="card-body w-full">
//                         <div className="form-control">
//                             <button onClick={googleSignIn} className='btn text-base'>
//                                 <AiOutlineGoogle className='text-2xl text-green-600' />
//                                 Login With Google
//                             </button>
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control relative">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type={showPass ? 'text' : "password" } name='password' placeholder="password" className="input bg-base-200" required />
//                             <a onClick={() => setShowPass(!showPass)} className='btn btn-xs absolute right-3 top-12'>
//                                 {
//                                     showPass ? <FaRegEyeSlash /> : <FaRegEye />
//                                 } 
//                             </a>
//                             <label onClick={handleForgetPassword} className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button type='submit' className="btn bg-teal-600 text-white">Login</button>
//                         </div>
//                     </form>
//                     <p className='text-gray-600 font-semibold'>Don't Have An Account? <Link className='text-teal-700' to='/register'>Register</Link></p>
//                 </div>
//         </div>
//     );
// };

// export default Login;



// import {  useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { AuthContext } from "@/provider/AuthProvider";
// import SocialLogin from "@/Pages/Shared/SocialLogin/SocialLogin";
// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [disabled, setDisabled] = useState(true);
//     const {signIn}  = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.form?.pathname || "/";

//     const handleLogin = e => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//         .then(result => {
//             const user = result.user;
//             console.log(user)
//                 Swal.fire({
//                     title: "User Login Successful",
//                     icon: "success",
//                     showClass: {
//                       popup: `
//                         animate__animated
//                         animate__fadeInUp
//                         animate__faster
//                       `
//                     },
//                     hideClass: {
//                       popup: `
//                         animate__animated
//                         animate__fadeOutDown
//                         animate__faster
//                       `
//                     }
//                   }); 
//                 navigate(from, {replace: true});
//             }

//         )
//     }

//     return (
//         <div>
//             <div className="max-w-2xl mx-auto my-32">
//                 <form onSubmit={handleLogin} className="flex max-w-full flex-col gap-4 border-2 p-5 border-pcolor rounded-lg">
//                     <h2 className="text-3xl font-bold text-center py-5">Welcome Back!</h2>
//                     <div>
//                         <div className="mb-2 block">
//                         <label htmlFor="email1" value="Your email" />
//                         </div>
//                         <input name="email" id="email1" type="email" placeholder="Email" required />
//                     </div>
//                     <div className="relative">
//                         <div className="mb-2 block">
//                         <label htmlFor="password1" value="Your password" />
//                         </div>
//                         <input name="password" id="password1" type={showPassword ? 'text' : 'password'} placeholder="Password" required />
//                         <button>
//                             <button className="btn absolute right-4 -top-2"
//                                 onClick={() => setShowPassword(!showPassword)}>
//                                     {
//                                         showPassword ? <FaEye /> :<FaEyeSlash /> 
//                                     }
                                    
//                                 </button>
//                             </button>
//                     </div>
//                     <button type="submit" className="btn py-1 font-bold text-xl">Login</button>
//                     <SocialLogin></SocialLogin>
//                     <p>Are you new here? <Link to='/register' className="text-pcolor">Create an account</Link> </p>
//                 </form>
//             </div>

//         </div>
//     );
// };

// export default Login;


import {  useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "@/Pages/Shared/SocialLogin/SocialLogin";
import { AuthContext } from "@/provider/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                Swal.fire({
                    title: "User Login Successful",
                    icon: "success",
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Login Failed",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    return (
        <div>
            <div className="max-w-2xl mx-auto my-32">
                <form 
                    onSubmit={handleLogin} 
                    className="flex max-w-full flex-col gap-4 border-2 p-5 border-pcolor rounded-lg"
                >
                    <h2 className="text-3xl font-bold text-center py-5">Welcome Back!</h2>

                    {/* Email Input */}
                    <div>
                        <div className="mb-2 block">
                            <label htmlFor="email1">Your Email</label>
                        </div>
                        <input
                            name="email"
                            id="email1"
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full p-2 border rounded"
                            onChange={(e) => setDisabled(!(e.target.value))}
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <div className="mb-2 block">
                            <label htmlFor="password1">Your Password</label>
                        </div>
                        <input
                            name="password"
                            id="password1"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            required
                            className="w-full p-2 border rounded"
                            onChange={(e) => setDisabled(!(e.target.value))}
                        />
                        {/* Toggle Password Visibility */}
                        <button 
                            type="button"
                            className="absolute right-4 top-10"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={disabled} 
                        className={`py-2 font-bold text-xl btn rounded ${
                            disabled ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        Login
                    </button>

                    {/* Social Login */}
                    <SocialLogin />

                    {/* Register Link */}
                    <p>
                        Are you new here?{" "}
                        <Link to="/register" className="text-pcolor">
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
