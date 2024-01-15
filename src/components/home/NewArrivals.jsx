import ProductCart from '../product/ProductCart';
import SectionTitle from './../utilities/SectionTitle';


const NewArrivals = () => {
  return (
    <>
      <section className='pb-[128px]'>
        <div className="max-w-container mx-auto">
          <SectionTitle className="font-dm text-[#262626] font-bold text-[39px]" text="New Arrivals" />

          {/* Products Cart Start Here */}
          <div className='grid grid-cols-4 gap-10 mt-12'>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
          {/* Products Cart End Here */}

        </div>
      </section>
    </>
  )
}

export default NewArrivals
