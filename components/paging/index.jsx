import { useRouter } from "next/router";

const Paging = ({ pageId, endPage, startPage }) => {
    const router= useRouter()
    const changePage=(page)=>{
        const path = router.pathname;
        const { query } = router;
        query["pageId"] = page;
        router.push({ pathname: path, query });
    }
  return (
    <div dir="rtl" className="max-w-2xl m-auto mt-3 border-2 shadow-md p-2">
      <div className="flex flex-row">
        {pageId < endPage && (
          <div
            className={`${
              true ? "" : "bg-sky-500 text-white "
            } p-1.5 border border-white`}
          >
            <button onClick={() => changePage(pageId+1)}>بعدی</button>
          </div>
        )}
        {<PagingRows pageId={pageId} endPage={endPage} startPage={startPage} changePage={changePage}/>}
      </div>
    </div>
  );
};
const PagingRows = ({ startPage, endPage ,changePage,pageId}) => {
  let rows = [];
  for (let i = startPage; i <= endPage ; i++) {
    rows.push(
      <div
        className={`${
          pageId!=i ? "text-sky-500" : "bg-sky-500 text-white "
        } p-2 border border-white`}
        key={i}
      >
        <button onClick={()=>changePage(i)}>{i}</button>
      </div>
    );
}
  return <>{rows.map((row) => row)}</>;
};

export default Paging;
