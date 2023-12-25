import BreadCrumb from "../../components/utilities/BreadCrumb"
import { RxCross2 } from "react-icons/rx";
import Image from './../../components/utilities/Image';
import product1 from '../../../src/assets/images/cartProduct-1.png'
import { Link } from 'react-router-dom';


const CartPage = () => {

  let pathname = window.location.href;
  let pathArray = pathname.split("/");
  let finalPath = pathArray[pathArray.length - 1];


  return (
    <>
      <section className="pt-[124px] pb-[140px]">
        <div className="max-w-container mx-auto">
          <div>
            <h3 className="text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]">cart</h3>
            <BreadCrumb lastPath={finalPath} />
          </div>

          {/*............................Cart Table Start Here............................*/}
          <div className="mt-[136px] border border-[#F0F0F0]">

            {/* table head */}
            <div className="pt-[34px] pb-[32px] bg-[#F5F5F3] flex">
              <div className="px-5 w-[400px]">
                <h5 className="text-base font-bold font-dm text-[#262626]">Product</h5>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-base font-bold font-dm text-[#262626]">Price</h5>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-base font-bold font-dm text-[#262626]">Quantity</h5>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-base font-bold font-dm text-[#262626]">Total</h5>
              </div>

            </div>

            {/* table body */}
            <div>
              <div className="border-b border-[#F0F0F0] py-[30px] flex items-center">

                <div className="pl-5 w-[400px] flex items-center">
                  <div className="cursor-pointer text-[#262626] text-[17px]">
                    <RxCross2 />
                  </div>
                  <div className="h-[100px] w-[100px] ml-10">
                    <Image source={product1} alt="cartProduct.png" />
                  </div>
                  <div className="ml-5">
                    <h5 className="text-[#262626] text-base font-bold capitalize">Product name</h5>
                  </div>
                </div>

                <div className="px-5 w-[400px]">
                  <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold"> $44.00</h5>
                </div>

                <div className="px-5 w-[400px]">
                  <div className="border border-[#F0F0F0] h-[36px] w-[140px] px-5 flex justify-between items-center">
                    <button className="text-[#767676] text-[25px] font-dm font-normal leading-[30px]">-</button>
                    <span className="font-dm text-[18px] text-[#767676] font-normal leading-[30px]">2</span>
                    <button className="text-[#767676] text-[25px] font-dm font-normal leading-[30px]">+</button>
                  </div>
                </div>

                <div className="px-5 w-[400px]">
                  <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold"> $44.00</h5>
                </div>

              </div>
            </div>
            {/* table footer */}
            <div className="py-[34px] px-5 text-right">
              <button className="text-base capitalize text-[#ede7e7] font-dm font-bold hover:text-black hover:bg-orange-300 py-4 px-5 bg-gray-600">Update Cart</button>
            </div>

          </div>
          {/*............................Cart Table End Here..............................*/}


          {/*............................Cart Total Start Here............................*/}
          <div className="w-[646px] mt-[54px] ml-auto">
            <h5 className="text-[20px] text-[#262626] font-bold font-dm leading-normal mb-[24px] text-right">Cart totals</h5>
            <table className="w-[644px]">

              <tr>
                <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                  <h4 className="text-[#262626] text-[16px] font-bold leading-[23px] font-dm">Subtotal</h4>
                </td>
                <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                  <p className="text-[#767676] font-normal leading-[30px] text-[16px] font-dm">389.99 $</p>
                </td>
              </tr>

              <tr>
                <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                  <h4 className="text-[#262626] text-[16px] font-bold leading-[23px] font-dm">Total</h4>
                </td>
                <td className="border border-[#F0F0F0] w-1/2 py-4 px-5">
                  <p className="text-[#262626] font-normal leading-[30px] text-[16px] font-dm">389.99 $</p>
                </td>
              </tr>

            </table>
            <Link to='/checkout' className="bg-[#262626] py-[16px] pl-[31px]  text-[#FFFFFF] font-dm text-[14px] font-bold mt-[30px] block w-[200px] ml-auto">Proceed to Checkout</Link>
          </div>
          {/*............................Cart Total End Here..............................*/}

        </div>
      </section>
    </>
  )
}

export default CartPage
