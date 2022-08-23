import Layout from "./../../components/layout/index";
import { getCompanies } from "./../../api/api-companies";
import { CompaniesHeader, CompanyCardItem, Paging } from "../../components";
const Companies = ({ values }) => {
  return (
    <Layout title='شرکت ها'>
      <div dir="rtl" className="max-w-6xl m-auto py-9">
        <CompaniesHeader />
        <section className="grid grid-cols-1 sm:grid-cols-2">
          {values?.companies?.map((company) => (
            <CompanyCardItem company={company} />
          ))}
        </section>
        <Paging
          endPage={values?.endPage}
          pageId={values?.pageId}
          startPage={values?.startPage}
        />
      </div>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const query = context.query.query || "";
  const pageId = context.query.pageId || 1;
  const response = await getCompanies(
    `companies?takeEntity=6&name=${encodeURI(query)}&pageId=${pageId}`
  );
  return { props: { values:response  } };
}
export default Companies;
