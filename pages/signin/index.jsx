import Link  from 'next/link';
import {SignInCard} from '../../components'
const SignIn = () => {
  return (
    <section dir="rtl" className="bg-[#F5F5F5] h-screen flex flex-col justify-center">
      <header dir="ltr" className="p-3 cursor-pointer">
       <Link href={'/'}>
       <h1 className="text-3xl text-gray-400 ">MetiJob</h1></Link>
      </header>
      <main className="max-w-3xl flex-1 m-auto">
        <div className="flex flex-col md:flex-row px-4">
          <div className='md:ml-5 flex-1 mb-6'>
            <SignInCard/>
          </div>
          <div className='flex-1'>
            <p className="text-2xl">متی جاب چه کمکی به من می‌کنه؟</p>
            <p className="text-md">همین حالا در جابینجا ثبت‌نام کن و رزومه‌ات رو برای آگهی‌های استخدام شرکت‌های معتبر بفرست.</p>
            <div className="text-sm opacity-70">
                <p className="mt-3">👌 جستجوی در آگهی‌های استخدام 8.774 شرکت معتبر و ارسال رزومه با یک کلیک </p>
            <p className="mt-3">👌دریافت فرصت‌های شغلی جدید مرتبط از طریق ایمیل (Job Alert)</p>
            <p className="mt-3">👌رزومه‌ساز استاندارد</p>
            <p className="mt-3">👌 شناخت محیط کار و فرهنگ سازمانی شرکت‌های در حال استخدام</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default SignIn