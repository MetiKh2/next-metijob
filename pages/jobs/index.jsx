import { useState } from "react";
import { getJobs } from "../../api/api-jobs";
import { useRouter } from "next/router";
import Layout from "./../../components/layout";
import {
  JobsFilters,
  JobsHeaderNav,
  JobsPaging,
  JobsResult,
  JobsSearch,
  Paging,
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

  const handleSearch = (e) => {
    e.preventDefault();
    const path = router.pathname;
    const { query } = router;
    query["title"] = searchTerm;
    query["state"] = state;
    query["contractsCategories"] = contracts;
    query["minPrice"] = minSalary;
    query["workExperience"] = workExperience;
    query["pageId"] = 1;

    router.push({ pathname: path, query });
  };

  return (
    <Layout title={"Jobs"}>
      <section className="bg-[#F5F5F5] min-h-screen">
        <JobsHeaderNav active='jobs'/>
        <JobsSearch
          bg={{
            background: "rgb(60,208,217)",
            background:
              "linear-gradient(87deg, rgba(60,208,217,1) 6%, rgba(72,204,127,1) 91%, rgba(109,227,134,0.7539390756302521) 100%",
          }}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <section
          dir="rtl"
          className="flex flex-col lg:flex-row max-w-6xl m-auto mt-5 px-4  "
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
        <Paging
          startPage={jobs.startPage}
          endPage={jobs.endPage}
          pageId={jobs.pageId}
        />
        <div className={'pb-4'}></div>
      </section>
    </Layout>
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
