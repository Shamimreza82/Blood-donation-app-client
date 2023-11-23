
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../Hooks/useAuth';

const SocialLogin = () => {
    const {loginWithGoogle} = useAuth()
    const navigate = useNavigate()

  const handleGoogleLogin = async () => {
        const result = await loginWithGoogle()
        toast.success("login successful")
        navigate('/')
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className='flex items-center gap-4 border p-2 px-10 rounded-full mt-4'>
                <FcGoogle size={30}></FcGoogle> Login with Google
           </button>
        </div>
    );
};

export default SocialLogin;