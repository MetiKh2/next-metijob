import { getAxiosInstanceApi } from './api';

export const getJobs=async(route,callback)=>{
  const res= await getAxiosInstanceApi().get(route);
  return res.data; 
}