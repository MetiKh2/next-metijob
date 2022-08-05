import { useEffect, useState } from "react";
import { ResumeCardTitle, ResumeProfessionalSkillsItem } from "../../";
import { postData } from './../../../api/api-resume';
import { toastful } from 'react-toastful';
import { useAuth } from "../../../context/AuthContext";
const ResumeProfessionalSkills = ({setResetResume,professionalSkills}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('')
  const {user,token}=useAuth()
  useEffect(()=>{
    setSkills(professionalSkills)
  },[professionalSkills])
  const removeSkill = (title) => {
    setSkills(skills.filter((p) => p != title));
  };
  const addSkill = () => {
    if(skill){
    setSkills(prev=>prev?[...prev,skill]:[skill]);
    setSkill('')}
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    postData('resume/update-Skills',{
      userId:user.IdentityId,
      skills:skills.join('/')
    },token,(isOk,res)=>{
      setIsEdit(false)
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
    })
  }
  return (
    <div
      className={`border border-r-4 border-gray-300 ${
        isEdit ? "bg-[#F5FBFE]" : "bg-white"
      }`}
    >
      <ResumeCardTitle title={"🚀 مهارت های حرفه ای"} />
      {!isEdit && (
        <div className="relative p-5  flex flex-wrap space-y-4 hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer space-x-2">
          <div
            onClick={() => setIsEdit(true)}
            className="absolute text-blue-400 text-lg top-2 left-2 resume-card-edit"
          >
            ویرایش 🖊️
          </div>
          {skills?.map((skill) => (
            <ResumeProfessionalSkillsItem
              title={skill}
              key={skill}
              isEdit={false}
            />
          ))}
        </div>
      )}
      {isEdit && (
        <form onSubmit={handleSubmit}>
          <div className="relative p-5  flex flex-wrap space-y-4  cursor-pointer space-x-2">
            <div
              onClick={() => setIsEdit(true)}
              className="absolute text-blue-400 text-lg top-2 left-2 resume-card-edit"
            >
              ویرایش 🖊️
            </div>
            {skills?.map((skill) => (
              <ResumeProfessionalSkillsItem
                title={skill}
                key={skill}
                isEdit={true}
                removeSkill={removeSkill}
              
              />
            ))}
          </div>
          <div className="flex justify-center">
            <input value={skill} onChange={(e) => setSkill(e.target.value)}type="text" className="border-2 outline-0 ml-2" placeholder="مهارت شما . . ."/>
            <button type="button" onClick={addSkill} className="bg-teal-500 px-2.5 py-1 text-white text-3xl">+</button>
          </div>
        <div className="text-center mb-8">
        <button
                onClick={() => setIsEdit(false)}
                type="button"
                className="bg-gray-200 w-24 py-2 mt-5 ml-2"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="bg-green-500 w-24 py-2 text-white mt-5"
              >
                ذخیره
              </button>
        </div>
        </form>
      )}
    </div>
  );
};

export default ResumeProfessionalSkills;
