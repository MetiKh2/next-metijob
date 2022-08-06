import Head from 'next/head';
import Link  from 'next/link';
import { RecoverPasswordCard } from '../../components';
const RecoverPassword = () => {
  return (
    <>
    <Head>
      <title>بازیابی رمز عبور</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section dir="rtl" className="bg-[#F5F5F5] h-screen flex flex-col justify-center">
      <header dir="ltr" className="p-3 cursor-pointer">
       <Link href={'/'}>
       <h1 className="text-3xl text-gray-400 ">MetiJob</h1></Link>
      </header>
      <main className="max-w-3xl flex-1 m-auto">
          <div className='md:ml-5 flex-1 mb-6  w-72 sm:w-96'>
            <RecoverPasswordCard/>
          </div>
      </main>
    </section>
    </>
  )
}

export default RecoverPassword