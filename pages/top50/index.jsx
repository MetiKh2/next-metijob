import Layout from "../../components/layout/index";
import { Banner, CompanyItem } from "../../components";
import { getCompanies } from './../../api/api-companies';
const Top50 = ({companies}) => {
  return (
    <Layout title="Top50">
      <Banner />
      <section className="max-w-6xl m-auto my-5 border-t-2 border border-r-4">
       {companies?.map((company,i)=>(
      <CompanyItem
          index={i+1}
          logo={company?.logo}
          title={company?.name}
          rating={company?.rating}
          category={company?.category}
          jobsCount={36}
          banner={company?.firstBannerImage}
       />  
       ))}
      </section>
    </Layout>
  );
};
export async function getServerSideProps(context){
  const {companies}=await getCompanies('companies?takeEntity=6&orderBy=top')
   return { props:{ companies }};
}
export default Top50;
