import  { useContext, createContext, useState, useEffect } from "react";
import {getJobsCount} from '../api/api-jobs'
const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
    const [jobsCount, setJobsCount] = useState(0)
    const [companiesCount, setCompaniesCount] = useState(0)
    useEffect(() => {
        getJobsCount((isOk,res)=>{
            if(isOk){
                setCompaniesCount(res.companiesCount)
                setJobsCount(res.jobsCount)
            }
            else console.log(res)
        })
    }, [])
    
    return (
    <JobsContext.Provider value={{jobsCount,companiesCount}}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);