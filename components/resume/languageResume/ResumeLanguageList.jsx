import { ResumeCardTitle } from "../../";
import { ResumeLanguageItem } from "../../";
import { useEffect, useState } from "react";
import { deleteData } from "../../../api/api-resume";
const ResumeLanguageList = ({ languagesList, setResetResume }) => {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    setLanguages(
      languagesList?.map((item) => {
        return { isEdit: false, ...item };
      })
    );
  }, [languagesList]);
  const addLanguage = () => {
    setLanguages([...languages, { id: languages.length + 1, isEdit: true ,languageName:0,levelLanguage:0}]);
  };
  const setIsEdit = (id, value) => {
    setLanguages(
      languages.map((item) => {
        if (item.id && item.id == id) item.isEdit = value;
        return item;
      })
    );
  };
  const handleDelete=(id)=>{
    deleteData(`resume/delete-language/${id}`,(isOk,res)=>{
     setResetResume(prev=>!prev)
    })
  }
  return (
    <div className={`border border-r-4 border-gray-300 ${"bg-white"}`}>
      <ResumeCardTitle title={"🗺️ زبان ها"} />

      <div className="relative p-5 flex-col flex flex-wrap space-y-4 hover:border-2 hover:border-blue-300 duration-100 resume-card cursor-pointer space-x-2">
        {languages?.map((language) => {
          if (
            !language.isEdit &&
            (language.languageName<0 || language.levelLanguage<0)
          )
            return;
          else
            return (
              <div key={language.id}>
                <ResumeLanguageItem
                  setResetResume={setResetResume}
                  name={language.languageName}
                  level={language.levelLanguage}
                  isEdit={language.isEdit}
                  setIsEdit={setIsEdit}
                  id={language.id}
                  entityId={language.entityId}
                  nameString={language.languageNameString}
                  levelString={language.languageLevelString}
                  handleDelete={handleDelete}/>
                <hr />
              </div>
            );
        })}
      </div>
      <button
        className="bg-gray-200 text-center p-3 hover:bg-gray-300 w-full"
        onClick={addLanguage}
      >
        + افزودن سابقه جدید
      </button>
    </div>
  );
};

export default ResumeLanguageList;
