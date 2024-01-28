import ProductCart from '../product/ProductCart';
import SectionTitle from './../utilities/SectionTitle';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dummyProduct from '../../components/dummyData/newArrivalsProduct'


const NewArrivals = () => {



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
                dummyProduct.map((item, index) => (
                  <SwiperSlide key={index} >
                    <ProductCart productImage={item.productImage} productName={item.productName} productPrice={item.productPrice} discount={item.discount} isNew={item.isNew} color={item.color} id={item.id} />
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
