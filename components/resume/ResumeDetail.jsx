import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { toastful } from "react-toastful";
import { baseUrl } from "../../api/api";
import { resumeAvatar } from "../../constants";
import { useAuth } from "../../context/AuthContext";
import { postData } from "./../../api/api-resume";

const ResumeDetail = ({image}) => {
  const [avatar, setAvatar] = useState("");
  const [avatarPath, setAvatarPath] = useState(null);
  const inputFile = useRef();
  const {user,token}=useAuth()
  useEffect(()=>{
    setAvatarPath(`${resumeAvatar}${image}`)
  },[image])
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatar(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("avatar", e.target.files[0]);
      postData(
        `resume/upload-user-avatar/${user.IdentityId}`,
        formData,token,
        (isOk, res) => {
          if (!isOk)
            return toastful("مشکلی در حین آپلود رخ داد ,  دوباره تلاش کنید", {
              duration: 2500,
              kind: "failure",
              className: "bg-white p-3 border-4 border-red-400",
            });
          else
            return toastful("تصویر با موفقیت آپلود شد", {
              duration: 2500,
              kind: "success",
              className: "bg-white p-3 border-4 border-green-400",
            });
        }
      );
    }
  };

  return (
    <div className="bg-white w-full flex border-r-4 border-gray-300 border">
      <div className="flex flex-col space-y-5 py-5 px-7">
        <Image
          width={150}
          height={150}
          src={avatarPath ? avatarPath : "/R.jpg"}
          className="border"
        />
        <div>
          <button
            onClick={() => inputFile.current.click()}
            className="border py-3 opacity-75 w-full"
          >
            + آپلود عکس
          </button>
          <input
            onChange={handleChange}
            accept="image/gif, image/jpeg, image/png "
            name="image"
            id="file"
            type="file"
            className="hidden"
            ref={inputFile}
          />
        </div>
      </div>
      <div className="py-10 px-7 text-right border border-y-0 border-l-0">
        <p className="text-2xl text-orange-500">Mahdi khodarahimi</p>
        <div className="space-x-3 my-3">
          <span> عنوان شغلی : </span>
          <a href="#" className="text-blue-700">
            + ویرایش عنوان
          </a>
        </div>
        <div className="space-x-3 my-3">
          <span> وضعیت اشتغال : </span>
          <a href="#" className="text-blue-700">
            + وضعیت اشتغال
          </a>
        </div>
        <div className="space-x-3 my-3">
          <span> آخرین شرکت : </span>
          <a href="#" className="text-blue-700">
            + آخرین شرکت{" "}
          </a>
        </div>
        <div className="space-x-3 my-3">
          <span> آخرین مدرک تحصیلی : </span>
          <a href="#" className="text-blue-700">
            + آخرین مدرک تحصیلی{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetail;
