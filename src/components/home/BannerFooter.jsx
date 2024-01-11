import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { SlReload } from "react-icons/sl";


const BannerFooter = () => {
  return (
    <>
      <section className="border-b border-[#F0F0F0] py-[30px]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-4">
              <PiNumberTwoBold className="text-2xl" />
              <p className="text-base font-dm font-normal leading-normal text-[#6D6D6D]">Two years warranty</p>
            </div>

            <div className="flex items-center gap-x-4">
              <MdLocalShipping className="text-2xl" />
              <p className="text-base font-dm font-normal leading-normal text-[#6D6D6D]">Free shipping</p>
            </div>

            <div className="flex items-center gap-x-4">
              <SlReload className="text-2xl" />
              <p className="text-base font-dm font-normal leading-normal text-[#6D6D6D]">Return policy in 30 days</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default BannerFooter
