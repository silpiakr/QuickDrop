// import useAuth from '../../../hooks/useAuth';
// import useAxiosPublic from '../../../hooks/useAxiosPublic';
// import { useNavigate } from 'react-router-dom';

// const SocialLogin = () => {
//     const { goolgeSignIn } = useAuth();
//     const axiosPublic = useAxiosPublic();
//     const navigate = useNavigate();

    // const handleGoogleSingIn = () => {
    //     goolgeSignIn()
    //     .then(result => {
    //         console.log(result.user)
    //         const userInfo = {
    //             email: result.user?.email,
    //             name: result.user?.displayName,
    //             photoURL: result.user?.photoURL
    //         }
    //         axiosPublic.post('/users', userInfo)
    //         .then(res =>{
    //             console.log(res.data)

    //         })
    //         navigate('/');
    //     })
    // }

    // const handleGoogleLogin = async () => {
    //     try {
    //         const result = await signInWithPopup(auth, googleProvider);
    //         const user = result.user;

    //         // Always set role as 'User'
    //         await fetch('https://your-api.com/users', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 name: user.displayName,
    //                 email: user.email,
    //                 photo: user.photoURL,
    //                 role: "User"
    //             })
    //         });

    //         toast.success("Login successful!");
    //     } catch (error) {
    //         toast.error(error.message);
    //     }
    // };

    // const handleRoleUpdate = async (email, newRole) => {
    //     await fetch(`https://your-api.com/users/${email}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ role: newRole })
    //     });
    //     toast.success(`Role updated to ${newRole}`);
    // };
    
//     return (
//         <div>
//             <div>
//                 <button onClick={handleGoogleLogin} className='btn w-full flex gap-5 bg-slate-400 items-center'>
//                     <img className='h-7' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
//                     <span className='text-slate-800 font-bold mt-1'>Continue with Google</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SocialLogin;




import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
// import { auth } from "@/firebase.config";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userInfo = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                userType: "User"
            };

            await axiosPublic.post('/users', userInfo);

            toast.success("Login successful!");
            navigate('/');
        } catch (error) {
            console.error("Google login error:", error);
            toast.error(error.message);
        }
    };

    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn w-full flex gap-5 bg-slate-400 items-center'>
                <img className='h-7' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google icon" />
                <span className='text-slate-800 font-bold mt-1'>Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;
