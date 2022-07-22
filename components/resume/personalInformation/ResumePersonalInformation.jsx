import { ResumePersonalInformationItem, ResumeCardTitle } from "../..";
import { Fragment, useState } from "react";
import { states } from "./data";
import { Formik } from "formik";
import { postData } from "../../../api/api-resume";
import { toastful } from "react-toastful";
import { FailureToast, SuccessToast } from "../../../utils/toastFul";

const ResumePersonalInformation = ({setResetResume,information:{email,state,phone,address,isMarried,isMan,yearOfBirth,jobTitle,aboutMe}}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div
      className={`border border-r-4 border-gray-300 ${
        isEdit ? "bg-[#F5FBFE]" : "bg-white"
      }`}
    >
      <ResumeCardTitle title={"🧑 اطلاعات فردی"} />

      {!isEdit && (
        <div className="relative p-5 grid grid-cols-1 sm:grid-cols-2 space-y-4 hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer">
          <div
            onClick={() => setIsEdit(true)}
            className="absolute text-blue-400 text-lg top-2 left-2 resume-card-edit"
          >
            ویرایش 🖊️
          </div>
          <ResumePersonalInformationItem
            name={"آدرس ایمیل "}
            value={email}
          />
          <ResumePersonalInformationItem
            name={"  استان "}
            value={state}
          />
          <ResumePersonalInformationItem
            name={"  موبایل "}
            value={phone}
          />
          <ResumePersonalInformationItem
            name={"آدرس   "}
            value={address}
          />
          <ResumePersonalInformationItem
            name={"تاهل   "}
            value={isMarried?'متاهل':'مجرد'}
          />
          <ResumePersonalInformationItem
            name={"سال تولد   "}
            value={yearOfBirth}
          />
          <ResumePersonalInformationItem
            name={"  جنسیت "}
            value={isMan?"مرد":'زن'}
          />
        </div>
      )}
      {isEdit && (
        <Formik
          initialValues={{
            phone,
            state,
            address,
            yearOfBirth,
            isMan:isMan?.toString(),
            isMarried:isMarried?.toString(),
            aboutMe,
            jobTitle,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.phone) errors.phone = "Required";
            if (!values.state) errors.state = "Required";
            if (!values.yearOfBirth) errors.yearOfBirth = "Required";
            if (!values.isMan) errors.isMan = "Required";
            if (!values.isMarried) errors.isMarried = "Required";
            if (!values.jobTitle) errors.jobTitle = "Required";

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            postData(
              `resume/update-personal-information`,
              {
                ...values,
                userId: localStorage.getItem("userId"),
                state: Number(values.state),
                yearOfBirth: Number(values.yearOfBirth),
                isMan: values.isMan == "true" ? true : false,
                isMarried: values.isMarried == "true" ? true : false,
              },
              (isOk, res) => {
                setIsEdit(false)
                setResetResume(prev=>!prev);
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
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className="relative p-5 grid grid-cols-1 sm:grid-cols-2  hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer items-center"
            >
              <input
                type="text"
                placeholder="موبایل"
                className={`${
                  errors.phone && touched.phone ? "border-red-500" : ""
                } p-2 w-full outline-0 border mb-2`}
                name="phone"
                onChange={handleChange}
                value={values.phone}
              />
              <input
                type="text"
                placeholder="عنوان شغلی"
                className={`${
                  errors.jobTitle && touched.jobTitle ? "border-red-500" : ""
                } p-2 w-full outline-0 border mb-2`}
                name="jobTitle"
                onChange={handleChange}
                value={values.jobTitle}
              />

              <select
                className="outline-0 border border-b-4 border-b-gray-300 py-1  mb-2"
                placeholder="استان"
                value={values.state}
                name="state"
                onChange={handleChange}
              >
                {states.map((state) => (
                  <option value={state.value} key={state.value}>
                    {state.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="آدرس (اختیاری) "
                className="p-2 w-full outline-0 border mb-2"
                value={values.address}
                name="address"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="سال تولد "
                className={`${
                  errors.yearOfBirth && touched.yearOfBirth
                    ? "border-red-500"
                    : ""
                } p-2 w-full outline-0 border mb-2`}
                value={values.yearOfBirth}
                name="yearOfBirth"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="درباره من   "
                className={` p-2 w-full outline-0 border mb-2`}
                value={values.aboutMe}
                name="aboutMe"
                onChange={handleChange}
              />
              <div className="flex items-center ">
                <div className="flex items-center ml-3">
                  <label htmlFor="single" className="ml-2">
                    مجرد
                  </label>
                  <input
                    type="radio"
                    id="single"
                    value={'false'}
                    checked={values.isMarried=='false'}
                    name="isMarried"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="in-rel" className="ml-2">
                    متاهل
                  </label>
                  <input
                    type="radio"
                    id="in-rel"
                    value={'true'}
                    checked={values.isMarried=='true'}
                    name="isMarried"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center ">
                <div className="flex items-center ml-3">
                  <label htmlFor="woman" className="ml-2">
                    زن
                  </label>
                  <input
                    type="radio"
                    id="woman"
                    value={'false'}
                    checked={values.isMan=='false'}
                    name="isMan"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="man" className="ml-2">
                    مرد
                  </label>
                  <input
                    type="radio"
                    id="man"
                    value={'true'}
                    checked={values.isMan=='true'}
                    name="isMan"
                    onChange={handleChange}
                  />
                </div>
              </div>
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

export default ResumePersonalInformation;
