import Link from "next/link";

const JobsHeaderNav = ({active}) => {
  return (
    <nav
      dir="rtl"
      className="border-b bg-white px-5"
    >
      <div className="text-sm max-w-6xl m-auto flex p-3 justify-between">
        <div className={`${active=='jobs'&&'text-blue-600 border-b pb-1 border-b-blue-600 text-lg'} border-x px-2 opacity-70 hover:text-blue-700 cursor-pointer`}><Link href={'/jobs'}>    جستجو</Link></div>
        <div className={`${active=='applied'&&'text-blue-600 border-b pb-1 border-b-blue-600 text-lg'} border-x px-2 opacity-70 hover:text-blue-700 cursor-pointer`}><Link href={'/applied'}>درخواست های من</Link></div>
        <div className={`${active=='bookmarks'&&'text-blue-600 border-b pb-1 border-b-blue-600 text-lg'} border-x px-2 opacity-70 hover:text-blue-700 cursor-pointer`}><Link href='/bookmarks'>نشان شده</Link></div>
        <div className={`${active=='suggest'&&'text-blue-600 border-b pb-1 border-b-blue-600 text-lg'} border-x px-2 opacity-70 hover:text-blue-700 cursor-pointer`}>پیشنهادی</div>
      </div>
    </nav>
  );
};

export default JobsHeaderNav;
