import BreadCrumb from "../../components/utilities/BreadCrumb"
import Paragraph from './../../components/utilities/Paragraph';
import Input from './../../components/utilities/Input';
import { useEffect, useState } from "react";


const CheckoutPage = () => {

  let pathname = window.location.href;
  let pathArray = pathname.split("/");
  let finalPath = pathArray[pathArray.length - 1];

  let [couponShow, setCouponShow] = useState(false)

  let countries = ['Bangladesh', 'India', 'Nepal', 'Pakistan', 'Thailan'];

  let checkoutProudct = [
    {
      id: 0,
      productName: "Apple",
      price: 250,
      quantity: 2,
    },

    {
      id: 1,
      productName: "Banna",
      price: 150,
      quantity: 3,
    }
    , {
      id: 2,
      productName: "Chicken",
      price: 280,
      quantity: 4,
    }

  ]


  let [total, setTotal] = useState(0);

  useEffect(() => {
    for (let i = 0; i < checkoutProudct.length; i++) {
      total += checkoutProudct[i].price * checkoutProudct[i].quantity
      setTotal(total);
    }
  }, [])




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



                <div>
                  <h3 className="checkoutHeading">Additional Information</h3>
                  <div className="mt-[42px]">
                    <label className="font-bold text-[#262626] text-[16px] leading-[27px]">Other Notes (optional)</label>
                    <textarea className="resize-none overflow-hidden block w-full h-[138px] mt-[10px] border-b-[1px] border-[#F0F0F0] outline-none  placeholder:text-[14px] placeholder:font-normal placeholder:text-[#767676]  placeholder:font-dm " placeholder={'Notes about your order, e.g. special notes for delivery.'} />
                  </div>
                </div>


                {/* Start Table Here */}
                <h3 className="checkoutHeading capitalize">your order</h3>
                <table className="w-[644px] mt-10">
                  <tr>
                    <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                      <h4 className="text-[#262626] text-[16px] font-bold leading-[23px] font-dm">Product</h4>
                    </td>
                    <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                      <p className="text-[#767676] font-normal leading-[30px] text-[16px] font-dm">Total</p>
                    </td>
                  </tr>

                  <tbody>
                    {checkoutProudct.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                          <h4 className="text-[#262626] text-[16px] font-bold leading-[23px] font-dm">{item.productName} x {item.quantity}</h4>
                        </td>
                        <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                          <p className="text-[#767676] font-normal leading-[30px] text-[16px] font-dm">{item.quantity * item.price}$</p>
                        </td>

                      </tr>
                    ))
                    }
                  </tbody>

                  <tr>
                    <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                      <h4 className="text-[#262626] text-[16px] font-bold leading-[23px] font-dm">Subtotal</h4>
                    </td>
                    <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                      <p className="text-[#767676] font-normal leading-[30px] text-[16px] font-dm">{500}$</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                      <h4 className="text-[#262626] text-[16px] font-bold leading-[23px] font-dm">Total</h4>
                    </td>
                    <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                      <p className="text-[#767676] font-normal leading-[30px] text-[16px] font-dm">{total}$</p>
                    </td>
                  </tr>


                </table>
                {/* End Table Here */}



                {/*.........Bank Proceed Start Here...........*/}
                <div className="py-[32px] px-[34px] border-[1px] border-solid border-[#F0F0F0] mt-[60px] bg-[#FFF]">

                  <div className="relative">
                    <input type="radio" id="bank" name="bank_pro" value="Bank" className="peer/draft cursor-pointer accent-[#262626]" />
                    <label htmlFor="bank" className="ms-[8px] text-[#767676] text-[16px] font-bold font-dm peer-checked/draft:text-[#262626] ">Bank</label>
                    {/* pop up start*/}
                    <div className="w-[985px] bg-[#F7F8F9] text-[#767676] text-[14px] py-[19px] px-[26px]  absolute top-[65px] hidden peer-checked/draft:block before:content-[''] before:block before:absolute before:left-[35px] before:top-[-10px]
                    before:border-solid before:border-[#F7F8F9] before:border-t-0 before:border-r-[0.5px] before:border-b-[0.5px] before:border-l-[0] before:p-[10px] before:rotate-[-135deg] before:bg-[#F7F8F9]"> Pay via Bank; you can pay with your credit card if you don’t have a Bank account.
                    </div>
                    {/* pop up start */}

                  </div>

                  <div className="mt-[130px]">
                    <input type="radio" id="bank2" name="bank_pro" value="Bank 2" className="peer/draft cursor-pointer accent-[#262626]" />
                    <label htmlFor="bank2" className="ms-[8px] text-[#767676] text-[16px] font-bold font-dm peer-checked/draft:text-[#262626] ">Bank 2</label>
                    <p className="text-[#767676] font-dm text-[16px] leading-[30px] mt-[15px]">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="text-[#262626]">privacy policy</a> .</p>
                  </div>

                  <button type="submit" className="bg-[#262626] py-[16px] px-[47px]  text-[#FFFFFF] font-dm text-[14px] font-bold mt-[24px] ">Proceed to Bank</button>
                </div>
                {/*.........Bank Proceed End Here...........*/}

              </form>


            </div>
            {/* form End here */}
          </div>

        </div>
      </section>
    </>
  )
}

export default CheckoutPage
