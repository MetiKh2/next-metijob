import Head from "next/head";
import { useState } from "react";
import { getJobs } from "../../api/api-jobs";
import { useRouter } from "next/router";
import {
  Header,
  JobsFilters,
  JobsHeaderNav,
  JobsPaging,
  JobsResult,
  JobsSearch,
} from "../../components";
const Jobs = ({ jobs }) => {
  console.log(jobs);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(router.query.title);
  const [state, setState] = useState(router.query.state);
  const [contracts, setContracts] = useState(router.query.contractsCategories);
  const [minSalary, setMinSalary] = useState(router.query.minPrice);
  const [workExperience, setWorkExperience] = useState(
    router.query.workExperience
  );
  //const [pageId, setPageId] = useState(router.query.pageId);

  const handleSearch = (e) => {
    e.preventDefault();
    const path = router.pathname;
    const { query } = router;
    query["title"] = searchTerm;
    query["state"] = state;
    query["contractsCategories"] = contracts;
    query["minPrice"] = minSalary;
    query["workExperience"] = workExperience;
    query["pageId"]=1;

    router.push({ pathname: path, query });
  };
  
  return (
    <section className="bg-[#F5F5F5] min-h-screen">
      <Head>
        <title>Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <JobsHeaderNav />
      <JobsSearch
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section
        dir="rtl"
        className="flex flex-col lg:flex-row max-w-6xl m-auto mt-5"
      >
        <JobsFilters
          setSelectedWorkExperience={setWorkExperience}
          selectedWorkExperience={workExperience}
          minSalary={minSalary}
          setMinSalary={setMinSalary}
          selectedState={state}
          setSelectedState={setState}
          selectedContracts={contracts}
          setSelectedContracts={setContracts}
        />
        <JobsResult jobs={jobs?.jobs} />
      </section>
      <JobsPaging
        //setPageId={setPageId}
        startPage={jobs.startPage}
        endPage={jobs.endPage}
        pageId={jobs.pageId}
      />
    </section>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const title = query.title || "";
  const state = query.state || "";
  const minPrice = query.minPrice || "";
  const workExperience = query.workExperience || "";
  const contractsCategories = query.contractsCategories || "";
  const pageId = query.pageId || "1";
  console.log(title);
  const jobs = await getJobs(
    `jobs?pageId=${pageId}&workExperience=${workExperience}&minPrice=${minPrice}&title=${encodeURI(
      title
    )}&state=${encodeURI(state)}&ContractsCategories=${encodeURI(
      contractsCategories
    )}`
  );
  return {
    props: {
      jobs,
    },
  };
}

export default Jobs;
