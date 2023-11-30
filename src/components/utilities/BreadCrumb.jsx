import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';


const BreadCrumb = ({ lastPath }) => {
  return (
    <>
      <span className=" flex items-center gap-2">
        <Link to="/" className="text-[16px] text-[#6D6D60] font-dm font-normal leading-normal">Home</Link>
        <MdOutlineChevronRight />
        <Link to="#" className="text-[16px] text-[#6D6D60] font-dm font-normal leading-normal capitalize">{lastPath}</Link>
      </span>
    </>
  )
}

export default BreadCrumb
