import Layout from "./../../components/layout/index";
import { getJobs } from "./../../api/api-jobs";
import {JobDetailsCard,JobDetailsBanner, JobDetailsSendResume,JobResultItem} from "../../components";
import { useRouter } from 'next/router';
 
const JobDetail = ({ job,jobsForCompany, error }) => {
  const router=useRouter();
  if (!job && !error) return "loading...";
  if(error) return ''
  console.log(job)
  return (
    <Layout title={job?.title}>
      <section className="bg-[#f5f5f5] py-5">
        <section className="max-w-6xl m-auto flex flex-col md:flex-row">
          <section style={{flex:2}}>
          <JobDetailsBanner logo={job?.jobCompanyProperties?.logo}
            category={job?.jobCompanyProperties?.category}
            companyName={job?.jobCompanyProperties?.name}
            website={job?.jobCompanyProperties?.webSite}/>
            <JobDetailsCard job={job}/>
           {jobsForCompany&& <div className="mt-4  ">
          <h1 className="text-xl opacity-70 p-4">بیشتر از این شرکت</h1>
          <div className="bg-white p-3 border-2">
          {jobsForCompany?.jobs?.map((job,i)=>(
              <JobResultItem job={job} key={i} showSend={false}/>
            ))}
          </div>
            </div>}
          </section>
          <section  style={{flex:1}} className='mr-3 mt-4 px-2'>
             <JobDetailsSendResume jobId={router?.query.id}/>
          </section>
           
        </section>
      </section>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  const id = query.id;
  try {
    const job = await getJobs(`jobs/${id}`);
    console.log(job);
    const jobsForCompany = await getJobs(`jobs?companyId=${job?.companyId}`);
    return {
      props: {
        job,
        jobsForCompany,
      },
    };
  } catch (error) {
    return {
      props: {
        job: null,
        error: error.message,
        jobsForCompany:null,
      },
    };
  }
}
export default JobDetail;
