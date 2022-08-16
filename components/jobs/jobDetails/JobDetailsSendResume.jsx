import { ResumeCardTitle } from "../../";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import {sendResume} from '../../../api/api-jobs'
import { toastful } from "react-toastful";
const JobDetailsSendResume = ({jobId}) => {
  const { user } = useAuth();
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState();
  const handleSubmit=e=>{
    e.preventDefault();
    if(!user)return;
    const formData=new FormData();
    formData.append('phone',phone)
    formData.append('userId',user.IdentityId);
    formData.append('jobId',jobId);
    formData.append('file',file);
    sendResume(formData,(isOk,res)=>{
      if (!isOk)
      return toastful("دوباره تلاش کنید ", {
        duration: 2500,
        kind: "failure",
        className: "bg-white p-3 border-4 border-red-400",
      });
    else
      return toastful("اطلاعات با موفقیت ثبت شد", {
        duration: 2500,
        kind: "success",
        className: "bg-white p-3 border-4 border-green-400",
      });
    })
  }

  if(!user)return <div className='border-4 border-rose-700 p-4 bg-rose-600 text-white sticky top-5'>
      برای ارسال رزومه باید اول وارد سایت شوید
  </div>
  return (
    <div className="border sticky top-5">
      <ResumeCardTitle title={"از اینجا شروع کنید"} />
      <form className="bg-white p-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user?.email}
          className="p-2 w-full border text-left mb-6"
          disabled
        />
        <input
          type="text"
          value={user?.name}
          className="p-2 w-full border text-left mb-6"
          disabled
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 w-full border mb-6"
          placeholder="موبایل ..."
        />
        <div className="text-left">
          <label className="ml-auto"> : PDF File   </label>
        </div>
        <input
          type="file"
          className="p-2 w-full border mb-6"
           onChange={e=>setFile(e.target.files[0])}
        />
           <button className={'bg-teal-500 w-full p-2 text-white rounded-xl text-sm'}>
                ارسال رزومه
           </button>
      </form>
    </div>
  );
};

export default JobDetailsSendResume;
