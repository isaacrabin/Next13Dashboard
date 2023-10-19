import { Fragment } from "react";
import { 
  HiPencil, 
  HiCog,
  HiChartBar, 
  HiCreditCard,
  HiChevronDown,
  HiOutlineCog, 
  HiOutlineBell, 
  HiCheck,  
  HiBell} from "react-icons/hi";
  import {  HiBars3CenterLeft} from "react-icons/hi2";
  import { Menu, Transition, Popover } from "@headlessui/react";
  import Link from "next/link";

const Navbar = ({...props}) => {
  return (
    <div className={`flex w-full h-16 justify-between items-center transition-all duration-[400ms] ${props.showNav ? 'pl-4': ''}`}>
      <div className="pl-4 md:pl-16">
        <HiBars3CenterLeft className="h-8 w-8 text-gray-700 cursor-pointer" onClick={()=> props.setShowNav(!props.showNav)} />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className={`relative`}>
          <Popover.Button className={`outline-none mr-5 z-10 md:mr-8 cursor-pointer text-gray-700`}>
            <HiBell className="h-6 w-6" />
          </Popover.Button>
          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="traform scale-95"
          enterTo="traform scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform scale-100"
          leaveTo="transform scale-95"
          >
            <Popover.Panel className={`absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen`}>
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                  <a className="text-sm text-orange-500" href="#"> Mark all as read</a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex cursor-pointer hover:bg-orange-100">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <HiCheck className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-700">Notification Title</p>
                        <p className="text-sm text-gray-500 truncate">Notification text</p>
                      </div>            
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img 
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  src="/man-smiling.jpg" 
                  alt="User" />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">Isaac Mrongo</span>
              <HiChevronDown />
            </Menu.Button>
          </div>
          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="traform scale-95"
          enterTo="traform scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform scale-100"
          leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 width-56 mt-2 z-50 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                    <HiPencil  className="h-4 w-4 mr-2" />
                    Edit
                  </Link>            
                </Menu.Item>
                <Menu.Item>
                  <Link href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                    <HiCreditCard  className="h-4 w-4 mr-2" />
                    Billing
                  </Link>            
                </Menu.Item>
                <Menu.Item>
                  <Link href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                    <HiOutlineCog  className="h-4 w-4 mr-2" />
                    Settings
                  </Link>            
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}


export default Navbar;
