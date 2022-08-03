import { useRouter } from "next/router";
import { useState } from 'react';

const CompaniesHeader = () => {
  const [search, setSearch] = useState("");
  const router =useRouter();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const path = router.pathname;
    const { query } = router;
    query["query"] = search;
    query["pageId"] = 1;
    router.push({ pathname: path, query });
  }
  return (
    <>
      <div className="flex items-center justify-between px-3">
        <h1 className="text-3xl text-gray-600">شرکت ها</h1>
        <button
          className="py-2 px-3  bg-yellow-400 mx-3
        active:bg-yellow-500 hover:bg-yellow-300
        "
        onClick={()=>router.push('/top50')}
        >
          50 شرکت برتر
        </button>
      </div>
        <form onSubmit={handleSubmit}>
      <div className="mt-3 border flex items-center rounded-l-2xl mx-3">
          <span>🔍</span>
          <input
            className="outline-0 p-1.5 flex-1"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی کلمات کلیدی مثلا: کافه‌بازار یا دیجیکالا و..."
          />
          <button type="submit" className="bg-gray-300 p-1.5 rounded-l-2xl">
            بگرد
          </button>
      </div>
        </form>
    </>
  );
};

export default CompaniesHeader;
