import ProductCart from '../product/ProductCart';
import SectionTitle from './../utilities/SectionTitle';
import productImage1 from '../../../src/assets/images/newArrivalsImg1.png'
import productImage2 from '../../../src/assets/images/newArrivalsImg2.png'
import productImage3 from '../../../src/assets/images/newArrivalsImg3.png'
import productImage4 from '../../../src/assets/images/newArrivalsImg4.png'



const NewArrivals = () => {
  return (
    <>
      <section className='pb-[128px]'>
        <div className="max-w-container mx-auto">
          <SectionTitle className="font-dm text-[#262626] font-bold text-[39px]" text="New Arrivals" />

          {/* Products Cart Start Here */}
          <div className='grid grid-cols-4 gap-10 mt-12'>
            <ProductCart productImage={productImage1} productName="Basic Crew Neck Tee" productPrice="44" discount="false" isNew={false} />
            <ProductCart productImage={productImage2} productName="Basic Crew Neck Tee" productPrice="44" discount="false" isNew={true} />
            <ProductCart productImage={productImage3} productName="Basic Crew Neck Tee" productPrice="44" discount="false" isNew={false} />
            <ProductCart productImage={productImage4} productName="Basic Crew Neck Tee" productPrice="44" discount="false" isNew={true} />
          </div>
          {/* Products Cart End Here */}

        </div>
      </section>
    </>
  )
}

export default NewArrivals
