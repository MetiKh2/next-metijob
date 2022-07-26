import { JobsFilterItem } from "../";
import { contractCategories, jobCategories, workExperience } from "../resume/careerJobResume/data";
import { useState } from "react";
import { states } from "../resume/personalInformation/data";
import Image from "next/image";
import Link from "next/link";
const JobsFilters = ({selectedWorkExperience,setSelectedWorkExperience,setMinSalary,minSalary,selectedState,setSelectedState,setSelectedContracts,selectedContracts}) => {
  const [jobCategoriesCount, setJobCategoriesCount] = useState(4);
  const [jobCategoriesMore, setJobCategoriesMore] = useState(false)
  const [statesCount, setStatesCount] = useState(4);
  const [statesMore, setStatesMore] = useState(false)
  return (
    <section className="lg:ml-9">
      <JobsFilterItem title={"📊 دسته بندی شغلی"}>
        <div>
          {jobCategories.slice(0,jobCategoriesCount).map((category) => {
            return (
              <div key={category.name} className="m-3 flex items-center">
                <input type="radio" name="category" id={category.name} />
                <label className="text-sm mr-2" htmlFor={category.name}>
                  {category.name}
                </label>
              </div>
            );
          })}
          <div className="text-blue-400 text-sm m-2 cursor-pointer">
            {jobCategoriesMore ? (
              <p
                onClick={() => {
                    setJobCategoriesMore(false);
                  setJobCategoriesCount(4);
                }}
              >
                نمایش کمتر -
              </p>
            ) : (
              <p
                onClick={() => {
                    setJobCategoriesMore(true);
                  setJobCategoriesCount(jobCategories.length);
                }}
              >
                نمایش بیشتر +
              </p>
            )}
          </div>
        </div>
      </JobsFilterItem>
      <JobsFilterItem title={"#️⃣ استان"}>
        <div>
          {states.slice(0,statesCount).map((state) => {
            return (
              <div key={state.name} className="m-3 flex items-center">
                <input checked={state.name==selectedState} onChange={e=>setSelectedState(state.name)} type="radio" name="states" id={state.name} />
                <label className="text-sm mr-2" htmlFor={state.name}>
                  {state.name}
                </label>
              </div>
            );
          })}
          <div className="text-blue-400 text-sm m-2 cursor-pointer">
            {statesMore ? (
              <p
                onClick={() => {
                    setStatesMore(false);
                    setStatesCount(4);
                }}
              >
                نمایش کمتر -
              </p>
            ) : (
              <p
                onClick={() => {
                    setStatesMore(true);
                    setStatesCount(states.length);
                }}
              >
                نمایش بیشتر +
              </p>
            )}
          </div>
        </div>
      </JobsFilterItem>
      <JobsFilterItem title={"✒️ نوع قرارداد"}>
        <div>
          {contractCategories.map((contract) => {
            return (
              <div key={contract.name} className="m-3 flex items-center">
                <input checked={contract.name==selectedContracts} onChange={e=>setSelectedContracts(contract.name)} type="radio" name="contract" id={contract.name} />
                <label className="text-sm mr-2" htmlFor={contract.name}>
                  {contract.name}
                </label>
              </div>
            );
          })}
        </div>
      </JobsFilterItem>
      <JobsFilterItem title={"🧪 سابقه کار"}>
        <div>
          {workExperience.map((experience) => {
            return (
              <div key={experience.name} className="m-3 flex items-center">
                <input checked={selectedWorkExperience==experience.value} onChange={e=>setSelectedWorkExperience(experience.value)} type="radio" name="experience" id={experience.name} />
                <label className="text-sm mr-2" htmlFor={experience.name}>
                  {experience.name}
                </label>
              </div>
            );
          })}
        </div>
      </JobsFilterItem>
      <JobsFilterItem title={"💰  حداقل حقوق  "}>
        <div>
              <div className="m-3 flex items-center">
                <input value={minSalary} onChange={e=>setMinSalary(e.target.value)} className="border p-2 border-2" type="number" />
              </div>
        </div>
      </JobsFilterItem>
     <Link className="mt-3" href={'/resume'}>
     <Image  src={'/cvbuilder.png'} width={250} height={200}/>
     </Link>
    </section>
  );
};

export default JobsFilters;
