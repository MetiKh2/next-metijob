import AppliedCardHeader from "./AppliedCardHeader"
import {useEffect, useState} from "react";
import {getIdentityId, getToken} from "../../utils/auth";
import {getApplied} from "../../api/api-jobs";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {companyLogo} from "../../constants";

const AppliedCard = () => {
    const [status, setStatus] = useState('All')
    const[jobs,setJobs] = useState();
    const router=useRouter()
    useEffect(() => {
        const userId=getIdentityId()
        const token=getToken()
        if(!userId||!token) {
            router.push('/signin');
            return;
        }
        getApplied(userId,status,token,(isOk,res)=>{
            if(isOk){
                setJobs(res)
                console.log(res)
            }else{
                console.log(res)
            }
        })
    }, [status])
  return (
    <section className='mt-5'>
        <div className='flex justify-evenly '>
            <AppliedCardHeader title={'All'} setStatus={setStatus} active={status=='All'}/>
            <AppliedCardHeader title={'Posted'} setStatus={setStatus} active={status=='Posted'}/>
            <AppliedCardHeader title={'Checked'} setStatus={setStatus} active={status=='Checked'} />
            <AppliedCardHeader title={'Interview'} setStatus={setStatus} active={status=='Interview'} />
            <AppliedCardHeader title={'Hire'} setStatus={setStatus} active={status=='Hire'} />
            <AppliedCardHeader title={'Other'}  setStatus={setStatus} active={status=='Other'} />
        </div>
        <div className={'p-4 border-r-4 border bg-white'}>
            {jobs?.map(job=>(
                <div key={job?.id} className={` flex justify-center sm:justify-between cursor-pointer border-b pb-3 flex-wrap my-3  `}>
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
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AppliedCard