import { getAxiosInstanceApi } from './api';

export const getCompanies=async(route,callback)=>{
  const res= await getAxiosInstanceApi().get(route);
  return res.data; 
}