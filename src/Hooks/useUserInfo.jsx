import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axiosInterseptor from '../api/auth';

const useUserInfo = () => {
    const { user } = useAuth()
    const [singleUser, setSingelUser] = useState({})
      useEffect(() =>{
          axiosInterseptor.get(`/user/${user?.email}`)
          .then(res => {
              setSingelUser(res.data);
          })
      }, [user])
    return [singleUser]
};

export default useUserInfo;