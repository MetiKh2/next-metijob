import Image from "next/image";
import { useState } from "react";
import { baseUrl } from "./../../api/api";
import {companyBanner, companyLogo} from '../../constants'
import { useRouter } from 'next/router';
const CompanyItem = ({
  index,
  rating,
  title,
  logo,
  category,
  jobsCount,
  banner,
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router=useRouter()
  return (
    <div className="p-3 border-b" dir="rtl">
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="border border-dashed rounded-full text-opacity-60 px-4 py-2 text-lg border-2 ">
            {index}
          </p>
          <div className={`mx-2 ${isOpen && "hidden"} `}>
            {logo && (
              <Image
              src={`${companyLogo}${logo}`}
                width={50}
                height={50}
              />
            )}
          </div>
          <h2 className="text-lg text-gray-600 mr-2">{title}</h2>
        </div>
        <div className="flex items-center">
          <p className="text-yellow-600 text-lg ml-4">{rating} ⭐</p>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? "🔼" : "🔽"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="p-3 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex items-center">
              {logo && (
                <Image
                  src={`${companyLogo}${logo}`}
                  width={100}
                  height={100}
                />
              )}
              <button onClick={()=>router.push(`/companies/${id}`)} className="bg-teal-500 text-sm font-bold px-1.5 h-8 text-white mr-4 hover:bg-teal-400 active:bg-teal-600 active:border-2 border-teal-700">
                مشاهده صفحه شرکت
              </button>
            </div>
            <div className="flex items-center m-5">
              <p className="opacity-75">{category} | </p>
              <p className="text-blue-400 text-sm mr-1">
                {" "}
                {jobsCount} شغل فعال{" "}
              </p>
            </div>
          </div>
          <div>
            {banner && (
              <Image
                src={`${companyBanner}${banner}`}
                layout="responsive"
                width={"100%"}
                height={35}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyItem;
