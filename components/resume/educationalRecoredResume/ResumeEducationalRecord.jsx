import { Field, Formik } from "formik";
import { toastful } from "react-toastful";
import { grades } from "./data";
import { postData } from './../../../api/api-resume';
import { useAuth } from "../../../context/AuthContext";
const ResumeEducationalRecord = ({
  major,
  startDate,
  endDate,
  isEdit,
  collegeName,
  setIsEdit,
  id,
  setResetResume,
  entityId,
  isBusy,
  description,
  grade,
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
            <p className="font-semibold">{major}</p>
            <div className="flex opacity-70">
              <p>{collegeName} ---- </p>
              <span>
                {startDate} تا {endDate }{" "}
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
            major,
            collegeName,
            isBusy,
            description,
            grade,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.major) errors.major = "Required";
            if (!values.collegeName) errors.collegeName = "Required";
            if (!values.startDate) errors.startDate = "Required";
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            postData(
              `Resume/update-educational-records`,
              {
                userId: user.IdentityId,
                dto: [
                  {
                    ...values,
                    grade:Number(values.grade),
                    entityId
                  },
                ],
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
          {({ values,errors, touched, handleChange, handleSubmit, isSubmitting }) => (
            <form
              onSubmit={handleSubmit}
              className="relative p-5 grid grid-cols-1 sm:grid-cols-2 w-full hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer items-center"
            >
              <Field
                className={`${
                  errors.major && touched.major ? "border-red-500" : ""
                } p-2 w-full outline-0 border mb-2`}
                placeholder="رشته تحصیلی"
                type="text"
                name="major"
              />
              <Field
                className={`${
                  errors.collegeName && touched.collegeName
                    ? "border-red-500"
                    : ""
                } p-2 w-full outline-0 border mb-2`}
                placeholder="عنوان دانشگاه"
                type="text"
                name="collegeName"
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
              <div className="flex items-center ">
                {grades.map((grade) => (
                  <div className="flex items-center ml-2 my-3">
                    <label htmlFor={grade.name} className="ml-2">
                      {grade.name}
                    </label>
                    <input
                      type="radio"
                      id={grade.name}
                      value={grade.value}
                      checked={values.grade == grade.value}
                      name="grade"
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              <textarea
                className={`
               p-2 w-full outline-0 border mb-2`}
                placeholder="توضیحات (اختیاری)"
                type="textarea"
                name="description"
                onChange={handleChange}
              />
              <div></div>
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

export default ResumeEducationalRecord;
