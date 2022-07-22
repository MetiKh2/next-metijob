import { ResumeCardTitle } from "../..";
import { useEffect, useState } from "react";
import { ResumeWorkExperience } from "../../";
import { deleteData } from './../../../api/api-resume';
const ResumeWorkExperienceList = ({ workExperiencesList ,setResetResume}) => {
  const [workExperiences, setWorkExperiences] = useState([]);
  useEffect(() => {
    setWorkExperiences(
      workExperiencesList?.map((item) => {
        return { isEdit: false, ...item };
      })
    );
  }, [workExperiencesList]);
  const addWorkExperience = () => {
    console.log(workExperiences);
    setWorkExperiences([
      ...workExperiences,
      { id: workExperiences.length + 1, isEdit: true },
    ]);
  };
  const handleDelete=(id)=>{
    deleteData(`resume/delete-work-experience/${id}`,(isOk,res)=>{
     setResetResume(prev=>!prev)
    })
  }
  const setIsEdit = (id, value) => {
    setWorkExperiences(
      workExperiences.map((item) => {
        if (item.id.toString().toLowerCase() == id.toString().toLowerCase())
          item.isEdit = value;
        return item;
      })
    );
  };
  return (
    <div
      className={`border border-r-4 border-gray-300 ${
        false ? "bg-[#F5FBFE]" : "bg-white"
      }`}
    >
      <ResumeCardTitle title={"🔥 سابقه کار"} />
      <div className="p-4">
        {workExperiences?.map((workExperience) => {
          if (
            !workExperience.isEdit &&
            (!workExperience.companyName ||
              !workExperience.jobTitle ||
              !workExperience.startDate)
          )
            return;
          else
            return (
              <ResumeWorkExperience
                key={workExperience.id}
                setIsEdit={setIsEdit}
                {...workExperience}
                entityId={workExperience.entityId}
                setResetResume={setResetResume}
                handleDelete={handleDelete}
              />
            );
        })}
      </div>
      <button
        className="bg-gray-200 text-center p-3 hover:bg-gray-300 w-full"
        onClick={addWorkExperience}
      >
        + افزودن سابقه جدید
      </button>
    </div>
  );
};

export default ResumeWorkExperienceList;
