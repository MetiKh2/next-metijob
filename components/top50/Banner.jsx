import Link from "next/link";

const Banner = () => {
  return (
    <section className="pt-12 pb-20 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/top50.jpg')" }}>
      <div className="flex flex-col items-center max-w-6xl m-auto px-2">
        <h1 className="text-3xl font-semibold text-white text-center">
          فهرست ۵۰ شرکت برتر ایران برای کار
        </h1>
        <p  className="text-1xl text-white my-8 text-center">
          پیش از انتخاب شغل و مسیر حرفه‌ای خود، رتبه‌بندی شرکت‌های برتر ایران را
          در جابینجا مشاهده کنید! این فهرست بر اساس بررسی شاخص‌های مختلف در ۹۰
          روز اخیر تهیه شده است.
        </p>
        <div className="p-2.5 mt-4 text-white text-xl border-2 border-white active:p-2" >
        <Link href='/companies'>
            همه شرکت ها
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
