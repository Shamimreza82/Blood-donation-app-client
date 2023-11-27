
import { Elements } from '@stripe/react-stripe-js';
import Navber2 from '../Navber/Navber2';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_payment_API)

const Fundings = () => {
    return (
        <div>
            <Navber2></Navber2>
           <div className='max-w-xl m-auto'>
            <hr />
           <Elements stripe={stripePromise}>
            
                <div className='md:pt-40'>
                <CheckoutForm></CheckoutForm>
                </div>
            </Elements>
           </div>
        </div>
    );
};

export default Fundings;