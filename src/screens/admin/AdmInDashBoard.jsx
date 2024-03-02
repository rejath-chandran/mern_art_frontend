import { CiSearch } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import { MdPostAdd } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { TbWaveSine } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { GoStack } from "react-icons/go";
import { ImNewspaper } from "react-icons/im";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { RiUploadCloudLine } from "react-icons/ri";
import {WhatsappIcon,WhatsappShareButton} from "react-share"
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
// } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { AdminDashoard } from "../../services/AdminQry";
import { NavLink } from "react-router-dom";
function AdmInDashBoard() {
  const dash=AdminDashoard()
  
  return (
    <>
      {
        dash.isLoading?<>loading...</>:<>
        <div className="col-span-10 ">
        {/* navbar */}
        <div className="bg-white h-[10vh]  max-sm:w-screen">
          {/* large screen */}
          <div className="max-sm:hidden flex justify-between  h-full">
            <div className="p-1 mx-4 bg-[#F4F4F4] rounded-md self-center">
              <h1 className="text-xl font-bold">DASHBOARD</h1>
            </div>

            <div className=" flex justify-between cursor-pointer">
            </div>
          </div>
          {/* mobile screen */}
          <div className="sm:hidden  w-full h-full flex justify-around items-center text-2xl  cursor-pointer">
            <TbMenu className=" hover:bg-slate-100 rounded-full" />
            <CiSearch />
            <BiMessageDetail />
            <BiBell />
          </div>
        </div>
        {/* content */}
        <div className="h-[90vh] bg-[#F4F4F4]  max-sm:w-screen overflow-y-auto">
          <h1 className="py-8 pl-8 text-2xl text-black font-bold">
            {"Analytics".toUpperCase()}
          </h1>
          <div className="grid  grid-cols-1 gap-2  sm:grid-cols-12">
            <div className="h-full px-4 sm:col-span-8  ">
              {/* overviw */}
              <div className="grid grid-cols-1 w-full my-1">
                <div className="flex justify-between items-center bg-white  ">
                  <div>
                    <span className="bg-orange-400 w-3 p-1 mx-2 rounded h-full"></span>
                    <span className="font-bold">Overview</span>
                  </div>
                  <div className="h-full mx-5">
                    <div className="p-8">
                      
                    </div>
                  </div>
                </div>

                <div className="w-full bg-white">
                  <div className="grid grid-cols-12 bg-[#F4F4F4] mx-3 rounded-xl">
                    <div className="col-span-6 ml-1">
                      <div className="grid grid-cols-12 gap-2 bg-white shadow-lg w-full my-2 mx-1 py-4 rounded-lg">
                        <div className="col-span-2">
                          <div className="ml-2 flex justify-center items-center bg-blue-200 rounded-full w-8 h-8">
                            <MdPostAdd className="self-center" />
                          </div>
                        </div>
                        <div className="mx-1 col-span-10">
                          <div>
                            <span className="font-thin p-1 text-sm">TOTAL COLLECTION</span>
                            <CiCircleInfo className="inline-block text-sm" />
                          </div>

                          <strong className="font-bold text-4xl">{dash.data.count_product}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="grid grid-cols-12 gap-2  w-full my-2 mx-1 py-4 rounded-lg">
                        <div className="col-span-2">
                          <div className="ml-2 flex justify-center items-center bg-blue-200 rounded-full w-8 h-8">
                            <TbWaveSine className="self-center" />
                          </div>
                        </div>
                        <div className="mx-1 col-span-10">
                          <div>
                            <span className="font-thin p-1 text-sm">TOTAL USERS</span>
                            <CiCircleInfo className="inline-block text-sm" />
                          </div>

                          <strong className="font-bold text-4xl">{dash.data.count_user}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 px-2 bg-white">
                  <h4 className="font-thin">
                    RECENT USERS
                  </h4>
                  <div className=" mx-6 font-bold text-sm p-2 bg-gray-100 hover:bg-gray-200  rounded-md cursor-pointer">
                    
                  </div>
                </div>

                <div className="grid grid-cols-12 bg-white sm:pb-6 max-sm:pb-12">

               

                  {
                    dash.data.recent_user.map(item=>(<>
                    <div className="col-span-5 grid  grid-cols-12 py-1 ">
                    <div className="col-span-4 h-16">
                     {
                      item.image==""?<>
                       <img
                        className="mx-2 h-full rounded-lg"
                        src={'https://www.svgrepo.com/show/170303/avatar.svg'}
                        alt=""
                      />
                      
                      </>:<>
                      <img
                        className="mx-2 h-full rounded-lg"
                        src={item.image}
                        alt=""
                      />
                      
                      
                      </>
                     }
                    </div>
                    <div className="max-sm:mx-4 h-16  col-span-8">
                      <h3 className="font-bold text-sm">
                      {item.name}
                      </h3>
                      <span className="font-thin text-sm">{item.email}</span>
                    </div>
                  </div>
                    
                    
                    
                    </>))
                  }

                  <NavLink to={"/admin/users"}>
                  <div className="col-span-2 h-16 p-2  w-16">
                    <div className="cursor-pointer flex h-full justify-center items-center bg-slate-300 rounded-full">
                      <IoIosArrowRoundForward className="text-3xl" />
                    </div>
                    <label className="font-thin text-sm cursor-pointer">View all</label>
                  </div>

                  </NavLink>
                </div>
              </div>
              {/* card */}
              <div className="bg-slate-100 py-1 w-full">
                <Chart
                  options={dash.data.chart.options}
                  series={dash.data.chart.series}
                  type="line"
                  width="100%"
                />
              </div>

      
            </div>
            <div className="sm:col-span-4 h-[95vh] w-full ml-3">
              <div className="w-full grid grid-rows-12 bg-white h-full">

                <div className="mt-8 mx-4 flex row-span-1 justify-start items-center">
                  <div>
                    <span className="bg-blue-100 px-1 text-xl rounded-md mx-3"></span>
                    <span className="text-xl font-medium">EXPENSIVE COLLECTION</span>
                  </div>
                </div>

               <div className="row-span-10 bg-white flex-col p-5 overflow-auto">

               {
                dash.data.top_product.map(item=>(<>
                <div className="flex my-4 ">
                <div className="avatar">
                  <div className="w-24 rounded">
                   <img src={item.image}/>
                     </div>
                  </div>
                  <div className="grid">
                  <span className="mx-3 text-black font-bold">{item.name}</span>
                  <span className="mx-3 text-black font-medium">₹{item.price}</span>
                  <span className="mx-3 text-black">by {item.artist?.name?.toUpperCase()}</span>
                  </div>
               </div>
                
                
                </>))
               }

<div>
</div>

               </div>
                

              <div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
      }
    </>
  );
}

export default AdmInDashBoard;
