import Image from "next/image";
import { baseUrl } from "../../api/api";
import {numberWithCommas} from '../../utils/numbers'
const JobFilterResultItem = ({ job: { title,isHot, company,location,contractsCategories,salary } }) => {
  return (
    <div className={` flex justify-center sm:justify-between cursor-pointer border-b pb-3 flex-wrap my-3 ${isHot&&' border-r-red-600 border-r-4'}`}>
      <div className="flex">
       <div>
       <Image
          src={`${baseUrl}/Companies/thumb/${company.logo}`}
          width={100}
          height={100}
        />
       </div>
        <div className="mr-6 space-y-2 text-sm">
          <h2 className={`${isHot?'text-red-700 hover:text-red-800':'text-blue-400 hover:text-blue-500'}  font-bold text-lg mt-1`}>
            {title} {isHot&&<span className="bg-red-700 font-bold text-white text-xs p-1 inline-block">استخدام فوری</span>}
          </h2>
          <p>🏠{company.name}</p>
          <p>🛰️ {location}</p>
          <p>📜 {contractsCategories}</p>
          <p>💰 {numberWithCommas(salary)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button
          className=" text-white py-2 px-3 font-semibold border border-black bg-green-500
        active:bg-green-600 active:border-2 hover:bg-green-400"
        >
          ارسال رزومه
        </button>
        <button className="border p-2">نشان کردن</button>
      </div>
    </div>
  );
};

export default JobFilterResultItem;
