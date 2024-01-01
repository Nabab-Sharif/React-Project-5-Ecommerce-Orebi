import BreadCrumb from "../../components/utilities/BreadCrumb"
import { Link, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Myaccount = () => {

  let pathname = window.location.href;
  let patharray = pathname.split("/");
  let finalpath = patharray[patharray.length - 1];



  return (
    <section className="mt-[124px]">
      <div className="max-w-container mx-auto">
        {/* bread crumb part Start */}
        <div className="mb-[127px]">
          <h3 className="text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]">My Account</h3>
          <BreadCrumb lastPath={finalpath} />
        </div>
        {/* bread crumb part End */}

        {/*...........my account content part Start..........*/}
        <div className="flex gap-10 justify-between mb-[140px] w-[1193px]">

          <div className="w-[234px] flex flex-col gap-y-2 ">
            <NavLink className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0] pt-0" to="dashboard">Dashboard</NavLink>
            <NavLink className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0] " to="others">Others</NavLink>
            <NavLink className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0] " to="download">Downloads</NavLink>
            <NavLink className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0] " to="address">Address</NavLink>
            <NavLink className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0] " to="accountdetails">Account Details</NavLink>
            <Link className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0] " to="/">Logout</Link>
          </div>

          <div className="w-[918px]">
            <Outlet />
          </div>

        </div>
        {/*...........my account content part End..........*/}


      </div>
    </section>
  )
}

export default Myaccount
