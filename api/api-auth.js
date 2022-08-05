import { getAxiosInstanceApi } from './api';

export const registerUser=async(data,callback)=>{
    getAxiosInstanceApi().post('auth/register',data)
    .then(res=>{
    callback(true,res.data)
    }).catch(err=>{
      console.log(err);
      callback(false,err.response.data.errors)
    });
   
}
export const loginUser=async(data,callback)=>{
  getAxiosInstanceApi().post('auth/login',data)
  .then(res=>{
  callback(true,res.data)
  }).catch(err=>{
    console.log(err);
    callback(false,err.response.data.errors)
  });
 
}