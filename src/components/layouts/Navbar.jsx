import { Link, NavLink } from "react-router-dom"
import Image from './../utilities/Image';
import Logo from '../../../src/assets/images/logo.png'




const Navbar = () => {
  return (
    <>
      <nav className="py-[30px]">
        <div className="max-w-container mx-auto">

          <div className="flex justify-between items-center ">
            <div>
              <Link to="/">
                <Image source={Logo} alt="logo.png" />
              </Link>
            </div>

            <div>
              <ul className="flex gap-x-[40px]">
                <li>
                  <NavLink className="text-[14px] text-[#767676] font-normal capitalize hover:text-[#262626] transition-all duration-300 [&.active]:text-red-700 font-dm" to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink className="text-[14px] text-[#767676] font-normal capitalize hover:text-[#262626] transition-all duration-300 [&.active]:text-red-700 font-dm" to="/shop">Shop</NavLink>
                </li>

                <li>
                  <NavLink className="text-[14px] text-[#767676] font-normal capitalize hover:text-[#262626] transition-all duration-300 [&.active]:text-red-700 font-dm" to="/about">About</NavLink>
                </li>

                <li>
                  <NavLink className="text-[14px] text-[#767676] font-normal capitalize hover:text-[#262626] transition-all duration-300 [&.active]:text-red-700 font-dm" to="/contact">Contacts</NavLink>
                </li>

                <li>
                  <NavLink className="text-[14px] text-[#767676] font-normal capitalize hover:text-[#262626] transition-all duration-300 [&.active]:text-red-700  font-dm" to="/journal">Journal</NavLink>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
