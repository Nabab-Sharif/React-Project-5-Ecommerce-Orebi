import { useParams } from 'react-router-dom';



const SingleProduct = () => {

  const { id } = useParams();

  return (
    <div>
      <h2 className='text-center'>Single Product Page -- Product Id : {id} </h2>
    </div>
  )
}

export default SingleProduct
