import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { IoCaretDownCircle } from "react-icons/io5";



const SearchBar = () => {
  return (
    <>
      <div className="bg-[#F5F5F3] py-[25px]">
        <div className="max-w-container mx-auto">

          <div className="flex justify-between">

            <div className="flex gap-x-[10px] items-center cursor-pointer ">
              <HiMiniBars3 />
              <span className="font-dm text-[14px] capitalize font-normal">shop by category</span>
            </div>

            <div className="w-[600px] relative">
              <search>
                <input className="py-4 px-5 w-full pr-10" placeholder="Search Product" />
              </search>
              <IoIosSearch className="absolute right-4 top-[50%] translate-y-[-50%] text-2xl" />
            </div>

            <div className="flex items-center gap-x-10">

              <div className="flex items-center gap-x-[10px] cursor-pointer">
                <FaUser className="text-xl text-[#262626]" />
                <IoCaretDownCircle />
              </div>

              <div className="cursor-pointer">
                <FaCartPlus className="text-2xl text-[#262626]" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default SearchBar
