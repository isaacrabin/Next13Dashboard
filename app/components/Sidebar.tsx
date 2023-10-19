import { forwardRef } from "react";
import Link from "next/link";
import { HiCreditCard, HiUser,HiHome } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";
import { HiCog8Tooth } from "react-icons/hi2";

const navItems = [
  {
    id:"01",
    name: "Home",
    url:"home",
    icon:"HiHome"
  },
  {
    id:"02",
    name: "Users",
    url:"users",
    icon:"HiUser"
  },
  {
    id:"03",
    name: "Settings",
    url:"users",
    icon:"HiCreditCard"
  }
]

const Sidebar = ({...props})  => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`fixed z-100 w-56 h-screen shadow-sm ${props.showNav ? 'bg-white' : ""}`}>
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img className="w-32 h-auto" src="/logo.jpg" alt="Logo" />
        </picture>
      </div>
      <div className="flex flex-col">  
        <Link  href='/dashboard/home'>
        <div              
        className={`pl-6 py-3 text-center cursor-pointer mb-0 flex items-center transition-colors 
        ${pathname == '/dashboard/home'
          ? "bg-orange-100 text-orange-500" 
          : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
        >
        <div className="mr-2">
          <HiHome className="h-5 w-5" />
        </div>
        <div>
          <p>Home</p>
        </div>
        </div>
        </Link>       

        {/* Users Menu  */}
        <Link  href='/dashboard/users'>
        <div              
        className={`pl-6 py-3 text-center cursor-pointer mb-0 flex items-center transition-colors 
        ${pathname == '/dashboard/users'
          ? "bg-orange-100 text-orange-500" 
          : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
        >
        <div className="mr-2">
          <HiUser className="h-5 w-5" />
        </div>
        <div>
          <p>Users</p>
        </div>
        </div>
        </Link>     

                {/* Users Menu  */}
        <Link  href='/dashboard/settings'>
        <div              
        className={`pl-6 py-3 text-center cursor-pointer mb-0 flex items-center transition-colors 
        ${pathname == '/dashboard/settings'
          ? "bg-orange-100 text-orange-500" 
          : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
        >
        <div className="mr-2">
          <HiCog8Tooth className="h-5 w-5" />
        </div>
        <div>
          <p>Settings</p>
        </div>
        </div>
        </Link>    
      </div>      
    </div>
  )
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
