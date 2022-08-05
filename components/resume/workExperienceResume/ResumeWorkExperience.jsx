import { Field, Formik } from "formik";
import { toastful } from 'react-toastful';
import { useAuth } from "../../../context/AuthContext";
import { postData } from './../../../api/api-resume';

const ResumeWorkExperience = ({
  jobTitle,
  companyName,
  startDate,
  endDate,
  setIsEdit,
  id,
  isEdit,
  isBusy,
  description,
  entityId,
  setResetResume,
  handleDelete
}) => {
  const {user,token}=useAuth()
  return (
    <div className="relative p-2  flex flex-wrap space-y-4 hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer space-x-2">
      {!isEdit && (
        <>
          <div
            onClick={() => setIsEdit(id, true)}
            className="absolute text-blue-400 text-lg top-2 left-2 resume-card-edit"
          >
            ویرایش 🖊️
          </div>
          <div
              onClick={() => handleDelete(entityId)}
              className="absolute text-blue-400 text-lg top-8 left-0 resume-card-edit"
            >
              حذف ❌
            </div>
          <div className="flex flex-col text-sm">
            <p className="font-semibold">{jobTitle}</p>
            <div className="flex opacity-70">
              {" "}
              <p>{companyName} ---- </p>
              <span>
                {" "}
                {startDate} تا {endDate}{" "}
              </span>
            </div>
          </div>
        </>
      )}
      {isEdit && (
        <Formik
          initialValues={{
            startDate,
            endDate,
            jobTitle,
            companyName,
            isBusy,
            description,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.jobTitle) errors.jobTitle = "Required";
            if (!values.startDate) errors.startDate = "Required";
            if (!values.companyName) errors.companyName = "Required";
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            postData(
              `Resume/update-work-experience`,
              {
                userId: user.IdentityId,
                dto:[{
                    ...values,
                    entityId
                }]
              },token,
              (isOk, res) => {
                setIsEdit(id,false)
                setResetResume(prev=>!prev)
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
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="relative p-5 grid grid-cols-1 sm:grid-cols-2 w-full hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer items-center"
            >
              <Field
                className={`${
                  errors.jobTitle && touched.jobTitle ? "border-red-500" : ""
                } p-2 w-full outline-0 border mb-2`}
                placeholder="عنوان شغلی (سمت)"
                type="text"
                name="jobTitle"
              />
              <Field
                className={`${
                  errors.companyName && touched.companyName ? "border-red-500" : ""
                } p-2 w-full outline-0 border mb-2`}
                placeholder="عنوان شرکت"
                type="text"
                name="companyName"
              />
              <Field
                className={`${
                    errors.startDate && touched.startDate ? "border-red-500" : ""
                  } p-2 w-full outline-0 border mb-2`}
                placeholder=" سال شروع"
                type="number"
                name="startDate"
              />
              <Field
                className={`  p-2 w-full outline-0 border mb-2`}
                placeholder="سال پایان  "
                type="number"
                name="endDate"
              />
            <div className="flex items-center">
            <Field
              className={` ml-2 outline-0 border mb-2`}
              type="checkbox"
              name="isBusy"
            />
           <p> هنوز مشغولم</p>
            </div>
              <textarea
                className={`
                 p-2 w-full outline-0 border mb-2`}
                placeholder="توضیحات (اختیاری)"
                type="textarea"
                name="description"
                onChange={handleChange}
              />
              <div>

              </div>
              <button
                onClick={() => setIsEdit(id, false)}
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

export default ResumeWorkExperience;
