import { useState } from "react";
import { ResumeCardTitle } from "../../";
import { Formik } from "formik";
import { toastful } from "react-toastful";
import { postData } from "./../../../api/api-resume";
import { states } from "./../personalInformation/data";
import { contractCategories, jobCategories, seniorityLevel } from "./data";

const ResumeCareerJob = ({ jobCareer, setResetResume }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={`border border-r-4 border-gray-300 ${
        isEdit ? "bg-[#F5FBFE]" : "bg-white"
      }`}
    >
      <ResumeCardTitle title={"⭐ ترجیحات شغلی"} />

      {!isEdit && (
        <div className="relative p-5 grid grid-cols-1 sm:grid-cols-2 space-y-4 hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer">
          <div
            onClick={() => setIsEdit(true)}
            className="absolute text-blue-400 text-lg top-2 left-2 resume-card-edit"
          >
            ویرایش 🖊️
          </div>
          <div>
            <h3 className="font-bold text-lg">استان های مورد نظر</h3>
            <div className="flex mt-2">
              {jobCareer?.iranStatesCareerJob?.split("/")?.map((state, i) => (
                <p
                  key={i}
                  className="mx-2 bg-gray-200 p-2 border border-gray-400"
                >
                  {state}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">دسته بندی کاری</h3>
            <div className="flex mt-2">
              {jobCareer?.jobCategories?.split("/")?.map((category, i) => (
                <p
                  key={i}
                  className="mx-2 bg-gray-200 p-2 border border-gray-400"
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">سطح ارشدیت در زمینه فعالیت </h3>
            <div className="flex mt-2">
              {jobCareer?.seniorityLevels?.split("/")?.map((level, i) => (
                <p
                  key={i}
                  className="mx-2 bg-gray-200 p-2 border border-gray-400"
                >
                  {level}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">نوع قراردادهای قابل قبول </h3>
            <div className="flex mt-2">
              {jobCareer?.contractsCategories
                ?.split("/")
                ?.map((contract, i) => (
                  <p
                    key={i}
                    className="mx-2 bg-gray-200 p-2 border border-gray-400"
                  >
                    {contract}
                  </p>
                ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">حداقل حقوق درخواستی </h3>
            <div className="flex mt-2">{jobCareer?.minPrice}</div>
          </div>
        </div>
      )}
      {isEdit && (
        <Formik
          initialValues={{
            iranStatesCareerJob: jobCareer?.iranStatesCareerJob
              ? jobCareer?.iranStatesCareerJob?.split("/")
              : [],
            jobCategories: jobCareer?.jobCategories
              ? jobCareer?.jobCategories?.split("/")
              : [],
            seniorityLevels: jobCareer?.seniorityLevels
              ? jobCareer?.seniorityLevels?.split("/")
              : [],
            contractsCategories: jobCareer?.contractsCategories
              ? jobCareer?.contractsCategories?.split("/")
              : [],
            minPrice: jobCareer?.minPrice,
          }}
          onSubmit={(values, { setSubmitting }) => {
            postData(
              `resume/update-career-job`,
              {
                minPrice: values?.minPrice?.toString(),
                iranStatesCareerJob: values?.iranStatesCareerJob?.join("/"),
                jobCategories: values?.jobCategories?.join("/"),
                seniorityLevels: values?.seniorityLevels?.join("/"),
                contractsCategories: values?.contractsCategories?.join("/"),
                userId: localStorage.getItem("userId"),
              },
              (isOk, res) => {
                setResetResume((prev) => !prev);
                setIsEdit(false);
                if (!isOk)
                  return toastful("دوباره تلاش کنید ", {
                    duration: 2500,
                    kind: "failure",
                    className: "bg-white p-3 border-4 border-red-400",
                  });
                else
                  return toastful("اطلاعات با موفقیت ثبت شد", {
                    duration: 2500,
                    kind: "success",
                    className: "bg-white p-3 border-4 border-green-400",
                  });
              }
            );
            setSubmitting(false);
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="relative p-5 grid grid-cols-1 sm:grid-cols-2  hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer items-center"
            >
              <div>
                <h2>استان</h2>
                <select
                  multiple
                  className=" outline-0 border border-b-4 border-b-gray-300 py-1  mb-2"
                  placeholder="استان"
                  value={values.iranStatesCareerJob}
                  name="iranStatesCareerJob"
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <option value={state.name} key={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h2>دسته بندی کاری</h2>
                <select
                  multiple
                  className=" outline-0 border border-b-4 border-b-gray-300 py-1  mb-2"
                  placeholder="استان"
                  value={values.jobCategories}
                  name="jobCategories"
                  onChange={handleChange}
                >
                  {jobCategories.map((state) => (
                    <option value={state.name} key={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h2>سطح ارشدیت در زمینه فعالیت</h2>
                <div className="flex items-center ">
                  {seniorityLevel.map((level) => (
                    <div key={level.id} className="flex items-center ml-2 my-3">
                      <label htmlFor={level.name} className="ml-2">
                        {level.name}
                      </label>
                      <input
                        checked={values?.seniorityLevels?.includes(
                          level.name
                        )}
                        type="checkbox"
                        id={level.name}
                        value={level.name}
                        name="seniorityLevels"
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2>نوع قرارداد ها </h2>
                <div className="flex items-center ">
                  {contractCategories.map((level) => (
                    <div key={level.id} className="flex items-center ml-2 my-3">
                      <label htmlFor={level.name} className="ml-2">
                        {level.name}
                      </label>
                      <input
                         checked={values?.contractsCategories?.includes(
                          level.name
                        )}
                        type="checkbox"
                        id={level.name}
                        value={level.name}
                        name="contractsCategories"
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <input
                type="number"
                placeholder="حداقل حقوق درخواستی "
                className="p-2 w-full outline-0 border mb-2"
                value={values.minPrice}
                name="minPrice"
                onChange={handleChange}
              />
              <div></div>
              <button
                onClick={() => setIsEdit(false)}
                type="button"
                className="bg-gray-200 w-24 py-2 mt-5"
              >
                انصراف
              </button>
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-green-500 w-24 py-2 text-white mt-5"
              >
                ذخیره
              </button>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ResumeCareerJob;
