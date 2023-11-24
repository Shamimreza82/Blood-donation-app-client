import React from 'react';
import useUserInfo from '../../Hooks/useUserInfo';
import DonerHome from './DashboardPages/Donor/DonerHome';

const DashboardHome = () => {
    const [singleUser] = useUserInfo()

    return (
        <div>
            {singleUser?.role === 'admin' && <h1 className='text-3xl text-center'>Welcome</h1>}
            {singleUser?.role === 'donor' && <h1 className='text-3xl text-center'>Welcome Rakib</h1>}
            {singleUser?.role === 'admin' && <h1 className='text-3xl text-center'>Welcome</h1>}
            {singleUser?.role === 'donor' && <DonerHome></DonerHome>}
        </div>
    );
};

export default DashboardHome;