import { useState } from 'react';
import { resetPassword } from './../../api/api-auth';
import { toastful } from 'react-toastful';
const RecoverPasswordCard = () => {
    const [email, setEmail] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email) return;
        resetPassword(email,(isOk, res)=>{
            if(isOk){
                console.log(res);
                toastful('ایمیل برایتان ارسال شد', {
                    duration: 4500,
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
        })
    }
    return (
    <div>
        <div className="py-4 px-7 bg-white border">
          <header className="border-b mb-3 bg-slate-300 p-2 text-center">
            <h1 className="text-lg text-white font-black">بازیابی رمز عبور</h1>
          </header>
          <form onSubmit={handleSubmit} autoComplete="off" autoCorrect="off" auto>
            <div className="mb-3 flex flex-col">
              <label htmlFor="userName" className="text-sm opacity-75">
               ایمیل
              </label>
              <input
                value={email}
                onChange={e=>setEmail(e.target.value)}
                type="email"
                required
                className="border p-1.5 outline-0 focus:border-b-4 focus:border-r-2 my-1.5"
              />
            </div>
            <div className="flex flex-col mb-3">
              <input
                type="submit"
                value="ارسال ایمیل  "
                className="border p-1.5 outline-0 focus:border-b-4 focus:border-r-2 my-1.5 bg-teal-600 text-white"
              />
            </div>
          </form>
        </div>
      </div>
  )
}

export default RecoverPasswordCard