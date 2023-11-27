import useUserInfo from '../../Hooks/useUserInfo';
import AdminHome from './DashboardPages/Admin/AdminHome';
import DonerHome from './DashboardPages/Donor/DonerHome';
import VolunteerHome from './DashboardPages/Volunteer/VolunteerHome';

const DashboardHome = () => {
    const [singleUser] = useUserInfo()

    return (
        <div>
            {singleUser?.role === 'admin' && <AdminHome></AdminHome>}
            {singleUser?.role === 'volunteer' && <VolunteerHome></VolunteerHome>}
            {singleUser?.role === 'donor' && <DonerHome></DonerHome>}
        </div>
    );
};

export default DashboardHome;