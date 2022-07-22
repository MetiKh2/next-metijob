import Link from "next/link";

const HeaderNav = () => {
  return (
    <>
      <div className="text-right text-sm border border-y-0 px-2 border-gray-500 py-6 h-100 hover:bg-[#505050] cursor-pointer">
        50 شرکت برتر 👑
      </div>
      <div className="text-right text-sm border border-y-0 px-2 border-gray-500 py-6 h-100 hover:bg-[#505050] cursor-pointer">
        <Link href={"resume"}> رزومه ساز 🌟</Link>
      </div>
      <div className="text-right text-sm border border-y-0 px-2 border-gray-500 py-6 h-100 hover:bg-[#505050] cursor-pointer">
        جستجوی مشاغل 🔍
      </div>
      <div className="text-right text-sm border border-y-0 px-2 border-gray-500 py-6 h-100 hover:bg-[#505050] cursor-pointer">
        خانه 🏠
      </div>
    </>
  );
};

export default HeaderNav;
