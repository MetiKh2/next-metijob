import Head from 'next/head'
import {Header} from '../components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Meti Job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
     
    </div>
  )
}

export default Home
