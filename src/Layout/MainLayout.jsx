import Banner from '../pages/HomePage/Banner';
import Navber2 from '../pages/Navber/Navber2';
import Footer from '../pages/Footer/Footer';
import Contact from '../pages/Contact/Contact';
import Testimonial from '../pages/Testimonial/Testimonial';
import ComingEvents from '../pages/ComingEvents';
import OurHeros from '../pages/OurHeros';
import Qna from '../pages/Qna';
import { Helmet } from 'react-helmet';

const MainLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Life Lines | Home</title>
            </Helmet>
            {/* <Navber></Navber> */}
          
            <Banner></Banner>
            <OurHeros></OurHeros>
            <ComingEvents></ComingEvents>
            <Testimonial></Testimonial>
            <Qna></Qna>
            <Contact></Contact>
            <Footer></Footer>       
        </div>
    );
};

export default MainLayout;