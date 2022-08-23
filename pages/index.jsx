import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { getJobs } from "../api/api-jobs";
import { Banner, Header, JobsSearch, HomeCompanyCard, ResumeCardTitle, HomeJobCard } from "../components";
import Layout from "../components/layout";
import { getCompanies } from "./../api/api-companies";
import {useJobs} from '../context/JobsContext'
const Home = ({ hotCompanies,hotJobs,lastJobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {jobsCount,companiesCount}=useJobs();
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchTerm);
  };
  return (
    <Layout title={"MetiJob"}>
      <Banner image={"url('./hero4.jpg')"}>
        <div className="flex flex-col items-center max-w-6xl m-auto px-2">
          <div className="bg-white bg-opacity-95 p-4">
            <p className="text-2xl font-bold">
              {jobsCount} آگهی استخدام فعال در {companiesCount} شرکت ایرانی
            </p>
            <p className="text-sm text-center mt-2">
              متی جاب: سامانه کاریابی آنلاین با بیشترین تعداد آگهی استخدام در
              ایران
            </p>
          </div>
          <div className="w-full">
            <JobsSearch
              bg={{ background: "rgba(0,0,0,0.5)" }}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleSearch={handleSearch}
            />
          </div>
          <p className="mt-8 text-xs rounded-2xl bg-white p-2 bg-opacity-90">
            آخرین رزومه ارسالی به شرکت شرکت مهندسی نرم افزار هلو
          </p>
        </div>
      </Banner>
      <div className="bg-teal-500 p-3 text-center text-white">
        <span className="border-b border-dashed border-b-2">
          <Link href={"/jobs"}>مشاهده همه آگهی های استخدام</Link>
        </span>
      </div>
      <div className="flex justify-evenly my-5 max-w-6xl m-auto px-3">
        {hotCompanies?.map((company) => (
          <HomeCompanyCard
          key={company?.logo}
            link={""}
            logo={company?.logo}
            name={company?.name}
          />
        ))}
      </div>
      <section className="px-3 max-w-6xl m-auto flex flex-col md:flex-row my-10">
        <section style={{ flex: 2 }}>
          <div>
            <div className="border-2">
            <ResumeCardTitle title={'آخرین استخدام های فوری'}/>
            </div>
            <div className="border grid grid-cols-1 md:grid-cols-2 gap-1.5 my-2">
              {hotJobs?.jobs?.map(job=>(
                <HomeJobCard companyName={job?.company?.name}
                date={job?.lastUpdate}
                location={job?.location}
                title={job?.title}
                id={job?.id}/>
              ))}
            </div>
          </div>
        </section>
        <section style={{ flex: 1 }} className="mr-3">
        <div>
            <div className="border-2">
            <ResumeCardTitle title={'آخرین استخدام ها  '}/>
            </div>
            <div className="border my-2">
              {lastJobs?.jobs?.map(job=>(
                <HomeJobCard companyName={job?.company?.name}
                date={job?.lastUpdate}
                location={job?.location}
                title={job?.title}
                id={job?.id}/>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className="bg-[#F5F5F5] border">
        <div className=" max-w-6xl m-auto py-5 grid md:grid-cols-3 grid-cols-1 gap-5 px-3">
            <div>
              <h1 className='text-2xl font-bold'>آشنایی با شرکت‌ها</h1>
              <p className='my-2'>با معتبرترین شرکت‌های کشور آشنا شوید و محل کار آینده خود را هوشمندانه انتخاب کنید.</p>
              <a className='text-blue-500 text-sm' href="/companies">مشاهده آشنایی با شرکت‌ها</a>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>    کشف فرصت‌های شغلی</h1>
              <p className='my-2' >با جستجو در آگهی‌های استخدام، شغلی را انتخاب کنید که با شرایط ایده‌آل شما همخوانی دارد.</p>
              <a className='text-blue-500 text-sm' href="/jobs">جستجو در فرصت‌های شغلی      </a>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>آگاهی از مشاغل جدید    </h1>
              <p className='my-2'>با کمک ایمیل‌های اطلاع رسانی، فرصت‌های شغلی مناسب خود را از طریق ایمیل دریافت کنید   .</p>
              <a className='text-blue-500 text-sm' href="/">ایجاد ایمیل اطلاع‌رسانی</a>
            </div>
        </div>
      </section>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const { companies } = await getCompanies("companies?isHot=true");
  const hotJobs  = await getJobs("jobs?isHot=true&takeEntity=34");
  const lastJobs  = await getJobs("jobs?takeEntity=45");
  return { props: { hotCompanies: companies ,hotJobs,lastJobs} };
}

export default Home;
