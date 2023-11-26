import useUserInfo from '../../Hooks/useUserInfo';
import AdminHome from './DashboardPages/Admin/AdminHome';
import DonerHome from './DashboardPages/Donor/DonerHome';

const DashboardHome = () => {
    const [singleUser] = useUserInfo()

    return (
        <div>
            {singleUser?.role === 'admin' && <AdminHome></AdminHome>}
            {singleUser?.role === 'donor' && <h1 className='text-3xl text-center'>Welcome Rakib</h1>}
           
            {singleUser?.role === 'donor' && <DonerHome></DonerHome>}
        </div>
    );
};

export default DashboardHome;