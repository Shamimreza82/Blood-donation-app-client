import { Outlet } from 'react-router-dom';
import Banner from '../pages/HomePage/Banner';
import Navber from '../pages/Navber/Navber';
import Navber2 from '../pages/Navber/Navber2';
import Footer from '../pages/Footer/Footer';
import Contact from '../pages/Contact/Contact';
import Testimonial from '../pages/Testimonial/Testimonial';
import ComingEvents from '../pages/ComingEvents';
import OurHeros from '../pages/OurHeros';

const MainLayout = () => {
    return (
        <div>
            {/* <Navber></Navber> */}
            <Navber2></Navber2>
            <Banner></Banner>
            <ComingEvents></ComingEvents>
            <OurHeros></OurHeros>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;