import { getAxiosInstanceApi } from './api';

export const getJobs=async(route,callback)=>{
    // getAxiosInstanceApi().get(route)
    // .then(res=>{
    // callback(true,res.data)
    // }).catch(err=>{
    //   callback(false,err.message)
    // });
  const res= await getAxiosInstanceApi().get(route);
  return res.data; 
}