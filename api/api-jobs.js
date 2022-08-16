import { getAxiosInstanceApi } from './api';

export const getJobs=async(route)=>{
  const res= await getAxiosInstanceApi().get(route);
  return res.data; 
}
export const sendResume=async(formData,callback)=>{
 await getAxiosInstanceApi().post('jobs/send-resume',formData)
 .then(res=>{
  console.log(res)
  callback(true,res?.data)
 })
 .catch(err=>{
  callback(false,err)
 });
  
}
