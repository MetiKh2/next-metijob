import { getAxiosInstanceApi } from './api';

export const postData=(route,data,callback)=>{
    getAxiosInstanceApi().post(route,data)
    .then(res=>{
    callback(true,res.data)
    }).catch(err=>{
      callback(false,err.message)
    });
}
export const getResume=(route,callback)=>{
  getAxiosInstanceApi()
  .get(route)
  .then(res=>{
  callback(true,res.data)
  }).catch(err=>{
    callback(false,err.message)
  });
}

export const deleteData=(route,callback)=>{
  getAxiosInstanceApi()
  .delete(route)
  .then(res=>{
  callback(true,res.data)
  }).catch(err=>{
    callback(false,err.message)
  });
}

 