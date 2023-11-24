import axios from "axios";
import axiosInterseptor from "./auth";

export const imageUplode = async (image) => {
    const fromData = new FormData()
    fromData.append("image", image) 
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`, fromData)
      return await data; 
 }


 ////// user single data

 export const userSingleData = async (user) => {
    const email = user?.email; 
    const res = await axiosInterseptor.get(`/user/${email}`)
    return res
 }


