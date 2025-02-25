import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/provider/AuthProvider';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { toast } from 'react-toastify';

const Register = () => {
    const { signInWithGoogle, createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const googleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('Registration successful');
                navigate('/');
            })
            .catch(error => {
                toast.error(`Registration Failed: ${error.message}`);
            });
    };

    const handleSignup = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must contain at least one uppercase and one lowercase letter.');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                toast.success('Sign Up successful');

                return updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                });
            })
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                toast.error(`Registration Failed: ${error.message}`);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="flex flex-col justify-center items-center card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Register Now!</h1>
                </div>
                <form onSubmit={handleSignup} className="card-body w-full">
                    <div className="form-control">
                        <button type="button" onClick={googleSignIn} className="btn text-base">
                            <AiOutlineGoogle className="text-2xl text-green-600" />
                            Continue With Google
                        </button>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input bg-base-200 rounded-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo Url" className="input bg-base-200 rounded-none" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input bg-base-200 rounded-none" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            className="input bg-base-200"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs absolute right-3 top-12"
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>
                    {error && <div className="text-red-400 text-sm mb-4">{error}</div>}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-teal-600 text-white">Register</button>
                    </div>
                </form>
                <p className="text-gray-600 font-semibold">
                    Already Have An Account? <Link className="text-teal-700" to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
