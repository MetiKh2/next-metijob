import Head from "next/head"
import {Header,Footer} from "../"

const Layout = ({title,children}) => {
  return (
    <>
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main dir="rtl">
      {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout