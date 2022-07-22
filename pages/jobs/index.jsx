import Head  from 'next/head';
import { Header,JobsHeaderNav, JobsSearch } from '../../components';
const Jobs = () => {
  return (
   <>
     <Head>
        <title>CV Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <JobsHeaderNav/>
      <JobsSearch/>
      </>
  )
}

export default Jobs