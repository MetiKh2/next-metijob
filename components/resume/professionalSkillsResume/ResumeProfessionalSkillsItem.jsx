const ResumeProfessionalSkillsItem = ({ title, isEdit,removeSkill }) => {
  return <div className="bg-gray-200 p-3">
    {title}
    {isEdit &&<span onClick={()=>removeSkill(title)} className="text-xs"> ✖️</span>}
    </div>;
};

export default ResumeProfessionalSkillsItem;
