import { useEffect, useState } from 'react';
import { getApplied } from '../../api/api-jobs';
import { AppliedCard, JobsHeaderNav } from '../../components';
import { useAuth } from '../../context/AuthContext';
import { getIdentityId, getToken } from '../../utils/auth';
import Layout from './../../components/layout';
import { useRouter } from 'next/router';
const Applied = () => {


    
  return (
    <Layout title={'درخواست های من'}>
         <JobsHeaderNav active={'applied'} />
         <section className='py-8 bg-[#f5f5f5]'>
            <div className='max-w-6xl m-auto px-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg '>درخواست های من</h1>
                <div>
                    <label htmlFor="from-day">ارسال شده در : </label>
                    <select >
                        <option value="1">1 روز پیش</option>
                        <option value="7">7 روز پیش</option>
                        <option value="30">30 روز پیش</option>
                        <option value="all">همه</option>
                    </select>
                </div>
            </div>
            <AppliedCard/>
            </div>
         </section>
    </Layout>
    )
}

export default Applied