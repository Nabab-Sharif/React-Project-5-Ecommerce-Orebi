import { Link } from 'react-router-dom';



const UserAccount = () => {
  return (
    <>
      <div className="w-[210px] absolute right-0 mt-4 border-[1px] border-[#c3c1c1]">

        <Link to="dashboard" className="bg-white block px-[60px] py-4 text-center text-[#262626] text-[14px] font-normal font-dm capitalize transition-all duration-200 hover:bg-black hover:text-white" href="#">my account</Link>
        <Link className="bg-white block px-[60px] py-4 text-center text-[#262626] text-[14px] font-normal font-dm capitalize transition-all duration-200  hover:bg-black hover:text-white " href="#">log out</Link>

      </div>
    </>
  )
}

export default UserAccount
