import { getAxiosInstanceApi } from './api';

export const getCompanies=async(route,callback)=>{
  const res= await getAxiosInstanceApi().get(route);
  return res.data; 
}
export const getCompany=async(id,callback)=>{
   await getAxiosInstanceApi().get('/companies/'+id).then(res=>{
    callback(true,res.data);
   }).catch(err=>{
    callback(false,err);
   });
   
}