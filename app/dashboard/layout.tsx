"use client";

import { useState, useEffect, Fragment } from 'react';
import { Transition } from '@headlessui/react';

import '../globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (innerWidth <= 640){
      setShowNav(false);
      setIsMobile(true);
    }
    else{
      setShowNav(true);
      setIsMobile(false);
    }
  };

  useEffect(()=> {
   if(typeof window !== 'undefined'){
    addEventListener('resize', handleResize);
   }

   return () => {
    removeEventListener('resize', handleResize);
   };
  },[]);

  return (
    <>
    {/* <Navbar showNav={showNav} setShowNav={setShowNav} /> */}
    <Transition
    as={Fragment}
    show ={showNav}
    enter='transform transition duration-[400ms]'
    enterFrom='-translate-x-full'
    enterTo='-translate-x-0'
    leave='transform transition duration-[400ms] ease-in-out'
    leaveFrom='-translate-x-0'
    leaveTo='-translate-x-full'
    >
      <div>
        <Sidebar className="h-full" showNav={showNav} setShowNav={setShowNav} />  
      </div>          
    </Transition>
    <main className={`pt-2 transition-all duration-[400ms] ${showNav && !isMobile ? 'pl-56' : ''}`}>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <div className='px-4 md:px-16'>
        {children}
      </div>
      <Footer showNav={showNav} setShowNav={setShowNav} />
    </main>
    </>   
  )
}
