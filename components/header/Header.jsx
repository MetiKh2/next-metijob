import { Popover, Transition } from "@headlessui/react";
import { HeaderNav, HeaderAccount } from "../";
import { Fragment } from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="px-4 bg-[#444444]">
      <div className="flex justify-between max-w-6xl m-auto">
        <HeaderAccount />
        <div className="space-x-0 text-white hidden md:flex">
          <HeaderNav />
        </div>
        <div className=" ml-4 flex items-center text-lg md:hidden">
          <Link href="/jobs">🔍</Link>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span>📊</span>
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
                  <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-xs  transform px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid bg-white p-7 lg:grid-cols-2">
                        <HeaderNav />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
