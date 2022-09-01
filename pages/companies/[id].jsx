import { useEffect, useState } from "react";
import { AtGlanceCompany,IntroductionCompany, JobsResult } from "../../components";
import Layout from "./../../components/layout/index";
import { getCompany } from "./../../api/api-companies";
import { useRouter } from "next/router";
import { companyBanner, companyLogo } from "../../constants";
import Image from "next/image";
import Link from "next/link";
 

const CompanyDetails = () => {
  const [activeTab, setActiveTab] = useState("atGlance");
  const [data, setData] = useState({});
  const router = useRouter();
  useEffect(() => {
    console.log(router?.query?.id);
    if (Object.keys(router.query).length > 0) {
      getCompany(router?.query?.id, (isOk, res) => {
        if (isOk) {
          setData(res);
        } else console.log(res);
      });
    }
  }, [router?.query]);
  console.log(data);
  return (
    <Layout title={"شرکت"}>
      <div className="my-4 relative ">
        <Image
          src={`${companyBanner}${data?.fifthBannerImage}`}
          width={500}
          layout="responsive"
          height={100}
        />
        <div className="absolute -bottom-7 right-44" style={{ zIndex: 3 }}>
          <Image src={`${companyLogo}${data?.logo}`} width={100} height={100} />
        </div>
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.2)", zIndex: 2 }}
          className="absolute right-0 -bottom-7 left-0 top-0"
        ></div>
      </div>
      <nav dir="rtl" className="border-b bg-white px-5  mt-7">
        <div className="text-lg max-w-6xl m-auto flex p-3">
          <div
            onClick={() => setActiveTab("atGlance")}
            className={`${
              activeTab == "atGlance" &&
              "text-blue-600 border-b pb-1 border-b-blue-600 text-lg"
            }  px-2 opacity-70 hover:text-blue-700 cursor-pointer`}
          >
            در یک نگاه
          </div>
          <div
            onClick={() => setActiveTab("introduction")}
            className={`${
              activeTab == "introduction" &&
              "text-blue-600 border-b pb-1 border-b-blue-600 text-lg"
            }   px-2 opacity-70 hover:text-blue-700 cursor-pointer`}
          >
            معرفی
          </div>
          <div
            onClick={() => setActiveTab("jobs")}
            className={`${
              activeTab == "jobs" &&
              "text-blue-600 border-b pb-1 border-b-blue-600 text-lg"
            }   px-2 opacity-70 hover:text-blue-700 cursor-pointer`}
          >
            فرصت های شغلی
          </div>
        </div>
      </nav>
      <section className="bg-[#F5F5F5]">
      <section className="max-w-6xl m-auto " dir="rtl">
        {activeTab=='atGlance'&&<AtGlanceCompany
          workers={{
            worker1_Avatar: data?.worker1_Avatar,
            worker1_Name: data?.worker1_Name,
            worker1_Description: data?.worker1_Description,
            worker1_Level: data?.worker1_Level,
            worker2_Avatar: data?.worker2_Avatar,
            worker2_Name: data?.worker2_Name,
            worker2_Description: data?.worker2_Description,
            worker2_Level: data?.worker2_Level,
          }}
          banner={{
            firstBannerImage:data?.firstBannerImage,
    firstBannerDescription:data?.firstBannerDescription,
    secondBannerImage:data?.secondBannerImage,
    secondBannerDescription:data?.secondBannerDescription,
          }}
          location={data?.location}
          introduced={data?.introduced}
        />}
        {activeTab=='introduction'&&<IntroductionCompany
          banner={{
            thirdBannerImage:data?.thirdBannerImage,
            thirdBannerDescription:data?.thirdBannerDescription,
    fourthBannerImage:data?.fourthBannerImage,
    fourthBannerDescription:data?.fourthBannerDescription,
          }}
          location={data?.location}
          introduced={data?.introduced}
          workCulture={data?.workCulture}
          jobBenefits={data?.jobBenefits}/>}
        {activeTab=='jobs'&&(
          <section className="p-5">
            <div className="bg-white border text-sm rounded-md p-4 leading-7 opacity-75">
              {data?.introduced}
            </div>
            <div className="my-5">
              <h1 className="font-thin text-gray-600 text-lg">فرصت های شغلی</h1>
              <div className={'p-4 border-r-4 border bg-white'}>
            {data?.jobs?.map(job=>(
                <div key={job?.id} className={` flex justify-center sm:justify-between cursor-pointer border-b pb-3 flex-wrap my-3  `}>
                    <Link href={'/jobs/'+job?.id}>
                        <div className="flex">
                            <div>
                                <Image
                                    src={`${companyLogo}${data?.logo}`}
                                    width={70}
                                    height={70}
                                />
                            </div>
                            <div className="mr-6 space-y-2 text-sm">
                                <h2 className={`   font-bold text-lg mt-1`}>
                                    {job?.title}
                                </h2>
                                <p>🏠{data?.name}</p>
                                <p>{job?.location}</p>
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
            </div>
          </section>
        )}
      </section>
      </section>
    </Layout>
  );
};

export default CompanyDetails;
