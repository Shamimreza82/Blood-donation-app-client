import Banner from '../pages/HomePage/Banner';
import Navber from '../pages/Navber/Navber';
import Navber2 from '../pages/Navber/Navber2';

const MainLayout = () => {
    return (
        <div>
            {/* <Navber></Navber> */}
            <Navber2></Navber2>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;