import React, { useCallback, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io";
import { IoDownloadOutline, IoSearchOutline } from "react-icons/io5";
import DropDowns from "../components/DropDowns";
import Banner from '../partials/Banner';
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';
const boxNames = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8']
function Dashboard() {
  const [dropOpenState, setDropOpenState] = useState(
    boxNames.reduce((acc, boxName) => ({ ...acc, [boxName]: false }), {})
  );
  const handleDropToggle = useCallback((boxName) => {
    setDropOpenState(prev => ({
      ...prev,
      [boxName]: !prev[boxName]
    }));
  }, []);
  const [checkboxes, setCheckboxes] = useState({
    selectAll: false,
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
  });

  
 
  const handleSelectAll = useCallback(() => {
    setCheckboxes(prev => {
      const newSelectAllState = !prev.selectAll;
      return Object.keys(prev).reduce((acc, key) => {
        acc[key] = newSelectAllState;
        return acc;
      },{});
    });
  }, []);
  const handleSingleCheck = useCallback((boxName) => {
    setCheckboxes(prev => {
      const newState = { ...prev, [boxName]: !prev[boxName] };
      const allChecked = Object.entries(newState)
        .filter(([key]) => key !== 'selectAll')
        .every(([, value]) => value);
      return { ...newState, selectAll: allChecked };
    });
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-100 font-bold">Risk Management</h1>
              </div>
              {/* Right: Actions */}
              {/* <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
               
                <FilterButton align="right" />
                
                <Datepicker align="right" />
                
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="max-xs:sr-only">Add View</span>
                </button>                
              </div> */}

            </div>

    
            <div className="flex gap-10 w-full">

            <div className="flex h-[93vh] mt-2 gap-2 max-sm:-ml-8 w-full">
      <div className="filter-container h-[676px] w-[150px] max-sm:w-[100px] max-sm:h-[512px] dark:text-white  bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-lg">
      <div className="flex items-center h-[42px] w-full bg-black rounded-lg cursor-pointer max-sm:text-sm">
       <HiOutlineAdjustmentsVertical className=" text-white ml-2" />
       <span className=" ml-10 text-white font-[300] text-[16px] max-sm:text-[10px] max-sm:ml-2 text-opacity-90">All Risks</span>
      </div>
      <div className="flex flex-col gap-3 mt-2 ml-3">
        <h1 className=" text-[17px] max-sm:text-[12px] font-medium cursor-pointer hover:text-violet-500 py-[6px] w-full pl-2 -ml-2 hover:transition-all hover:duration-300">Treatment</h1>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Accepted</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Mitigate</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Avoided</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Transferred</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Needs Treatment</span>
        <div className=" border w-32 border-gray-300 mr-2"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ml-3">
        <h1 className=" text-[17px] max-sm:text-[12px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300">Assessment</h1>
       
        <span className=" text-[13px] font-medium cursor-pointer max-sm:text-[9px] hover:text-violet-500 hover:transition-all hover:duration-300">Scored</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Not Scored</span>
        <div className=" border w-32 border-gray-300 mr-2"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ml-3">
        <h1 className=" text-[17px] max-sm:text-[12px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300">Category</h1>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Assessment</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Audits</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Acess Control</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Asset Management</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Governance</span>
        <span className=" text-[13px] font-medium cursor-pointer hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[9px]">Physical Access</span>
      </div>
      </div>
      <div className="h-[704px] max-h-[673px] w-full flex flex-col gap-1">
      <div className="flex items-center justify-between h-10 py-[22px] w-full gap-2 bg-black rounded-lg max-sm:w-[310px]">
      <div className=" flex items-center">
      <label className="custom-checkbox-container text-[17px] text-white cursor-pointer flex items-center gap-2 ml-3 max-sm:ml-2 font-normal max-sm:text-[0.5rem] max-sm:w-[80px]"
      >
    <input className=' outline-none border-none' type="checkbox" onChange={handleSelectAll} name="selectAll" />
    <span>Select All</span>
    </label>
     
        <span className=" text-white cursor-pointer text-[17px] text-opacity-90 font-normal ml-10 hover:text-violet-500 hover:transition-all hover:duration-300 max-sm:text-[0.5rem] max-sm:w-[80px] max-sm:-ml-[22px]">Risk Register</span>
        <div className=" border border-r-[1px] ml-2 h-4 opacity-85 max-sm:h-2 max-sm:-ml-[22px]"></div>
        <span className=" text-white cursor-pointer text-[17px] font-normal ml-4 hover:text-violet-500 hover:transition-all hover:duration-300 text-opacity-90 max-sm:text-[0.5rem] max-sm:w-[80px] max-sm:ml-2">Risk Library</span>
        </div>
        <div className=' pr-2'>
        <div className=" h-8 w-[545px] max-w-md mx-auto ml-5 max-sm:ml-4 flex items-center gap-2 max-sm:gap-3 max-sm:h-6 max-sm:w-[150px]">
          <div className=" h-8 rounded-md w-[540px] flex items-center gap-2 text-white max-sm:gap-0  ml-8 max-sm:-ml-[50px] max-sm:h-5 max-sm:w-[95px] relative">
          <IoSearchOutline className=" text-base ml-2 max-sm:text-[8px] z-10 max-sm:ml-1 absolute left-1"/>
          <input type="text" className=" w-full outline-none px-4 bg-inherit py-1 text-[12px] placeholder-gray-300 max-sm:text-[5px] rounded-md font-light pr-[9px] max-sm:-ml-3 pl-8" placeholder="Search by Risk name or code" >
          </input>
          </div>
          <div className=" text-white text-opacity-90 ml-4 max-sm:-ml-[5px] cursor-pointer max-sm:text-[14px] hover:text-violet-500">
          <IoDownloadOutline />
          </div>
        </div>
        </div>
       
    
      </div>

     
      <div className="">
      <div className="register-container-1 h-auto max-sm:w-[342px] max-sm:-ml-8 w-full dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-lg mt-1 pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box1"]} onChange={()=>handleSingleCheck("box1")} />
    
    </label>
    {dropOpenState["box1"] ? (
                    <div className=" flex items-center gap-5">

                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box1")}
                      />
                      
                      </div>
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl max-sm:text-sm cursor-pointer" 
                      onClick={() => handleDropToggle("box1")}
                    />
                  )}
      
      <div className="flex flex-col gap-[4px] mt-3 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Unauthorized System Access</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className=" text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-1</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className=" text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-2</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className=" text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-3</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-4 max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-red-400 w-7 text-red-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">25</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">10</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-yellow-400 w-24 text-yellow-400 mr-4 max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-yellow-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Mitigate</span>
    </div>
    <div className=" text-green-500 mr-2 cursor-pointer max-sm:text-sm max-sm:-ml-4 max-sm:-mt-1">
    <FaUser />
    </div>
    </div>
    </div>
    <div className={`${dropOpenState["box1"]? " mt-4" : ""}`}>
     {dropOpenState["box1"] ? (
        <DropDowns controlInfo={{RiskTitle:"Unauthorized System Access", RiskCategory: "Access Control", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:15, Probability:30, InheritedRisk:50}} ProbabilityAssessment={{Probability:40}}
        RiskTreatment={{Treatment:"",RiskOwner:"Eleanor Roosevelt",RiskReviewer:"Jane Austen",ControlMapping:"",OwnerId:"CyID-128",RiskId:"CyID-129",OwnerValue:25,ReviewerValue:35}}
        />
      ) : (<></>)}
   </div>
   <div className={`${dropOpenState["box1"]? " py-2 " : ""}`}></div>
    </div>
      <div className="register-container-2 h-auto w-full max-sm:w-[342px] max-sm:-ml-8 dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-2 rounded-lg pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box2"]} onChange={()=>handleSingleCheck("box2")} />

    </label>
    {dropOpenState["box2"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box2")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box2")}
                    />
                  )}
      
      <div className="flex flex-col gap-[4px] mt-3 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Weak Authentication</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center ">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-10</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-4 max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border max-sm:h-3">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4 max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-red-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Transfer</span>
    </div>
    <div className=" text-green-500 mr-2 cursor-pointer max-sm:text-sm max-sm:-ml-4 max-sm:-mt-1">
    <FaUser />
    </div>
    </div>
    </div>
    <div className={`${dropOpenState["box2"]? " mt-4" : ""}`}>
     {dropOpenState["box2"] ? (
        <DropDowns controlInfo={{RiskTitle:"Weak Authentication", RiskCategory: "Access Control", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:20, Probability:35, InheritedRisk:55}} ProbabilityAssessment={{Probability:45}}
        RiskTreatment={{Treatment:"", RiskOwner:"Leonardo da Vinci", RiskReviewer:"Marie Curie", ControlMapping:"", OwnerId:"CyID-130", RiskId:"CyID-131", OwnerValue:30, ReviewerValue:40}}
        />
      ) : (<></>)}
   </div>
   <div className={`${dropOpenState["box2"]? " py-2 " : ""}`}></div>
    </div>
      <div className=" register-container h-auto w-full max-sm:w-[342px] max-sm:-ml-8 dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-2 rounded-lg pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box3"]} onChange={()=>handleSingleCheck("box3")} />
    
    </label>
    {dropOpenState["box3"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box3")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box3")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Critical System Dependencies - DoS</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-3 max-sm:left-[6px] max-sm:text-[6px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-10</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px] max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border max-sm:h-3">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4  max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-red-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Accept</span>
    </div>
    
    </div>
    </div>
    <div className={`${dropOpenState["box3"]? " mt-4" : ""}`}>
     {dropOpenState["box3"] ? (
        <DropDowns
        controlInfo={{RiskTitle:"Critical System Dependencies - Do", RiskCategory: "Dependencies", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:25, Probability:40, InheritedRisk:60}} ProbabilityAssessment={{Probability:50}}
        RiskTreatment={{Treatment:"", RiskOwner:"Nelson Mandela", RiskReviewer:"Ada Lovelace", ControlMapping:"", OwnerId:"CyID-132", RiskId:"CyID-133", OwnerValue:35, ReviewerValue:45}}
        />
      ) : (<></>)}
   </div>
   <div className={`${dropOpenState["box3"]? " py-2 " : ""}`}></div>
      </div>
      <div className=" register-container h-auto w-full max-sm:w-[342px] max-sm:-ml-8 dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-2 rounded-lg pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box4"]} onChange={()=>handleSingleCheck("box4")} />
    
    </label>
    {dropOpenState["box4"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box4")}
                    />
                  ) : (
                   
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box4")}
                    />
                    
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Exposure - Zero-day Attack</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-10</span>
        </div>
       
      </div>
      </div>
      </div>
     
    <div className="flex items-center gap-8 mr-[70px] max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border max-sm:h-3">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4  max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-red-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Mitigate</span>
    </div>
    
    </div>
    </div>
    <div className={`${dropOpenState["box4"]? " mt-4" : ""}`}>
     {dropOpenState["box4"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Exposure - Zero-day Attack", RiskCategory: "Exposure Attack", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:30, Probability:45, InheritedRisk:65}} ProbabilityAssessment={{Probability:55}}
        RiskTreatment={{Treatment:"", RiskOwner:"Rosa Parks", RiskReviewer:"Mahatma Gandhi", ControlMapping:"", OwnerId:"CyID-134", RiskId:"CyID-135", OwnerValue:40, ReviewerValue:50}}
        />
      ) : (<></>)}
   </div>
   <div className={`${dropOpenState["box4"]? " py-2 " : ""}`}></div>
      </div>
      <div className=" register-container h-auto w-full max-sm:w-[342px] max-sm:-ml-8 dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-2 rounded-lg pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box5"]} onChange={()=>handleSingleCheck("box5")} />
    
    </label>
    {dropOpenState["box5"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box5")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box5")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Physical Security - Theft</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-10</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px] max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border max-sm:h-3">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4  max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-red-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Transfer</span>
    </div>
    
    </div>
    </div>

    <div className={`${dropOpenState["box5"]? " mt-4" : ""}`}>
     {dropOpenState["box5"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Physical Security - Theft", RiskCategory: "Privacy", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:35, Probability:50, InheritedRisk:70}} ProbabilityAssessment={{Probability:60}}
        RiskTreatment={{Treatment:"", RiskOwner:"Malala Yousafzai", RiskReviewer:"Abraham Lincoln", ControlMapping:"", OwnerId:"CyID-136", RiskId:"CyID-137", OwnerValue:45, ReviewerValue:55}}
        />
      ) : (<></>)}
   </div>
   <div className={`${dropOpenState["box5"]? " py-2 " : ""}`}></div>
      </div>
      <div className=" register-container h-auto w-full max-sm:w-[342px] max-sm:-ml-8 dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-2 rounded-lg pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box6"]} onChange={()=>handleSingleCheck("box6")} />
    
    </label>
    {dropOpenState["box6"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box6")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box6")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Business Continuity - Lack of Contingency</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-10</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px] max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border max-sm:h-3">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4 max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-red-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Mitigate</span>
    </div>
    
    </div>
    </div>
    <div className={`${dropOpenState["box6"]? " mt-4" : ""}`}>
     {dropOpenState["box6"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Business Continuity - Lack of Contingency", RiskCategory: "Business Continuity", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:40, Probability:55, InheritedRisk:75}} ProbabilityAssessment={{Probability:65}}
        RiskTreatment={{Treatment:"", RiskOwner:"Marie Curie", RiskReviewer:"Albert Einstein", ControlMapping:"", OwnerId:"CyID-138", RiskId:"CyID-139", OwnerValue:50, ReviewerValue:60}}
        />
      ) : (<></>)}
   </div>
   <div className={`${dropOpenState["box6"]? " py-2 " : ""}`}></div>
      </div>
      <div className=" register-container h-auto w-full max-sm:w-[342px] max-sm:-ml-8 dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-2 rounded-lg pb-2">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box7"]} onChange={()=>handleSingleCheck("box7")} />
    
    </label>
    {dropOpenState["box7"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box7")}
                    />
                  ) : (
                    <IoIosArrowDropright
                      className="mt-2 text-xl cursor-pointer max-sm:text-sm" 
                      onClick={() => handleDropToggle("box7")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Risky Software Supply Chain</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-4</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-5</span>
        </div>
        <div className=" h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-10</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px] max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border max-sm:h-3">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4  max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-red-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Avoid</span>
    </div>
    
    </div>
    </div>
    <div className={`${dropOpenState["box7"]? " mt-4" : ""}`}>
     {dropOpenState["box7"] ? (
        <DropDowns
        controlInfo={{RiskTitle:"Risky Software Supply Chain", RiskCategory: "Software Risk", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:45, Probability:60, InheritedRisk:80}} ProbabilityAssessment={{Probability:70}}
        RiskTreatment={{Treatment:"", RiskOwner:"William Shakespeare", RiskReviewer:"Florence Nightingale", ControlMapping:"", OwnerId:"CyID-140", RiskId:"CyID-141", OwnerValue:55, ReviewerValue:65}}
        />
      ) : (<></>)}
   </div>
   <div className={`${dropOpenState["box7"]? " py-2 " : ""}`}></div>
      </div>
      <div className=" register-container h-auto w-full max-sm:w-[342px] max-sm:-ml-8 dark:text-white border border-teal-300 hover:transition-all hover:duration-300 hover:shadow-even hover:shadow-teal-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-2 rounded-lg">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <label className="custom-checkbox-container text-white cursor-pointer max-sm:text-sm flex ml-10 mt-2 font-normal text-sm">
    <input type="checkbox" checked={checkboxes["box8"]} onChange={()=>handleSingleCheck("box8")} />
    
    </label>
    {dropOpenState["box8"] ? (
                    <IoIosArrowDropdown 
                      className="mt-2 text-xl cursor-pointer max-sm:text-2xl" 
                      onClick={() => handleDropToggle("box8")}
                    />
                  ) : (
                    <IoIosArrowDropright 
                      className="mt-2 text-xl cursor-pointer max-sm:text-2xl" 
                      onClick={() => handleDropToggle("box8")}
                    />
                  )}
      <div className="flex flex-col gap-[2px] mt-2 ml-1">
      <span className=" font-semibold pb-1 max-sm:text-[7px]">Network Management - Advance Persistence Threats</span>
      <div className="flex gap-[6px] max-sm:gap-[3px]">
        <div className="h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-4</span>
        </div>
        <div className="h-5 w-16 rounded-lg bg-teal-200 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-5</span>
        </div>
        <div className="h-5 w-16 rounded-lg bg-red-400 relative max-sm:h-3 max-sm:w-8 flex items-center justify-center">
          <span className="text-black text-[10px] absolute left-4 top-[2px] max-sm:left-[6px] max-sm:text-[6px]">CyD-10</span>
        </div>
       
      </div>
      </div>
      </div>
    <div className="flex items-center gap-8 mr-[70px] max-sm:-mt-1 max-sm:gap-3 max-sm:ml-2">
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-yellow-400 w-7 text-yellow-400 max-sm:h-3 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border">15</div>
    <div className="flex items-center justify-center border-2 h-5 rounded-md text-sm border-gray-500 w-7 text-gray-500 max-sm:w-4 max-sm:rounded-sm max-sm:text-[8px] max-sm:border max-sm:h-3">-</div>
    <div className="flex gap-2 items-center justify-center border-2 h-7 rounded-md text-sm border-red-400 w-24 text-red-400 mr-4 max-sm:border max-sm:h-5 max-sm:w-16 max-sm:text-[10px]">
      <div className=" h-3 w-3 rounded-full bg-red-400 max-sm:h-[6px] max-sm:w-[6px]"></div>
      <span>Mitigate</span>
    </div>
    </div>
    </div>
    <div className={`${dropOpenState["box8"]? " mt-4" : ""}`}>
     {dropOpenState["box8"] ? (
        <DropDowns 
        controlInfo={{RiskTitle:"Network Management - Advance Persistence Threats", RiskCategory: "Network", ControlDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", RiskCode: "RM-001", Vulnerability: "Weak Authentication", Threat: "Espionage"}}
        RiskSummery={{PredictedRisk:50, Probability:65, InheritedRisk:85}} ProbabilityAssessment={{Probability:75}}
        RiskTreatment={{Treatment:"", RiskOwner:"Stephen Hawking", RiskReviewer:"Jane Goodall", ControlMapping:"", OwnerId:"CyID-142", RiskId:"CyID-143", OwnerValue:60, ReviewerValue:70}}
        />
      ) : (<></>)}
   </div>
     <div className={`${dropOpenState["box8"]? " py-3 " : " py-2"}`}></div>
      </div>
      </div>
      <div className="flex justify-between mt-1">
        <div className=" h-10 w-20 rounded-lg text-gray-400 bg-white text-[12px] text-center flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-10 max-sm:rounded-sm">
          <span>8/page</span>
        </div>
        <div className="flex gap-2">
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm"><FaLessThan className=" ml-1" /><FaLessThan className=" mr-[6px]" /></div>
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm"><FaLessThan /></div>
          <div className=" h-10 w-10 rounded-md text-white cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm text-[10px] flex items-center justify-center bg-gray-500">1</div>
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm">2</div>       
             <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm">3</div>      
                 <div className=" h-10 w-10 rounded-md bg-white text-[22px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm">...</div> 
                          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm">10</div> 
                                   <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm"><FaGreaterThan /></div>
          <div className=" h-10 w-10 rounded-md bg-white text-[10px] flex items-center justify-center cursor-pointer max-sm:text-[8px] max-sm:h-4 max-sm:w-4 max-sm:rounded-sm"><FaGreaterThan className=" ml-1" /><FaGreaterThan className=" mr-[6px]" /></div>
        </div>
      </div>
      </div>
    </div>
              
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;