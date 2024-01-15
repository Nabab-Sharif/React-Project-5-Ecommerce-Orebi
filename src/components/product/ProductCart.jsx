import Image from './../utilities/Image';
import { FaHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from 'react';



const ProductCart = ({ productImage, productName, productPrice, discount, isNew }) => {


  let [newProduct, setNewProduct] = useState(false);

  useEffect(() => {
    if (isNew) {
      setNewProduct(true)
    } else {
      setNewProduct(false);
    }
  }, [isNew])


  return (
    <>
      <div>

        <div className="h-[370px] bg-emerald-400 relative group overflow-hidden shadow-lg">
          <Image source={productImage} alt="newArrivalsImg1.png" className="w-full h-full object-cover" />

          {newProduct &&

            <span className='px-8 py-2 bg-[#262626] text-white font-dm text-xs font-bold absolute left-4 top-4'>New</span>
          }


          {/*.......Image hover popup Part Start........*/}
          <div className='w-full h-[200px] bg-white absolute left-0 bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 p-[30px]'>
            <ul className='flex flex-col gap-y-5'>
              <li className='inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                <span className='font-dm text-[#767676] text-base font-normal leading-normal capitalize hover:text-black'>add to wish list</span>
                <FaHeart className='text-[19px] text-[#262626]' />
              </li>

              <li className='inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                <span className='font-dm text-[#767676] text-base font-normal leading-normal capitalize hover:text-black'>Compare</span>
                <TbRefresh className='text-[19px] text-[#262626]' />
              </li>

              <li className='inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                <span className='font-dm text-[#767676] text-base font-normal leading-normal capitalize hover:text-black'>Add to Cart</span>
                <FaShoppingCart className='text-[19px] text-[#262626]' />
              </li>
            </ul>
          </div>
          {/*........Image hover popup Part End.........*/}
        </div>

        <div className='mt-6 flex justify-between'>
          <h5 className='font-dm text[#262626] text-xl font-bold capitalize'>{productName}</h5>
          <span className='font-dm text-[#767676] text-base font-normal leading-[30px]'>${productPrice}</span>
        </div>

      </div>

    </>
  )
}

export default ProductCart
