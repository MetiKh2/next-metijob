import Head from "next/head";
import { useEffect, useState } from "react";
import { userId } from "../../api/api";
import { getResume } from "../../api/api-resume";
import {
  Header,
  ResumeCareerJob,
  ResumePersonalInformation,
  ResumeLanguageList,
  ResumeEducationalRecordList,
  ResumeProfessionalSkills,
  ResumeWorkExperienceList,
} from "../../components";
import { ResumeDetail } from "../../components";

const index = () => {
  const [resume, setResume] = useState({});
  const [resetResume, setResetResume] = useState(false);
  useEffect(() => {
    getResume(
      `Resume?UserId=${localStorage.getItem(
        "userId"
      )}&Image=true&PersonalInformations=true&WorkExperience=true&EducationalRecords=true&ProfessionalSkills=true&Languages=true&CareerJob=true`,
      (isOk, res) => {
        if (isOk) setResume(res);
        else console.log(res);
      }
    );
  }, [resetResume]);
  console.log(resume);
  return (
    <>
      <Head>
        <title>CV Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

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
    </>
  );
};

export default index;
