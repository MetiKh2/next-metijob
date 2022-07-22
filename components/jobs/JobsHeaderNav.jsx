const JobsHeaderNav = () => {
  return (
    <nav
      dir="rtl"
      className="border-b "
    >
      <div className="text-sm max-w-6xl m-auto flex p-3 justify-between">
        <div className="opacity-70 hover:text-blue-700 cursor-pointer">جستجو</div>
        <div className="opacity-70 hover:text-blue-700 cursor-pointer">دخواست های من</div>
        <div className="opacity-70 hover:text-blue-700 cursor-pointer">نشان شده</div>
        <div className="opacity-70 hover:text-blue-700 cursor-pointer">پیشنهادی</div>
      </div>
    </nav>
  );
};

export default JobsHeaderNav;
