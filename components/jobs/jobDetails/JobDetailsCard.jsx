import { ResumePersonalInformationItem } from "../../";
import { numberWithCommas } from "../../../utils/numbers";
const JobDetailsCard = ({
  job: {
    title,
    needSkills,
    jobCategories,
    contractsCategories,
    jobDescription,
    location,
    salary,
    minimumWorkExperience,
    isMan,
    militaryStatus,
    jobCompanyProperties:{
        introduced
    }
},
}) => {
  return (
    <div className="bg-white p-3 border">
      <div className="flex items-center justify-between border-b pb-3">
        <p>{title}</p>
        <button className="border p-1.5 ">نشان کردن</button>
      </div>
      <div className="py-5 grid sm:grid-cols-2 space-y-3 border-b">
        <ResumePersonalInformationItem
          name={"دسته بندی شغلی"}
          value={jobCategories}
        />
        <ResumePersonalInformationItem name={"مکان"} value={location} />
        <ResumePersonalInformationItem
          name={"حداقل سابقه کار"}
          value={minimumWorkExperience}
        />
        <ResumePersonalInformationItem
          name={"نوع همکاری"}
          value={contractsCategories}
        />
        <ResumePersonalInformationItem
          name={"حداقل حقوق"}
          value={numberWithCommas(salary)}
        />
      </div>
      <div className="py-3 border-b">
        <h3 className="text-lg font-bold text-stone-700">شرح موقعیت شغلی : </h3>
        <p dangerouslySetInnerHTML={{ __html: jobDescription }}></p>
      </div>
      <div className="py-3 border-b">
        <h3 className="text-lg font-bold text-stone-700">معرفی شرکت : </h3>
        <p className="mt-3 text-sm opacity-70 leading-10">{introduced}</p>
      </div>
      <div className="py-5 grid sm:grid-cols-2 space-y-3 border-b">
        <ResumePersonalInformationItem
          name={" مهارت‌های مورد نیاز"}
          value={needSkills}
        />
        <ResumePersonalInformationItem
          name={"جنسیت  "}
          value={isMan==true&&'مرد'||isMan==false&&'زن'||isMan==null&&'اهمیت ندارد'}
        />
        <ResumePersonalInformationItem
          name={"  سربازی "}
          value={militaryStatus?militaryStatus:'اهمیت ندارد'}
        />
      </div>
    </div>
  );
};

export default JobDetailsCard;
