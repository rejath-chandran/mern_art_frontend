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
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
// } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
function AdmInDashBoard() {
  let state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <>
      <div className="col-span-10 ">
        {/* navbar */}
        <div className="bg-white h-[10vh]  max-sm:w-screen">
          {/* large screen */}
          <div className="max-sm:hidden flex justify-between  h-full">
            <div className="p-1 mx-4 bg-[#F4F4F4] rounded-md self-center">
              <h1>DASHBOARD</h1>
            </div>

            <div className=" flex justify-between cursor-pointer">
              <div className="self-center bg-blue-500 px-6 py-1  rounded-md  text-white mr-3 font-thin hover:bg-blue-400">
                + Create{" "}
              </div>

              <BiMessageDetail className="self-center h-6 w-6 mx-4 hover:bg-gray-200 rounded-md" />
              <FaBell className="self-center h-6 w-6 mx-4" />
              <img
                className="self-center h-8 w-8 mx-4 rounded-full"
                src={"http://placekitten.com/g/300/300"}
              />
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
                    <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-4 p-2">
                      <option selected>Today</option>
                      <option value="">This Month</option>
                      <option value="">Last Month</option>
                    </select>
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
                            <span className="font-thin p-1 text-sm">Posts</span>
                            <CiCircleInfo className="inline-block text-sm" />
                          </div>

                          <strong className="font-bold text-4xl">540</strong>
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
                            <span className="font-thin p-1 text-sm">Ads</span>
                            <CiCircleInfo className="inline-block text-sm" />
                          </div>

                          <strong className="font-bold text-4xl">540</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 px-2 bg-white">
                  <h4 className="font-thin">
                    Your Last post was on 12-03-2024
                  </h4>
                  <div className=" mx-6 font-bold text-sm p-2 bg-gray-100 hover:bg-gray-200  rounded-md cursor-pointer">
                    View
                  </div>
                </div>

                <div className="grid grid-cols-12 bg-white sm:pb-6 max-sm:pb-12">
                  <div className="col-span-5 grid  grid-cols-12 py-1 ">
                    <div className="col-span-4 h-16">
                      <img
                        className="mx-2 h-full rounded-lg"
                        src="http://placekitten.com/g/300/300"
                        alt=""
                      />
                    </div>
                    <div className="max-sm:mx-4  h-16  col-span-8">
                      <h3 className="font-bold text-sm">
                        sample heading qwerty
                      </h3>
                      <span className="font-thin text-sm">simple head</span>
                    </div>
                  </div>

                  <div className="col-span-5 grid  grid-cols-12 py-1 ">
                    <div className="col-span-4 h-16">
                      <img
                        className="mx-2 h-full rounded-lg"
                        src="http://placekitten.com/g/300/300"
                        alt=""
                      />
                    </div>
                    <div className="max-sm:mx-4 h-16  col-span-8">
                      <h3 className="font-bold text-sm">
                        sample heading qwerty
                      </h3>
                      <span className="font-thin text-sm">simple head</span>
                    </div>
                  </div>

                  <div className="col-span-2 h-16 p-2  w-16">
                    <div className="flex h-full justify-center items-center bg-slate-300 rounded-full">
                      <IoIosArrowRoundForward className="text-3xl" />
                    </div>
                    <label className="font-thin text-sm">View all</label>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="bg-slate-100 py-1 w-full">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="line"
                  width="100%"
                />
              </div>

              <div className="grid grid-rows-12 bg-white p-5 rounded-lg mt-5">
                <div className="row-span-4 text-lg  font-bold">
                  <span className="bg-blue-200  px-2 mx-2 rounded-md"></span>
                  Get more customers!
                </div>

                <div className="row-span-4 px-5 pr-12 font-thin max-sm:text-sm">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>

                <div className="row-span-4 flex justify-between px-8 py-2 w-full cursor-pointer">
                  <div className="mx-3 text-black w-full  bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none border-black  border-2 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between">
                    <span>
                      <SlSocialFacebook className="inline-block mx-1" />
                      Facebook
                    </span>
                  </div>

                  <div className="mx-3 text-black w-full  bg-white hover:bg-gray-200  focus:ring-4 focus:outline-none border-2 border-black focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between">
                    <span>
                      <FaInstagram className="inline-block mx-1" />
                      Instagram
                    </span>
                  </div>

                  <div className="text-black w-full  bg-white hover:bg-gray-200 border-2 border-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between">
                    <span>
                      <SlSocialTwitter className="inline-block mx-1" />
                      Twitter
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="max-sm:hidden">share news</div> */}
            </div>
            <div className="sm:col-span-4 h-[90vh] w-full ml-3">
              <div className="w-full grid grid-rows-12 bg-white">
                <div className="mt-8 mx-4 flex justify-start items-center">
                  <div>
                    <span className="bg-blue-100 px-1 text-xl rounded-md mx-3"></span>
                    <span className="text-xl font-medium">Popular News</span>
                  </div>
                </div>

                <div className="border-2 border-y-indigo-100 mx-6 border-x-0 h-full ">
                  //from here
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmInDashBoard;
