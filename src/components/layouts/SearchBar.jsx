import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Cart from "../Cart";
import { useEffect, useRef, useState } from "react";
import UserAccount from "../UserAccount";



const SearchBar = () => {

  let [showCart, setShowCart] = useState(false);
  let cartref = useRef();

  let [showUserAccount, setShowUserAccount] = useState(false);
  let userAccountRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {

      if (cartref.current.contains(e.target)) {
        setShowCart(true);
      } else {
        setShowCart(false)
      }

      if (userAccountRef.current.contains(e.target)) {
        setShowUserAccount(true);
      } else {
        setShowUserAccount(false);
      }

    })
  }, []);

  // let handleCart = () => {
  //   if (showCart) {
  //     setShowCart(false);
  //   } else {
  //     setShowCart(true);
  //   }
  // }


  return (
    <>
      <div className="bg-[#F5F5F3] py-[25px]">
        <div className="max-w-container mx-auto">

          <div className="flex justify-between">

            {/* left part sidebar */}
            <div className="flex gap-x-[10px] items-center cursor-pointer ">
              <HiMiniBars3 />
              <span className="font-dm text-[14px] capitalize font-normal">shop by category</span>
            </div>

            {/* middle part search field */}
            <div className="w-[600px] relative">
              <search>
                <input className="py-4 px-5 w-full pr-10" placeholder="Search Product" />
              </search>
              <IoIosSearch className="absolute right-4 top-[50%] translate-y-[-50%] text-2xl" />
            </div>

            {/* right part userAccount and cart */}
            <div className="flex items-center gap-x-10">

              <div ref={userAccountRef} className="relative">
                <div className="flex items-center gap-x-[10px] cursor-pointer">
                  <FaUser className="text-xl text-[#262626]" />
                  <FaCaretDown onClick={() => setShowUserAccount(!showUserAccount)} />
                </div>

                {showUserAccount && <UserAccount />}

              </div>

              <div ref={cartref} className="cursor-pointer relative">
                <FaCartPlus onClick={() => setShowCart(!showCart)} className="text-2xl text-[#262626]" />
                {
                  showCart && <Cart />
                }
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default SearchBar
