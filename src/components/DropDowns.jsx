import { useCallback, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import RiskTrendChart from "./chart";

const boxNames = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'] 



const DropDowns = ({
    controlInfo,
    RiskSummery,
    ProbabilityAssessment,
    RiskTreatment
}) => {
    const [dropOpenState, setDropOpenState] = useState(
        boxNames.reduce((acc, boxName) => ({ ...acc, [boxName]: true }), {})
      );
      const handleDropToggle = useCallback((boxName) => {
        setDropOpenState(prev => ({
          ...prev,
          [boxName]: !prev[boxName]
        }));
      }, []);
      const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10));
  };
    return (
        <div className='h-full animate-slide-up w-[90%] max-sm:w-[80%] max-sm:ml-[50px] pb-4 pt-2 mx-auto mt-2 dark:bg-gray-700 rounded-lg flex flex-col'>
            <div className="flex items-center gap-6 font-bold pl-2 h-auto py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto dark:bg-gray-900 mt-2 relative max-w-[95%]"  >
                {
                   dropOpenState["box1"] ? (
                    <>
                   <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-[10%]">
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box1")} />
                    <h1 className=" font-bold">Control Information</h1>
                    </div>
                   
                    </>
                   ) : (
                    <>
                   <div className="transition-all ease-out duration-500 translate-y-0">
                  <div className="absolute top-2 left-2 flex items-center gap-2 font-bold text-lg">
                  <FaAngleDown className="text-[12px] max-sm:text-[9px] cursor-pointer" onClick={() => handleDropToggle("box1")}/>
                  <h1 className=" max-sm:text-base">Control Information</h1>
                  </div>
                  <div className=" h-6 w-6 border border-gray-500 cursor-pointer text-sm absolute top-2 right-2 rounded-full flex items-center justify-center">
                  <GrEdit className=" text-gray-500"/>
                  </div>
                    <div className="flex flex-wrap items-center mt-6 gap-8 ml-6 pb-2">
                      <div className="flex flex-col gap-4 w-[30vw] max-sm:mt-3">
                      <div className="flex items-center gap-12 mt-2">
                        <div className="h-auto">
                         <h3 className="flex text-[12px] font-bold">Risk Title<span className=" text-red-600">*</span></h3>
                         <span className="text-[14px]">{controlInfo.RiskTitle}</span>
                            </div>                       
                        <div className="h-auto">
                        <h3 className="flex text-[12px] font-bold">Risk Category</h3>
                        <span className=" text-[14px]">{controlInfo.RiskCategory}</span>
                        </div>
                        </div>
                     
                       
                        <div className="flex items-center gap-[180px] max-sm:gap-[100px]">
                       <div className=" h-auto">
                        <h3 className="flex text-[12px] font-bold">Risk Code</h3>
                        <span className="text-[14px]">{controlInfo.RiskCode}</span>
                        </div>
                        <div className="h-auto max-sm:-ml-8">
                        <h3 className="flex text-[12px] font-bold">Vulnarability</h3>
                        <span className=" text-[14px]">{controlInfo.Vulnerability}</span>
                        </div>
                       </div>
                       <div className="flex items-center ml-12 max-sm:ml-0 max-sm:flex-col gap-[170px] max-sm:gap-2">
                        <div className="h-auto -ml-12">
                        <h3 className="flex text-[12px] font-bold">Threat</h3>
                        <span className=" text-[14px]">{controlInfo.Threat}</span>
                        </div>
                       <div className="h-auto max-sm:ml-[90px]">
                        <h3 className="flex text-[12px] font-bold">Supporting Documents</h3>
                        <input type="file" className="text-[14px] max-sm:mt-1 max-sm:text-[10px]"/>
                        </div>
                       </div>
                      </div>
                       <div className="">
                        <h3 className="flex text-[12px] font-bold">Control Description<span className=" text-red-600">*</span></h3>
                        <div className=" h-auto w-[25vw] max-sm:w-[50vw] border border-black text-sm p-2 rounded-lg ">
                        <p>{controlInfo.ControlDescription}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </>
                   ) 
                }
                
               
            </div>
            <div className="flex items-center gap-6  relative font-bold pl-2 h-auto py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto dark:bg-gray-900 bg-white mt-2">
            {
                   dropOpenState["box2"] ? (
                    <>
                   <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-[10%]">

                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box2")} /> 
                        <h1 className=" font-bold">Risk Summary</h1>
                    </div>
                        </>
                   ): (

                    <>
                   <div className="transition-all ease-out duration-500 translate-y-0">

                 
                   <div className="absolute top-2 left-2 flex items-center gap-6 font-bold text-lg">

                    <FaAngleDown className="text-[12px] max-sm:text-[8px] cursor-pointer" onClick={() => handleDropToggle("box2")}/>
                    <h1 className=" max-sm:text-sm">Risk Summary</h1>
                    </div>
                    <div className="flex gap-4 mt-8 pl-4 max-sm:flex-wrap">
                       <div>
                      <div className=" mt-4">
                      <h3 className="text-[14px] font-bold mb-2">Risk Calculation</h3>
                     
                      </div>
                        <div className="flex justify-center gap-0 max-sm:-ml-3">
                        <div className=" h-32 w-auto flex flex-col justify-center gap-1">
                           <div className=" h-20 w-20 border-[8px] max-sm:h-12 max-sm:border-[3px] max-sm:text-[10px] max-sm:w-12   rounded-full border-red-600 flex items-center justify-center">$ {RiskSummery.PredictedRisk}m</div>
                           <span className=" text-base max-sm:text-[8px]">Predicted Risk</span>
                           </div>
                           <div className=" h-32 w-auto -ml-12 max-sm:mt-2 max-sm:-ml-8">
                           <div className="h-20 w-20 flex items-center justify-center">=</div>
                           </div>
                           <div className=" h-32 w-auto flex flex-col justify-center gap-1 max-sm:-ml-6">
                            <div className=" h-20 w-20 border-[8px] max-sm:h-12 max-sm:border-[3px] max-sm:text-[10px] max-sm:w-12 rounded-full border-red-600 flex items-center justify-center">{RiskSummery.Probability}%</div>
                            <span className=" text-base max-sm:text-[8px]">Probability</span>
                            </div>
                           <div className=" h-32 w-auto -ml-4 max-sm:-ml-5 max-sm:mt-2 max-sm:text-[12px]">
                           <div className="h-20 w-20 flex items-center justify-center">X</div>
                           </div>
                           <div className=" h-32 w-auto flex flex-col justify-center gap-1 max-sm:-ml-6">
                                
                            <div className=" h-20 w-20 border-[8px] max-sm:h-12 max-sm:border-[3px] max-sm:text-[10px] max-sm:w-12 rounded-full border-red-600 flex items-center justify-center">$ {RiskSummery.InheritedRisk}m</div>
                            <span className=" text-base max-sm:text-[8px]">Inherited Risk</span>
                            </div>
                        </div>
                       </div>
                       <div className=" max-sm:-mt-6 max-sm:-ml-2">
                     <div className="flex items-center justify-between">
                     <h2 className="text-[14px] max-sm:text-[10px] font-semibold">Risk Trend</h2>
                     <div className=" text-[14px] max-sm:text-[10px] font-semibold">W M Q Y</div>
                     </div>
                       <RiskTrendChart />
                       </div>
                    </div>
                    </div>
                        </>
                   ) }
                
            </div>
            <div className="flex items-center gap-6  font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto dark:bg-gray-900 bg-white mt-2">
            {
                   dropOpenState["box3"] ? (
                    <>
                    <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-[10%]">

                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box3")} /> 
                        <h1 className=" font-bold">Affected Assets</h1>
                    </div>
                        </>
                   ): (

                    <>
                    <div className="flex items-center gap-5 transition-all ease-out duration-500 translate-y-0">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box3")}/>
                    <h1 className=" font-bold">Affected Assets</h1>
                    </div>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6 relative font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg dark:bg-gray-900 mx-auto bg-white mt-2">
            {
                   dropOpenState["box4"] ? (
                    <>
                       <div className="transition-all ease-in duration-500 flex items-center gap-6 translate-y-[10%]">
                      
                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box4")} /> 
                        <h1 className=" font-bold">Probability Assessment</h1>
                    </div>
                        </>
                   ): (

                    <>
                    <div className="transition-all ease-out duration-500 translate-y-0">
                        <div className=" flex items-center gap-6 absolute top-2 max-sm:-ml-2 left-2">
                        <FaAngleDown className="text-[12px] cursor-pointer max-sm:text-[10px]" onClick={() => handleDropToggle("box4")}/>
                        <h1 className=" font-bold text-lg max-sm:text-sm whitespace-nowrap">Probability Assessment</h1>
                        </div>
                   
                        <div className="relative pt-1 mt-8 ml-2">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="w-[50vw] h-2 max-sm:h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-600 px-2 mt-2">
            <span>0%</span>
            <span>{value}%</span>
          </div>
        </div>
                    </div>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6 relative font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg dark:bg-gray-900 mx-auto bg-white mt-2 ">
            {
                   dropOpenState["box5"] ? (
                    <>
                    <div className="transition-all ease-in duration-500 flex items-center gap-6 translate-y-[10%]">

                    <FaAngleRight className="text-[12px] cursor-pointer max-sm:text-[10px]" onClick={() => handleDropToggle("box5")} /> 
                        <h1 className=" font-bold">Risk Treatment</h1>
                    </div>
                        </> 
                   ): (

                    <>
                    <div className="transition-all ease-out duration-500 translate-y-0">

                    <div className=" flex items-center gap-6 absolute top-2 left-2  ">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box5")}/>
                    <h1 className=" font-bold text-lg max-sm:text-[16px]">Risk Treatment</h1>
                   </div>
                    
                    <div className=" mt-8 pt-1 ml-9 ">
                      <h3 className=" font-bold text-white text-sm max-sm:text-[12px]">Select Treatment</h3>
                     <select className=" h-10 w-[80%] text-black max-sm:h-8 max-sm:w-[40vw] max-sm:text-[12px] border rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>Treatment-1</option>
                      <option>Treatment-2</option>
                      <option>Treatment-3</option>
                     </select>
                     <div className=" border border-gray-300 w-[80%] max-sm:w-[40vw] mt-4"></div>
                    </div>
                    <div className="flex items-center justify-between w-[80%] max-sm:w-[40vw] max-sm:flex-wrap mt-3 pt-1 ml-9">
                      <div className="w-full">
                      <h3 className=" font-bold text-sm max-sm:text-[12px]">Risk Owners</h3>
                     <select className=" h-10 w-[70%] text-black border max-sm:h-8 max-sm:text-[10px] max-sm:w-[40vw] rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>{RiskTreatment.RiskOwner}</option>
                      <option>Owner-2</option>
                      <option>Owner-3</option>
                     </select>
                     <div className=" h-8 w-[150px] max-sm:h-6 max-sm:w-[120px] text-black border cursor-pointer border-black mt-4 rounded-[16px] bg-gray-200 flex items-center ">
                      <div className=" h-8 w-8 max-sm:h-6 max-sm:w-6 max-sm:text-base bg-black rounded-full text-white flex items-center justify-center text-[24px]">
                        <CiUser />
                      </div>
                      <h4 className="text-[12px] font-bold ml-1 max-sm:text-[8px]">{RiskTreatment.RiskOwner}</h4>
                     </div>
                      </div>
                      <div className="max-sm:mt-2 w-full">
                      <h3 className=" font-bold text-sm max-sm:text-[12px]">Risk Reviewers</h3>
                     <select className=" h-10 w-[70%] text-black border max-sm:h-8 max-sm:text-[10px] max-sm:w-[40vw] rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>{RiskTreatment.RiskReviewer}</option>
                      <option>Reviewer-2</option>
                      <option>Reviewer-3</option>
                     </select>
                     <div className=" h-8 w-[150px] max-sm:h-6 max-sm:w-[120px] border cursor-pointer text-black border-black mt-4 rounded-[16px] bg-gray-200 flex items-center ">
                      <div className=" h-8 w-8 max-sm:h-6 max-sm:w-6 max-sm:text-base bg-black rounded-full text-white flex items-center justify-center text-[24px]">
                        <CiUser />
                      </div>
                      <h4 className="text-[12px] font-bold ml-1 max-sm:text-[8px]">{RiskTreatment.RiskReviewer}</h4>
                     </div>
                      </div>
                    </div>
                      <div className=" border border-gray-300 w-[75%] max-sm:w-[40vw] mt-4 ml-9"></div>
                      <div className=" mt-3 pt-1 ml-9">
                      <h3 className=" font-bold text-sm max-sm:text-[12px]">Controls Mapping</h3>
                     <select className=" h-10 w-[80%] text-black max-sm:h-8 max-sm:text-[10px] max-sm:w-[40vw] border rounded-lg border-gray-500 bg-gray-200 outline-none mt-2 px-4 text-sm">
                      <option>Mapping-1</option>
                      <option>Mapping-2</option>
                      <option>Mapping-3</option>
                     </select>
                    
                    </div>
                    <div className="flex items-center text-black">

                    <div className=" h-6 max-sm:h-4 max-sm:w-16 w-24 border ml-9 border-black mt-4 rounded-[16px] bg-green-400 flex items-center justify-between ">
                     
                      <h4 className="text-sm max-sm:text-[10px] font-bold ml-1">{RiskTreatment.OwnerId}</h4>
                      <RxCrossCircled  className=" text-gray-800 mr-1 cursor-pointer text-[12px]"/>
                     </div>
                    <div className=" h-6 w-24 max-sm:h-4 max-sm:w-16 border ml-9 er border-black mt-4 rounded-[16px] bg-green-400 flex items-center justify-between ">
                     
                      <h4 className="text-sm max-sm:text-[10px] font-bold ml-1">{RiskTreatment.RiskId}</h4>
                      <RxCrossCircled  className=" text-gray-800 mr-1 cursor-pointer text-[12px]"/>
                     </div>
                    </div>
                    <div className=" mt-3 pt-1 ml-9 w-full">
                    <h3 className=" font-bold text-sm max-sm:text-[12px]">Controls Weightage</h3>
                   <div className="grid grid-cols-3 max-sm:grid-cols-2 items-center gap-8 max-sm:gap-2 text-sm max-sm:text-[10px] mt-2">
                   <div className="font-bold">
                      <h3 >{RiskTreatment.OwnerId}</h3>
                      <div className="text-black h-6 w-28 max-sm:h-4 max-sm:w-16 font-bold rounded mt-2 bg-gray-300 flex items-center justify-center">{RiskTreatment.OwnerValue}%</div>
                    </div>
                   <div className="font-bold">
                      <h3>{RiskTreatment.RiskId}</h3>
                      <div className="text-black h-6 w-28 max-sm:h-4 max-sm:w-16 font-bold rounded mt-2 bg-gray-300 flex items-center justify-center">
                        {RiskTreatment.ReviewerValue}%</div>
                    </div>
                   <div className="font-bold">
                      <h3>Residual Risk</h3>
                      <div className="text-black h-6 w-28 max-sm:h-4 max-sm:w-16 font-bold rounded mt-2 bg-gray-300 flex items-center justify-center">
                        {ProbabilityAssessment.Probability}%</div>
                    </div>
                   </div>
                   <div className=" border border-gray-300 w-[50vw] max-sm:w-[40vw] mt-4"></div>
                   <div className=" mt-4"></div>
                    </div>

                    </div>
                        </>
                   ) }
            </div>
            <div className="flex items-center gap-6  font-bold pl-2 h- py-2 w-[95%] max-sm:w-[85%] max-sm:text-sm rounded-lg text-lg mx-auto dark:bg-gray-900 bg-white mt-2">
            {
                   dropOpenState["box6"] ? (
                    <>
                  <div className="transition-all ease-out duration-500 translate-y-[10%] flex items-center gap-5">

                    <FaAngleRight className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box6")} /> 
                        <h1 className=" font-bold">Notes & Comments</h1>
                    </div>
                        </>
                   ): (

                    <>
                     <div className="transition-all ease-out duration-500 translate-y-0 flex items-center gap-5">

                    <FaAngleDown className="text-[12px] cursor-pointer" onClick={() => handleDropToggle("box6")}/>
                    <h1 className=" font-bold">Notes & Comments</h1>
                    </div>
                        </>
                   ) }
            </div>
        </div>
    )
}

export default DropDowns;
