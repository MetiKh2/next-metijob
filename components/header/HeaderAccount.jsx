import Link from "next/link";

const HeaderAccount = () => {
  return (
    <div className="flex items-center space-x-5">
      <Link href={'/'}><h1 className="cursor-pointer text-white text-3xl border h-full border-y-0 py-6 px-3 border-gray-500">MetiJob</h1></Link>
      <div
        className="shadow-2xl p-3 bg-[#555555]
         header-account-shadow rounded-lg
          hover:bg-[#626262]
          active:bg-[#444444]
          text-white text-sm
          hidden sm:flex"
      >
        ⬇️ Metikh@hmail.com 🧑
      </div>
      <div
        className="shadow-2xl p-3 bg-[#555555]
         header-account-shadow rounded-lg
          hover:bg-[#626262]
          active:bg-[#444444]
          text-white text-sm
          flex sm:hidden"
      >
         🧑
      </div>
      <div className="py-6 text-lg">🛎️</div>
    </div>
  );
};

export default HeaderAccount;
