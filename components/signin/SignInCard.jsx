import { useState } from 'react';
import { toastful } from 'react-toastful';
import { useRouter } from 'next/router';
import { loginUser } from '../../api/api-auth';
import jwt from 'jwt-decode' 
import { useAuth } from '../../context/AuthContext';
const SignInCard = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState("");
    const router=useRouter()
    const {getUserFromLocalStorage}=useAuth()
    const changeFormData = (id, value) => {
      setFormData({ ...formData, [id]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        !formData.userName ||
        !formData.password
      ) {
        setError("لطفا تمامی موارد را وارد کنید");
        return;
      }
      loginUser(formData,(isOk,res)=>{
        console.log(res);
        if(isOk){
          localStorage.setItem("token",res.token);
          const decodedToken=jwt(res.token)
          localStorage.setItem("user", JSON.stringify(decodedToken));
          getUserFromLocalStorage();
          setTimeout(() => {
            router.push('/')
          }, 3000);
          toastful('ورود موفقیت آمیز بود , به صفحه اصلی هدایت می شوید', {
            duration: 3000,
            kind: "success",
            className: "bg-white p-3 border-4 border-green-400",
          });
        }
        else{
          res.forEach(error => {
            toastful(error, {
              duration: 4500,
              kind: "failure",
              className: "bg-white p-3 border-4 border-red-400",
            });
          });
         
        }
      });
      setError("")
    };
     
    return (
      <div>
        <div className="py-4 px-7 bg-white border">
          <header className="border-b mb-3 bg-slate-300 p-2 text-center">
            <h1 className="text-lg text-white font-black">ورود</h1>
          </header>
          <form onSubmit={handleSubmit} autoComplete="off" autoCorrect="off" auto>
            <div className="mb-3 flex flex-col">
              <label htmlFor="userName" className="text-sm opacity-75">
                نام کاربری
              </label>
              <input
                value={formData["userName"]}
                onChange={({ target: { id, value } }) =>
                  changeFormData(id, value)
                }
                type="text"
                id="userName"
                className="border p-1.5 outline-0 focus:border-b-4 focus:border-r-2 my-1.5"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="password" className="text-sm opacity-75">
                رمز عبور
              </label>
              <input
                value={formData["password"]}
                onChange={({ target: { id, value } }) =>
                  changeFormData(id, value)
                }
                type="password"
                id="password"
                className="border p-1.5 outline-0 focus:border-b-4 focus:border-r-2 my-1.5"
              />
            </div>
            <div className="flex flex-col mb-3">
              <input
                type="submit"
                value="ورود  "
                className="border p-1.5 outline-0 focus:border-b-4 focus:border-r-2 my-1.5 bg-teal-600 text-white"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    );
}

export default SignInCard