import { getAxiosInstanceApi } from './api';

export const postData=(route,data,token,callback)=>{
    getAxiosInstanceApi().post(route,data,{headers:{'Authorization':'Bearer '+token}})
    .then(res=>{
    callback(true,res.data)
    }).catch(err=>{
      callback(false,err.message)
    });
}
export const getResume=(route,token,callback)=>{
  getAxiosInstanceApi()
  .get(route,{headers:{'Authorization':'Bearer '+token}})
  .then(res=>{
  callback(true,res.data)
  }).catch(err=>{
    callback(false,err.message)
  });
}

export const deleteData=(route,token,callback)=>{
  getAxiosInstanceApi()
  .delete(route,{headers:{'Authorization':'Bearer '+token}})
  .then(res=>{
  callback(true,res.data)
  }).catch(err=>{
    callback(false,err.message)
  });
}

 