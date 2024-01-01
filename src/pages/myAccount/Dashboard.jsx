
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div>
        <p className="mb-[45px] text-[#767676] text-[16px] font-dm font-normal leading-[30px]">Hello <span className="text-[#262626] cursor-pointer">admin</span> (not <span className="text-[#262626] cursor-pointer">admin</span>? <Link to="/" className="text-[#262626] cursor-pointer">Log out</Link>)</p>
        <p className="text-[#767676] text-[16px] font-dm font-normal leading-[30px]">From your account dashboard you can view your <span className="text-[#262626]cursor-pointer">recent orders</span>, manage your <span className="text-[#262626] cursor-pointer">shipping and billing addresses</span>, and <span className="text-[#262626] cursor-pointer">edit your password and account details.</span></p>
      </div>
    </>
  )
}

export default Dashboard
