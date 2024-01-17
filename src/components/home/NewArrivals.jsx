import ProductCart from '../product/ProductCart';
import SectionTitle from './../utilities/SectionTitle';
import productImage1 from '../../../src/assets/images/newArrivalsImg1.png'
import productImage2 from '../../../src/assets/images/newArrivalsImg2.png'
import productImage3 from '../../../src/assets/images/newArrivalsImg3.png'
import productImage4 from '../../../src/assets/images/newArrivalsImg4.png'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const NewArrivals = () => {

  let allProduct = [
    {
      id: 0,
      productName: "Basic Crew Neck Tee",
      productPrice: 44,
      productImage: productImage1,
      isNew: "true",
      discount: "false",
      color: "black"
    },
    {
      id: 1,
      productName: "Watch",
      productPrice: 340,
      productImage: productImage2,
      isNew: "false",
      discount: 15,
      color: 'false'
    },
    {
      id: 2,
      productName: "Basic Crew Neck Tee",
      productPrice: 54,
      productImage: productImage3,
      isNew: "true",
      discount: "false",
      color: 'red'
    },
    {
      id: 3,
      productName: "Basic Crew Neck Tee",
      productPrice: 74,
      productImage: productImage4,
      isNew: "false",
      discount: 20,
      color: 'false'
    }
    ,
    {
      id: 4,
      productName: "Basic Crew Neck Tee",
      productPrice: 54,
      productImage: productImage2,
      isNew: "false",
      discount: 20,
      color: 'false'
    }
    ,
    {
      id: 5,
      productName: "Basic Crew Neck Tee",
      productPrice: 94,
      productImage: productImage3,
      isNew: "false",
      discount: 20,
      color: 'false'
    }
  ]





  return (
    <>
      <section className='pb-[128px]'>
        <div className="max-w-container mx-auto">
          <SectionTitle className="font-dm text-[#262626] font-bold text-[39px]" text="New Arrivals" />
          <div className='relative'>

            {/* Products Cart Start Here */}
            <Swiper
              spaceBetween={40}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: ".slidenext",
                prevEl: ".slideprev",
                disabledClass: "swiper-button-disabled"
              }}

              modules={[Navigation]}
            >

              {
                allProduct.map((item, index) => (
                  <SwiperSlide key={index} >
                    <ProductCart productImage={item.productImage} productName={item.productName} productPrice={item.productPrice} discount={item.discount} isNew={item.isNew} color={item.color} />
                  </SwiperSlide>
                ))
              }


            </Swiper>
            {/* Products Cart End Here */}

            {/* Swiper Slide custom icon Part Start */}
            <div className='slideprev px-3 py-3 inline-block bg-[#979797] rounded-full cursor-pointer z-40 absolute bottom-[57%] '>
              <HiArrowNarrowLeft className='text-white text-[20px]' />
            </div>
            <div className='slidenext px-3 py-3 inline-block bg-[#979797] rounded-full cursor-pointer z-40 absolute  right-0 bottom-[57%]'>
              <HiArrowNarrowRight className='text-white text-[20px]' />
            </div>
            {/* Swiper Slide custom icon Part End */}

          </div>
        </div>
      </section>
    </>
  )
}

export default NewArrivals
