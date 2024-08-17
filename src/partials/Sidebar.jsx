import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { CiCloud } from "react-icons/ci";
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoSettingsOutline } from "react-icons/io5";
import { LuFramer } from "react-icons/lu";
import { MdInfoOutline, MdOutlineInventory2 } from "react-icons/md";
import { PiNotepadThin } from "react-icons/pi";
import { RiBookLine, RiFileList2Fill, RiThunderstormsLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  variant = 'default',
}) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} ${variant === 'v2' ? 'border-r border-gray-200 dark:border-gray-700/60' : 'rounded-r-2xl shadow-sm'}`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block h-12 w-32 mx-auto">
            <img src="https://cdn.prod.website-files.com/6565124c786d4f76eddcae02/656c4f79faeb86dd4a1a7b85_image%20476.svg" >
             
            </img>
          </NavLink>
        </div>
        
      
        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={pathname === "/" || pathname.includes("dashboard")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname === "/" || pathname.includes("dashboard") ? "" : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`shrink-0 fill-current ${pathname === "/" || pathname.includes("dashboard") ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`}  width="16" height="16" >
                            <BsFillGridFill  />
                            </div>                            
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Dashboard
                            </span>
                          </div>
                          {/* Icon */}
                         
                        </div>
                      </a>
                      
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* E-Commerce */}
              <SidebarLinkGroup activecondition={pathname.includes("ecommerce")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname.includes("ecommerce") ? "" : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center hover:text-violet-500">
                            <img src="https://cdn.prod.website-files.com/6565124c786d4f76eddcae02/656cbb9198a3f4facf74b08b_image%20365.svg" className={`shrink-0 fill-current ${pathname.includes('mycywift') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16">
                             
                            </img>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              My Cywift
                            </span>
                          </div>
                          {/* Icon */}
                         
                        </div>
                      </a>
                   
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Community */}
              <SidebarLinkGroup activecondition={pathname.includes("community")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname.includes("community") ? "" : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                         <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">compliance</span>
            </h3>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center hover:text-violet-500">
                            <div className={`shrink-0 fill-current`} width="16" height="16" >
                             <RiFileList2Fill />
                            </div>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Controls Library
                            </span>
                          </div>
                          {/* Icon */}
                         
                        </div>
                      </a>
                   
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Finance */}
              <SidebarLinkGroup activecondition={pathname.includes("finance")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname.includes("finance") ? "" : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center hover:text-violet-500">
                            <div className={`shrink-0 fill-current`} width="16" height="16">
                             <LuFramer />
                            </div>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Frameworks
                            </span>
                          </div>
                          {/* Icon */}
                         
                        </div>
                      </a>
                     
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Job Board */}
              <SidebarLinkGroup activecondition={pathname.includes("job")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname.includes("job") ? "" : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center hover:text-violet-500">
                            <div className={`shrink-0 fill-current `} width="16" height="16" >
                            <RiBookLine />
                            </div>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Evidence Pool
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <div className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 $`}>
                             
                            </div>
                          </div>
                        </div>
                      </a>
                     
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Tasks */}
              <SidebarLinkGroup activecondition={pathname.includes("tasks")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname.includes("tasks") ? "" : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center hover:text-violet-500">
                            <div className={`shrink-0 fill-current `} width="16" height="16" >
                            <CiCloud />
                            </div>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Automation Plugins
                            </span>
                          </div>
                          {/* Icon */}
                         
                        </div>
                      </a>
                     
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-[18px] mt-2">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Risk</span>
            </h3>
              {/* Messages */}
              <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("messages") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
                <NavLink
                  end
                  to="https://cruip.com/mosaic/"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("messages") ? "" : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center hover:text-violet-500">
                      <div className={`shrink-0 fill-current `} width="16" height="16">
                        <MdInfoOutline />
                      </div>
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Risk Management
                      </span>
                    </div>
                    {/* Badge */}
                  
                  </div>
                </NavLink>
              </li>
              {/* Inbox */}
              <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("inbox") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
                <NavLink
                  end
                  to="https://cruip.com/mosaic/"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("inbox") ? "" : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center hover:text-violet-500">
                    <div className={`shrink-0 fill-current`} width="16" height="16">
                      <MdOutlineInventory2 />
                    </div>
                    <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Asset Inventory</span>
                  </div>
                </NavLink>
              </li>
              {/* Calendar */}
              <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-[18px] mt-2">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Governance</span>
            </h3>
              <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("calendar") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
                <NavLink
                  end
                  to="https://cruip.com/mosaic/"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("calendar") ? "" : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center mt-2 hover:text-violet-500">
                    <div className={`shrink-0 fill-current`} width="16" height="16" viewBox="0 0 16 16">
                      <PiNotepadThin />
                    </div>
                    <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Policy
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Campaigns */}
              <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("campaigns") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
                <NavLink
                  end
                  to="https://cruip.com/mosaic/"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("campaigns") ? "" : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center hover:text-violet-500">
                    <div className={`shrink-0 fill-current`} width="16" height="16" viewBox="0 0 16 16">
                        <VscWorkspaceTrusted />
                    </div>
                    <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Trust Center
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Settings */}
           
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
            </h3>
            <ul className="mt-3">
              {/* Authentication */}
              <SidebarLinkGroup>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${open ? "" : "hover:text-gray-900 dark:hover:text-white"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center hover:text-violet-500">
                            <div className={`shrink-0 fill-current`} width="16" height="16">
                              <RiThunderstormsLine />
                            </div>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            Integrations
                            </span>
                          </div>
                          {/* Icon */}
                        
                        </div>
                      </a>
                  
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Onboarding */}
              <SidebarLinkGroup>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${open ? "" : "hover:text-gray-900 dark:hover:text-white"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center hover:text-violet-500">
                            <div className={`shrink-0 fill-current`} width="16" height="16" viewBox="0 0 16 16">
                              <IoSettingsOutline className=""/>
                            </div>
                            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Settings
                            </span>
                          </div>
                          {/* Icon */}
                         
                        </div>
                      </a>
                    
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Components */}
             
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
