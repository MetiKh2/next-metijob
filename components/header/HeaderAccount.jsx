import Link from "next/link";
import { getUser } from "./../../utils/auth";
import { useAuth } from "../../context/AuthContext";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HeaderAccountItems } from "../";
const HeaderAccount = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center space-x-5">
      <Link href={"/"}>
        <h1 className="cursor-pointer text-white text-3xl border h-full border-y-0 py-6 px-3 border-gray-500">
          MetiJob
        </h1>
      </Link>

      {user && (
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
               ${open ? "" : "text-opacity-90"}
               group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <div className="cursor-pointer">
                  <div
                    className="shadow-2xl p-3 bg-[#555555]
        header-account-shadow rounded-lg
         hover:bg-[#626262]
         active:bg-[#444444]
         text-white text-sm
         hidden sm:flex"
                  >
                    ⬇️ {user?.email} 🧑
                  </div>
                  <div
                    className="shadow-2xl p-3 bg-[#555555]
        header-account-shadow rounded-lg
         hover:bg-[#626262]
         active:bg-[#444444]
         text-white text-sm
         flex sm:hidden"
                  >
                    🧑
                  </div>
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-3 w-36 max-w-xs  transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid bg-white">
                      <HeaderAccountItems />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      )}
      {!user && (
        <div className="cursor-pointer flex flex-col">
          <div
            className="shadow-2xl p-2 bg-[#555555]
header-account-shadow rounded-lg
hover:bg-[#626262]
active:bg-[#444444]
text-white text-xs
 sm:flex mb-2 "
          >
          <Link href={'/signin'}>ورود</Link>
          </div>
          <div
            className="shadow-2xl p-2 bg-[#555555]
header-account-shadow rounded-lg
hover:bg-[#626262]
active:bg-[#444444]
text-white text-xs
flex"
          >
                  <Link href={'/signup'}>ثبت نلم</Link>

          </div>
        </div>
      )}
      <div className="py-6 text-lg">🛎️</div>
    </div>
  );
};

export default HeaderAccount;
