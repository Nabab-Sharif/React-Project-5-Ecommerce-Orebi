import { useParams } from 'react-router-dom';
import newArrivalsProduct from './../../components/dummyData/newArrivalsProduct';
import { useEffect, useState } from 'react';
import Image from './../../components/utilities/Image';
import { FaStar } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";



const SingleProduct = () => {

  const { id } = useParams();
  const [newSingleProduct, setNewSingleProduct] = useState('');


  useEffect(() => {
    setNewSingleProduct(newArrivalsProduct.filter(checkProductId));

    function checkProductId(productId) {
      return id == productId.id;
    }

  }, [id]);



  return (
    <>
      <div className='py-[100px]'>
        <div className='max-w-container mx-auto'>
          {/*............All Products Start............*/}
          <div className='grid grid-cols-2 gap-10'>
            {
              newArrivalsProduct.map((item, index) => (
                <>
                  <div key={index} className='h-[780px] bg-slate-400 overflow-hidden' >
                    <Image className='w-full h-full object-cover' source={item.productImage} alt='img' />
                  </div>
                </>
              ))
            }
          </div>
          {/*............All Products End.............*/}


          {/*............Single Products Details Start............*/}
          <div className='mt-[50px]'>
            <h3 className='font-dm font-bold text-[#262626] capitalize text-[40px]'>{newSingleProduct && newSingleProduct[0].productName}</h3>
            {/*.................Review Part Start...............*/}
            <div className='flex gap-x-[25px] items-center mb-[24px] mt-[15px] '>
              <div className='flex gap-x-1'>
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
              </div>
              <div>
                <p className='text-[#767676] font-dm text-[14px] font-normal leading-normal'>1 Review</p>
              </div>
            </div>
            {/*.................Review Part End...............*/}


            <div>
              {newSingleProduct && newSingleProduct[0].discount == "false" ? (
                <span className='text-[#262626] text-xl font-dm font-bold mt-5'>{newSingleProduct && newSingleProduct[0].productPrice}</span>
              ) : (
                <>
                  <del className='text-[#767676] text-xl font-dm font-bold mt-5'>${newSingleProduct && newSingleProduct[0].productPrice}</del>
                  <span className='text-[#262626] text-xl font-dm font-bold ml-5 mt-5'>$
                    {
                      Math.floor(newSingleProduct && newSingleProduct[0].productPrice - parseInt(newSingleProduct && newSingleProduct[0].discount) * parseInt(newSingleProduct && newSingleProduct[0].productPrice) / 100)
                    }
                  </span>

                </>
              )}
              <div className='bg-[#F0F0F0] h-[1px] w-[780px] mt-[24px] mb-[31px]'></div>
            </div>
            {/* Color Part */}
            {newSingleProduct && newSingleProduct[0].color == 'false' ? ("") : (
              <div className=''>
                <p className='font-dm font-bold text-[#262626] text-lg uppercase'>Color: <span className='ml-[40px] lowercase'>{newSingleProduct && newSingleProduct[0].color}</span> </p>
              </div>
            )}

            {/* Size Part */}
            <div className='relative mt-[39px]'>
              <label htmlFor="size" className='text-[#262626] text-[16px] font-bold leading-[23px] font-dm uppercase'>Size:</label>
              <select name="size" id="size"
                className="appearance-none bg-white border-[1px] border-[#F0F0F0] px-[23px] w-[139px] h-[36px] ml-[76px] focus:outline-none">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="xl">XL</option>
              </select>
              <div className="pointer-events-none absolute top-[50%] translate-y-[-50%] left-[210px] flex items-center text-gray-700">
                <AiFillCaretDown className="w-4 h-4" />
              </div>

            </div>

            {/* Quantity Part */}
            <div className='flex gap-x-[20px] mt-[43px] items-center'>
              <h3 className='font-dm font-bold text-[#262626] text-lg uppercase'>QUANTITY:  </h3>
              <div className='w-[139px] h-[36px] border-[1px] border-[#F0F0F0] px-[23px] py-[3px] flex justify-between items-center' >
                <button className='text-[#767676] text-[16px] font-dm font-normal leading-[30px]'>-</button>
                <span>1</span>
                <button className='text-[#767676] text-[16px] font-dm font-normal leading-[30px]'>+</button>
              </div>

            </div>
            <div className='mt-7'>
              <p className='font-dm font-bold text-[#262626] text-lg  uppercase'>Status:{" "}
                <span className='ml-[38px] text-[#767676] capitalize'> {newSingleProduct && newSingleProduct[0].stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
            </div>
            <div className='bg-[#F0F0F0] h-[1px] w-[780px] mt-[24px] mb-[31px]'></div>
            {/* Add to Cart Part */}
            <div className='flex gap-x-[20px]'>
              <button className='py-[16px] px-[41px] text-[#FFFFFF] text-[14px] font-bold font-dm bg-[#262626] border-[1px] border-[#262626] hover:bg-transparent hover:text-[#262626]'>Add to Wish List</button>
              <button className='py-[16px] px-[41px] text-[#FFFFFF] text-[14px] font-bold font-dm bg-[#262626] border-[1px] border-[#262626] hover:bg-transparent hover:text-[#262626]'>Add to Cart</button>
            </div>
            <div className='bg-[#F0F0F0] h-[1px] w-[780px] mt-[30px] mb-[31px]'></div>

            <div className='flex justify-between w-[780px] items-center'>
              <p className='text-[#262626] text-[16px] font-dm font-bold leading-[23px]'>FEATURES & DETAILS</p>
              <button>+</button>
            </div>
            <div className='bg-[#F0F0F0] h-[1px] w-[780px] mt-[30px] mb-[31px]'></div>

            <div className='flex justify-between w-[780px] items-center'>
              <p className='text-[#262626] text-[16px] font-dm font-bold leading-[23px]'>SHIPPING & RETURNS</p>
              <button>+</button>
            </div>
            <div className='bg-[#F0F0F0] h-[1px] w-[780px] mt-[30px] mb-[31px]'></div>

            <div>
              <p className='text-[#767676] text-[16px] font-dm leading-[30px] w-[780px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

          </div>
          {/*............Single Products Details End..............*/}

        </div>
      </div>
    </>
  )
}

export default SingleProduct
