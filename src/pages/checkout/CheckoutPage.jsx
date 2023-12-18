import BreadCrumb from "../../components/utilities/BreadCrumb"
import Paragraph from './../../components/utilities/Paragraph';
import Input from './../../components/utilities/Input';
import { useState } from "react";


const CheckoutPage = () => {

  let pathname = window.location.href;
  let pathArray = pathname.split("/");
  let finalPath = pathArray[pathArray.length - 1];

  let [couponShow, setCouponShow] = useState(false)

  let countries = ['Bangladesh', 'India', 'Nepal', 'Pakistan', 'Thailan'];



  return (
    <>
      <section className="pt-[124px] pb-[140px]">
        <div className="max-w-container mx-auto">

          <div className="w-[1057px]">

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


            {/* form Start here */}
            <div>
              <h3 className="mt-[120px] checkoutHeading">Billing Details</h3>
              <form className="mt-[42px]">

                <div className="flex gap-x-[40px] items-center">
                  <div className="w-1/2">
                    <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">First Name *</label>
                    <input className="checkoutInput" type="text" placeholder="First Name" name="firstName" />
                  </div>

                  <div className="w-1/2">
                    <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Last Name *</label>
                    <input className="checkoutInput" type="text" placeholder="Last Name" name="lastName" />
                  </div>
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Company Name (Optional)</label>
                  <input className="checkoutInput" type="text" placeholder="Company Name" name="companyName" />
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Country *</label>
                  <select className="w-full border-b-[1px] pt-[10px] pb-4 border-[#F0F0F0] outline-none " name="country">
                    {
                      countries.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))
                    }
                  </select>
                  {/* <input className="w-full border-b-[1px] pt-[10px] pb-4 border-red-600 outline-none " type="text" placeholder="Country" name="country" /> */}
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Street Address *</label>
                  <input className="checkoutInput" type="text" placeholder="House Number and Street Name" name="streetAddress" />
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">City/Town *</label>
                  <input className="checkoutInput" type="text" placeholder="City/Town" name="cityTown" />
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Country (Optional)</label>
                  <input className="checkoutInput" type="text" placeholder="Country (Optional)" name="countryOptional" />
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Post Code *</label>
                  <input className="w-full border-b-[1px] pt-[10px] pb-4 border-[#F0F0F0] outline-none " type="number" placeholder="Post Code" name="postCode" />
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Phone *</label>
                  <input className="checkoutInput" type="number" placeholder="Phone" name="phone" />
                </div>

                <div className="w-full mt-6">
                  <label className="text-base text-[#262626] leading-[23px] font-dm font-bold">Email Address *</label>
                  <input className="checkoutInput" type="email" placeholder="Email" name="emailAddress" />
                </div>

              </form>

              <h3 className="checkoutHeading">Additional Information</h3>
              <div className="mt-[42px]">
                <label className="font-bold text-[#262626] text-[16px] leading-[27px]">Other Notes (optional)</label>
                <textarea className="resize-none overflow-hidden block w-full h-[138px] mt-[10px] border-b-[1px] border-[#F0F0F0] outline-none  placeholder:text-[14px] placeholder:font-normal placeholder:text-[#767676]  placeholder:font-dm " placeholder={'Notes about your order, e.g. special notes for delivery.'} />
              </div>

            </div>
            {/* form End here */}
          </div>

        </div>
      </section>
    </>
  )
}

export default CheckoutPage
