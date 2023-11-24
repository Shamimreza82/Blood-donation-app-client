import axios from "axios";
// import { clearCookie } from "./auth";

const axiosInterseptor = axios.create({
    baseURL: 'http://localhost:5000', 
    withCredentials: true
})

/// 
axiosInterseptor.interceptors.response.use((response)=>{
    return response
}, async (err)=> {
    console.log("error tarack in interseptor",err);
    if( err.response && err.response.status === 401 || err.response.status === 403 ){
    //    await clearCookie()
        window.location.replace('/login')
    }

   return Promise.reject(err)
})


export default axiosInterseptor; 