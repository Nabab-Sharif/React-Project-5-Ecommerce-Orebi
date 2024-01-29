import { useParams } from 'react-router-dom';
import newArrivalsProduct from './../../components/dummyData/newArrivalsProduct';
import { useEffect, useState } from 'react';
import Image from './../../components/utilities/Image';


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
              [0, 1, 2, 3].map((item, index) => (
                <>
                  <div key={index} className='h-[780px] bg-slate-400 overflow-hidden' >
                    <Image className='w-full h-full object-cover' source={newSingleProduct && newSingleProduct[0].productImage} alt='img' />
                  </div>
                </>
              ))
            }
          </div>
          {/*............All Products End.............*/}


          {/*............Single Products Details Start............*/}
          <div className='mt-[50px]'>
            <h3 className='font-dm font-bold text-[#262626] capitalize text-[40px]'>{newSingleProduct && newSingleProduct[0].productName}</h3>
            <div>
              {newSingleProduct && newSingleProduct[0].discount == "false" ? (
                <span className='text-[#262626] text-xl font-dm font-bold mt-5'>{newSingleProduct && newSingleProduct[0].productPrice}</span>
              ) : (
                <>
                  <del className='text-[#767676] text-xl font-dm font-bold mt-5'>{newSingleProduct && newSingleProduct[0].productPrice}</del>
                  <span className='text-[#262626] text-xl font-dm font-bold ml-5 mt-5'>
                    {
                      Math.floor(newSingleProduct && newSingleProduct[0].productPrice - parseInt(newSingleProduct && newSingleProduct[0].discount) * parseInt(newSingleProduct && newSingleProduct[0].productPrice) / 100)
                    }
                  </span>
                </>
              )}
            </div>
            {newSingleProduct && newSingleProduct[0].color == 'false' ? ("") : (
              <div className='mt-7'>
                <span className='font-dm font-bold text-[#262626] text-lg'>Color: {newSingleProduct && newSingleProduct[0].color} </span>
              </div>
            )}

            <div className='mt-7'>
              <span className='font-dm font-bold text-[#262626] text-lg'>Status:{" "}
                {newSingleProduct && newSingleProduct[0].stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
          {/*............Single Products Details End..............*/}

        </div>
      </div>
    </>
  )
}

export default SingleProduct
