import ProductCart from '../product/ProductCart';
import SectionTitle from './../utilities/SectionTitle';
import productImage1 from '../../../src/assets/images/newArrivalsImg1.png'
import productImage2 from '../../../src/assets/images/newArrivalsImg2.png'
import productImage3 from '../../../src/assets/images/newArrivalsImg3.png'
import productImage4 from '../../../src/assets/images/newArrivalsImg4.png'



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
  ]





  return (
    <>
      <section className='pb-[128px]'>
        <div className="max-w-container mx-auto">
          <SectionTitle className="font-dm text-[#262626] font-bold text-[39px]" text="New Arrivals" />

          {/* Products Cart Start Here */}
          <div className='grid grid-cols-4 gap-10 mt-12'>

            {
              allProduct.map((item, index) => (
                <ProductCart key={index} productImage={item.productImage} productName={item.productName} productPrice={item.productPrice} discount={item.discount} isNew={item.isNew} color={item.color} />
              ))
            }

          </div>
          {/* Products Cart End Here */}

        </div>
      </section>
    </>
  )
}

export default NewArrivals
