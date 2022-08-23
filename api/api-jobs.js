import { getAxiosInstanceApi } from './api';

export const getJobs=async(route)=>{
  const res= await getAxiosInstanceApi().get(route);
  return res.data; 
}
export const sendResume=async(formData,callback)=>{
  await getAxiosInstanceApi().post('jobs/send-resume',formData)
  .then(res=>{
   callback(true,res?.data)
  })
  .catch(err=>{
   callback(false,err)
  });
   
 }
 export const getJobsCount=async(callback)=>{
  await getAxiosInstanceApi().get('Jobs/job-companies/count')
  .then(res=>{
   callback(true,res?.data)
  })
  .catch(err=>{
   callback(false,err)
  });
   
 }

export const getApplied=async(userId,type,token,callback)=>{
    await getAxiosInstanceApi().get(`Jobs/applied/${userId}?type=${type}`,{headers:{'Authorization':'Bearer '+token}})
        .then(res=>{
            callback(true,res?.data)
        })
        .catch(err=>{
            callback(false,err)
        });

}
export const getBookMarks=async(userId,token,callback)=>{
    await getAxiosInstanceApi().get(`Jobs/bookmarks/${userId}`,{headers:{'Authorization':'Bearer '+token}})
        .then(res=>{
            callback(true,res?.data)
        })
        .catch(err=>{
            callback(false,err)
        });

}
export const toggleBookMark=async(userId,jobId,token,callback)=>{
    await getAxiosInstanceApi().post(`Jobs/bookmark/${userId}/${jobId}`,{},{headers:{'Authorization':'Bearer '+token}})
        .then(res=>{
            callback(true,res?.data)
        })
        .catch(err=>{
            callback(false,err)
        });

}
  
