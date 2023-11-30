
import Paragraph from './../utilities/Paragraph';
import Input from './../utilities/Input';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <>
      <section className="pt-20 pb-[140px]">
        <div className="max-w-container mx-auto">
          <span className="text-[200px] font-dm font-bold text-[#262626]">404</span>
          <Paragraph className="w-[644px] text-base font-normal font-dm text-[#767676] leading-[30px]" text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?" />

          <form className='w-[643px] mt-[50px]'>
            <div className='relative'>
              <Input className="p-5 w-full border-[1px] border-[#F0F0F0]" type="text" placeholder="Type to Search" />
              <IoIosSearch className='absolute right-[21px] top-[50%] translate-y-[-50%] text-2xl' />
            </div>
          </form>
          <Link to="/" className='bg-[#262626] text-white py-4 px-14 inline-block mt-[60px] text-sm font-dm font-bold'>Back to Home</Link>
        </div>
      </section>
    </>
  )
}

export default Error
