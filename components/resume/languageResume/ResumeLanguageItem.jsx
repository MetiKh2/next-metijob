import { languages, levels } from "./data";
import { useEffect, useState } from "react";
import { postData } from "./../../../api/api-resume";
import { toastful } from 'react-toastful';
const ResumeLanguageItem = ({ handleDelete,name, level, isEdit, setIsEdit,id,setResetResume,entityId ,levelString,nameString,}) => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  useEffect(()=>{
    setSelectedLevel(level)
    setSelectedLanguage(name)
  },[name,level])
  const handleSubmit = (e) => {
    e.preventDefault()
    postData(
      "resume/update-language",
      {
        dto: [
          {
            levelLanguage: Number(selectedLevel),
            languageName: Number(selectedLanguage),
            entityId
          },
        ],
        userId: localStorage.getItem("userId"),
      },
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
  };
  return (
    <div className="">
      {isEdit && (
        <form onSubmit={handleSubmit}>
          <div className="relative p-5  flex flex-wrap space-y-4  cursor-pointer space-x-2">
            <div className="absolute text-blue-400 text-lg top-2 left-2 resume-card-edit">
              ویرایش 🖊️
            </div>
          </div>
          <div className="flex justify-center">
            <div className="ml-10">
              <select onChange={(e) => setSelectedLanguage(e.target.value)}>
                {languages.map((language) => (
                  <option 
                    selected={
                      language.value == name
                    }
                    value={language.value}
                    key={language.value}
                  >
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select onChange={(e) => setSelectedLevel(e.target.value)}>
                {levels.map((item) => (
                  <option
                    selected={item.value == level}
                    value={item.value}
                    key={item.value}
                  >
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center mb-8">
            <button
              onClick={() => setIsEdit(id, false)}
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
      {!isEdit && (
        <>
          <div className="relative p-5  flex flex-wrap space-y-4 hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer space-x-2">
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
            <div className="flex capitalize font-semibold mb-4">
              <p>{levelString} : </p>
              <p> {nameString}</p>
            </div>
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default ResumeLanguageItem;
