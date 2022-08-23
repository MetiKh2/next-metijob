import Image from "next/image";
import { baseUrl } from "./../../api/api";
import { useState } from 'react';
import { companyBanner, companyLogo } from "../../constants";

const CompanyCardItem = ({ company: {category,location, name, logo, firstBannerImage } }) => {
  return (
    <article className="m-2 border shadow-xl">
      <div className="flex flex-col">
        <div className="relative">
          <div>
            <Image
              src={`${companyBanner}${firstBannerImage}`}
              width={"100%"}
              layout={"responsive"}
              height={30}
            />
          </div>
          <div className="absolute -bottom-10 right-2.5 shat">
            <Image
              src={`${companyLogo}${logo}`}
              width={65}
              height={65}
            />
          </div>
        </div>
        <div className="mt-10 p-3">
          <h2
            className={`${"text-blue-400 hover:text-blue-500"}  font-bold text-lg mt-1`}
          >
            {name}
          </h2>
          <div className="flex flex-wrap mt-2 mr-3 text-sm space-x-1.5  text-white">
            <p className="bg-gray-400 p-1 rounded-lg mb-1.5 ml-1.5">{location}</p>
            <p className="bg-gray-400 p-1 rounded-lg mb-1.5 ml-1.5">{category}</p>
            <p className="bg-teal-400 p-1 rounded-lg mb-1.5 ml-1.5">در حال استخدام</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CompanyCardItem;
