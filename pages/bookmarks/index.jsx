import React from 'react'
import { JobsHeaderNav } from '../../components';
import Layout from './../../components/layout/index';
import Link from "next/link";
import Image from "next/image";
import {companyLogo} from "../../constants";
import {getBookMarks, toggleBookMark} from "../../api/api-jobs";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getIdentityId, getToken} from "../../utils/auth";
import {useAuth} from "../../context/AuthContext";

const BookMarks = () => {
    const[jobs,setJobs] = useState();
   const[reLoad,setReload]= useState(false)
    const {user,token}=useAuth()
    const router=useRouter()
    useEffect(() => {
        const userId=getIdentityId()
        const token=getToken()
        if(!userId||!token) {
            router.push('/signin');
            return;
        }
        getBookMarks(userId,token,(isOk,res)=>{
            if(isOk){
                setJobs(res)
                console.log(res)
            }else{
                console.log(res)
            }
        })
    }, [reLoad])
    const handleToggleBookMark=(id)=>{
        toggleBookMark(user?.IdentityId,id,token,(isOk,res)=>{
           setReload(prev=>!prev)
       })
    }
  return (
    <Layout title={'نشان شده ها'}>
        <JobsHeaderNav active='bookmarks'/>
        <div className={'p-4 border-r-4 border bg-white bg-[#f5f5f5] max-w-6xl m-auto'}>
            {jobs?.map((job,i)=>(
                <div key={`${job?.id}-${i}`} className={` flex justify-center sm:justify-between cursor-pointer border-b pb-3 flex-wrap my-3  `}>
                    <Link href={'/jobs/'+job?.id}>
                        <div className="flex">
                            <div>
                                <Image
                                    src={`${companyLogo}${job?.logo}`}
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className="mr-6 space-y-2 text-sm">
                                <h2 className={`   font-bold text-lg mt-1`}>
                                    {job?.title}
                                </h2>
                                <p>🏠{job?.companyName}</p>
                                <p>🛰️ {job?.location}</p>
                                <p>📜 {job?.contract}</p>
                            </div>
                        </div>
                    </Link>
                    <div className="flex flex-col items-center justify-center">
                        <button
                            className=" text-white py-2 px-3 font-semibold border border-black bg-green-500
        active:bg-green-600 active:border-2 hover:bg-green-400"
                        >
                            ارسال رزومه
                        </button>
                        <button onClick={()=>handleToggleBookMark(job?.id)} className="border p-2 bg-yellow-500 text-white">نشان شده</button>
                    </div>
                </div>
            ))}
        </div>
    </Layout>
  )
}

export default BookMarks