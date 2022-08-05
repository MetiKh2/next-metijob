import { useEffect, useState } from "react";
import { getResume } from "../../api/api-resume";
import {
  ResumeCareerJob,
  ResumePersonalInformation,
  ResumeLanguageList,
  ResumeEducationalRecordList,
  ResumeProfessionalSkills,
  ResumeWorkExperienceList,
} from "../../components";
import { ResumeDetail } from "../../components";
import { getIdentityId,getToken } from "../../utils/auth";
import Layout from './../../components/layout';
import { useRouter } from 'next/router';
import { useAuth } from "../../context/AuthContext";

const index = () => {
  const [resume, setResume] = useState({});
  const [resetResume, setResetResume] = useState(false);
  const router=useRouter()
  useEffect(() => {
    const userId=getIdentityId()
    const token=getToken()
    if(!userId||!token) {
      router.push('/');
      return;
    }
    getResume(
      `Resume?UserId=${userId}&Image=true&PersonalInformations=true&WorkExperience=true&EducationalRecords=true&ProfessionalSkills=true&Languages=true&CareerJob=true`,
      token,(isOk, res) => {
        if (isOk) setResume(res);
        else console.log(res);
      }
    );
  }, [resetResume]);
 
  return (
    <Layout title={'CV Builder'}>
      

      <main dir="rtl" className="bg-[#F5F5F5]  py-8">
        <div className=" max-w-6xl m-auto">
          <div className="flex flex-col">
            <div></div>
            <div className="flex flex-col space-y-5">
              <ResumeDetail image={resume?.image} />
              <ResumePersonalInformation
                information={{
                  state: resume?.state,
                  email: resume?.email,
                  phone: resume?.phone,
                  address: resume?.address,
                  isMarried: resume?.isMarried,
                  yearOfBirth: resume?.yearOfBirth,
                  isMan: resume?.isMan,
                  jobTitle: resume?.jobTitle,
                  aboutMe: resume?.aboutMe,
                }}
                setResetResume={setResetResume}
              />
              <ResumeProfessionalSkills
                setResetResume={setResetResume}
                professionalSkills={resume?.professionalSkills?.split("/")}
              />
              <ResumeWorkExperienceList
                workExperiencesList={resume?.workExperiences}
                setResetResume={setResetResume}
              />
              <ResumeEducationalRecordList
                educationalRecordsList={resume?.educationalRecords}
                setResetResume={setResetResume}
              />
              <ResumeLanguageList
                languagesList={resume?.languages}
                setResetResume={setResetResume}
              />
              <ResumeCareerJob 
              jobCareer={{
                iranStatesCareerJob: resume?.iranStatesCareerJob,
                contractsCategories: resume?.contractsCategories,
                minPrice: resume?.minPrice,
                jobCategories:resume?.jobCategories,
                seniorityLevels:resume?.seniorityLevels
              }}
              setResetResume={setResetResume}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default index;
