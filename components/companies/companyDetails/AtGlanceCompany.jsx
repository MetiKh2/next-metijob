import Image from "next/image";
import { companyBanner, companyWorkers } from "../../../constants";
import {CompanyDetailsImage,WorkerItem} from '../../'

const AtGlanceCompany = ({
  workers: {
    worker1_Avatar,
    worker1_Name,
    worker1_Description,
    worker1_Level,
    worker2_Avatar,
    worker2_Name,
    worker2_Description,
    worker2_Level,
  },
  banner: {
    firstBannerImage,
    firstBannerDescription,
    secondBannerImage,
    secondBannerDescription,
  },
 
  introduced
}) => {
  return <section className="py-5">
        <div className='flex lg:flex-row flex-col px-5 mb-6'>
            <div className='lg:max-w-sm bg-white border lg:ml-4 rounded-md p-4 leading-7 opacity-75'>
            <p dangerouslySetInnerHTML={{ __html: introduced }}></p>
            </div>
           <CompanyDetailsImage description={firstBannerDescription} image={`${companyBanner}${firstBannerImage}`}/>
        </div>
        <div className='flex lg:flex-row flex-col px-5'>
            <div className='lg:max-w-lg bg-white border lg:ml-4 rounded-md p-4 leading-7 opacity-75'>
                <WorkerItem description={worker2_Description} image={`${companyWorkers}${worker2_Avatar}`} level={worker2_Level} name={worker2_Name}/>
                <WorkerItem description={worker1_Description} image={`${companyWorkers}${worker1_Avatar}`} level={worker1_Level} name={worker1_Name}/>
            </div>
           <CompanyDetailsImage description={secondBannerDescription} image={`${companyBanner}${secondBannerImage}`}/>
        </div>
  </section>;
};

export default AtGlanceCompany;
