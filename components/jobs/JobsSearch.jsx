const JobsSearch = ({bg,searchTerm,setSearchTerm,handleSearch}) => {
  return (
    <section
      dir="rtl"
      className="max-w-6xl m-auto mt-10 p-8"
      style={bg}
    >
       <form onSubmit={handleSearch}>
      <div className="mx-3 flex">
       <input
        value={searchTerm}
          className=" p-3 outline-0 flex-1"
          type="text"
          placeholder="عنوان مهارت ..."
        onChange={e=>setSearchTerm(e.target.value)}/>
        <button type="submit" className="py-2 px-3 font-semibold border border-black bg-yellow-400 mx-3
        active:bg-yellow-500 active:border-2 hover:bg-yellow-300
        ">جستجو</button>
      </div>
       </form>
    </section>
  );
};

export default JobsSearch;
