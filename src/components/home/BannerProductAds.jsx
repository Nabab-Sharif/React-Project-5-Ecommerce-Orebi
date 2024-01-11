import { Link } from 'react-router-dom';
import productAdImage1 from '../../../src/assets/svg/product_Ad1.svg';
import productAdImage2 from '../../../src/assets/svg/product_Ad2.svg';
import productAdImage3 from '../../../src/assets/svg/product_Ad3.svg';
import Image from './../utilities/Image';



const BannerProductAds = () => {
  return (
    <>
      <section className="mt-[174px] mb-[128px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 gap-x-10">

            {/* left Side  */}
            <div className="h-[780px] overflow-hidden">
              <Link to="#">
                <Image className="w-full h-full object-contain" source={productAdImage1} alt="product_Ad1.svg" />
              </Link>
            </div>

            {/* right Side  */}
            <div className="h-[780px] flex flex-col gap-y-10">
              <div className='h-[370px]'>
                <Link to="#">
                  <Image className="w-full h-full object-contain" source={productAdImage2} alt="product_Ad2.svg" />
                </Link>
              </div>
              <div className='h-[370px]'>
                <Link to="#">
                  <Image className="w-full h-full object-contain" source={productAdImage3} alt="product_Ad3.svg" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default BannerProductAds
