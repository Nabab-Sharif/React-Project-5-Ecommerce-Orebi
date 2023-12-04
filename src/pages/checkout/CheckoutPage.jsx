import BreadCrumb from "../../components/utilities/BreadCrumb"
import Paragraph from './../../components/utilities/Paragraph';
import Input from './../../components/utilities/Input';
import { useState } from "react";


const CheckoutPage = () => {

  let pathname = window.location.href;
  let pathArray = pathname.split("/");
  let finalPath = pathArray[pathArray.length - 1];

  let [couponShow, setCouponShow] = useState(false)


  return (
    <>
      <section className="pt-[124px] pb-[140px]">
        <div className="max-w-container mx-auto">
          <div>
            <h3 className="text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]">Checkout</h3>
            <BreadCrumb lastPath={finalPath} />
          </div>

          {/* coupon part Start here */}
          <div className="mt-[127px] flex items-center gap-x-2">
            <Paragraph text="Have a coupon?" className="text-[#767676] text-base leading-[30px] font-dm font-normal" />
            <span onClick={() => setCouponShow(!couponShow)} className="cursor-pointer text-[#262626] text-base leading-[30px] font-dm font-medium">Click here to enter your code</span>
          </div>

          {couponShow &&
            <div className="mt-8">
              <form>
                <Input className="w-[300px] px-5 py-3 border-[1px] border-[#000]" type="text" placeholder="Enter your coupon" />
                <div className="flex items-center gap-4 mt-4">
                  <button className="px-8 py-3 bg-[#000] text-white text-base font-medium font-dm leading-normal" type="submit">Apply</button>
                  <button onClick={() => setCouponShow(false)} className="px-8 py-3 bg-red-500 text-white text-base font-medium font-dm leading-normal" type="submit">Cancel</button>
                </div>
              </form>
            </div>
          }
          {/* coupon part End here */}


        </div>
      </section>
    </>
  )
}

export default CheckoutPage
