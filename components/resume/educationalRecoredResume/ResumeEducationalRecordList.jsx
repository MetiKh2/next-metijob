import { ResumeEducationalRecord, ResumeCardTitle } from "../../";
import { useEffect, useState } from "react";
import { deleteData } from "../../../api/api-resume";
import { useAuth } from "../../../context/AuthContext";
const ResumeEducationalRecordList = ({
  educationalRecordsList,
  setResetResume,
}) => {
  const [educationalRecords, setEducationalRecords] = useState([]);
  const {token}=useAuth()
  useEffect(() => {
    setEducationalRecords(
      educationalRecordsList?.map((item) => {
        return { isEdit: false, ...item };
      })
    );
  }, [educationalRecordsList]);
  const addEducationalRecord = () => {
    setEducationalRecords([
      ...educationalRecords,
      { id: educationalRecords.length + 1, isEdit: true },
    ]);
  };
  const setIsEdit = (id, value) => {
    setEducationalRecords(
      educationalRecords?.map((item) => {
        if (item.id == id) item.isEdit = value;
        return item;
      })
    );
  }; 
  const handleDelete=(id)=>{
    deleteData(`resume/delete-educational-record/${id}`,token,(isOk,res)=>{
     setResetResume(prev=>!prev)
    })
  }
  return (
    <div
      className={`border border-r-4 border-gray-300 ${
        false ? "bg-[#F5FBFE]" : "bg-white"
      }`}
    >
      <ResumeCardTitle title={"🎓 سوابق تحصیلی"} />
      <div className="p-4">
        {educationalRecords?.map((educationalRecord) => {
          if (
            !educationalRecord.isEdit &&
            (!educationalRecord.major ||
              !educationalRecord.collegeName ||
              !educationalRecord.startDate)
          )
            return;
          else
            return (
              <ResumeEducationalRecord
                collegeName={educationalRecord.collegeName}
                endDate={educationalRecord.endDate}
                major={educationalRecord.major}
                startDate={educationalRecord.startDate}
                key={educationalRecord.id}
                isEdit={educationalRecord.isEdit}
                id={educationalRecord.id}
                setIsEdit={setIsEdit}
                setResetResume={setResetResume}
                entityId={educationalRecord.entityId}
                isBusy={educationalRecord.isBusy}
                description={educationalRecord.description}
                grade={educationalRecord.grade}
                handleDelete={handleDelete}
              />
            );
        })}
      </div>
      <button
        className="bg-gray-200 text-center p-3 hover:bg-gray-300 w-full"
        onClick={addEducationalRecord}
      >
        + افزودن سابقه جدید
      </button>
    </div>
  );
};

export default ResumeEducationalRecordList;
