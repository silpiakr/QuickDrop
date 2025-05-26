// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "@/provider/AuthProvider";
// import logo from '../../../assets/images/logo.png'
// import { FaRegCircleUser } from "react-icons/fa6";
// import { toast } from 'react-toastify';
// import { MdNotificationAdd } from "react-icons/md";

// const Navbar = () => {
//     // const { user, signOutUser } = useContext(AuthContext);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     // const handleSignOut = () => {
//     //     signOutUser()
//     //         .then(() => {
//     //             toast.success('Sign out successfully');
//     //         })
//     //         .catch(error => {
//     //             toast.error('ERROR', error.message);
//     //         });
//     // };

//     const {user, logOut} = useContext(AuthContext);
//     const handleLogOut = () => {
//         logOut()
//         .then(() => { })
//         .catch(error => console.log(error));
//       }

//     // Toggle dropdown
//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     // Close dropdown when clicking outside
//     const closeDropdown = () => {
//         setDropdownOpen(false);
//     };

//     return (
//         <div className="navbar py-6 relative">
//             <div className="navbar-start">
//                 <div className="flex flex-row items-center">
//                     <img src={logo} className="w-16" alt="Logo" />
//                     <a className="pl-3 text-lg md:text-3xl text-nowrap font-bold">QuickDrop</a>
//                 </div>
//             </div>

//             <div className="navbar-end flex items-center gap-4">
//                 <ul className="menu menu-horizontal px-1">
//                     <li><Link className="mr-5 font-semibold" to="/">Home</Link></li>
//                     <li><Link className="mr-5 font-semibold" to="/">
//                         <MdNotificationAdd className="text-2xl text-orange-400 cursor-pointer" />
//                     </Link></li>
//                 </ul>

//                 {user ? (
//                     <div className='relative'>
//                         {/* Profile Icon */}
//                         <div className='flex items-center gap-3 cursor-pointer' onClick={toggleDropdown}>
//                             {user.photoURL ? (
//                                 <img src={user.photoURL} alt="User" className='w-8 h-8 rounded-full' />
//                             ) : (
//                                 <FaRegCircleUser className='text-3xl text-gray-700' />
//                             )}
//                         </div>

//                         {/* Dropdown Menu */}
//                         {dropdownOpen && (
//                             <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50'>
//                                 <ul className="text-sm">
//                                     <li className="px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>
//                                         <Link to='/'>Name: {user.displayName}</Link>
//                                     </li>
//                                     <li className="px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>
//                                         <Link to='/dashboard'>Dashboard</Link>
//                                     </li>
//                                     <li className="px-4 py-2 border-t hover:bg-gray-100 cursor-pointer" onClick={handleLogOut}>
//                                         Sign Out
//                                     </li>
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <Link to='/login' className='btn bg-base-200'>Login</Link>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/provider/AuthProvider";
import logo from "../../../assets/images/logo.png";
import { FaRegCircleUser } from "react-icons/fa6";
import { toast } from "react-toastify";
import { MdNotificationAdd } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Signed out successfully");
                setDropdownOpen(false);
            })
            .catch((error) => {
                console.log(error);
                toast.error(`Sign out failed: ${error.message}`);
            });
    };

    // Toggle dropdown
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar py-6 relative px-4 md:px-10">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="flex flex-row items-center">
                    <img src={logo} className="w-16" alt="Logo" />
                    <span className="pl-3 text-lg md:text-3xl text-nowrap font-bold">QuickDrop</span>
                </div>
            </div>

            {/* Navbar End */}
            <div className="navbar-end flex items-center gap-4">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className="mr-5 font-semibold" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="mr-5 font-semibold" to="/">
                            <MdNotificationAdd className="text-2xl text-orange-400 cursor-pointer" />
                        </Link>
                    </li>
                </ul>

                {/* User Avatar & Dropdown */}
                {user ? (
                    <div className="relative" ref={dropdownRef}>
                        <div
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={toggleDropdown}
                            onKeyDown={(e) => e.key === "Enter" && toggleDropdown()}
                            tabIndex={0}
                            role="button"
                        >
                            {user.photoURL ? (
                                <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                            ) : (
                                <FaRegCircleUser className="text-3xl text-gray-700" />
                            )}
                        </div>

                        {dropdownOpen && (
                            <div className="transition-all duration-150 ease-in-out absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50">
                                <ul className="text-sm">
                                    <li className="px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                                        <Link to="/">Name: {user.displayName}</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li
                                        className="px-4 py-2 border-t hover:bg-gray-100 cursor-pointer"
                                        onClick={handleLogOut}
                                    >
                                        Sign Out
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="btn bg-base-200">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;

