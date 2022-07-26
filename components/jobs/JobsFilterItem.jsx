import { useState } from "react";
const JobsFilterItem = ({ children, title}) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="bg-white border">
      <div className="p-3 border-b filter flex justify-between">
        <h4 className="font-bold ml-10">{title}</h4>
        <div className="cursor-pointer">{isShowing ? <button onClick={()=>setIsShowing(false)}>⬇️</button> : <button onClick={()=>setIsShowing(true)}>⬅️</button>}</div>
      </div>
    {isShowing&&children}      
    </div>
  );
};

export default JobsFilterItem;
