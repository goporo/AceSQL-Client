import UiModal from 'components/common/ui/UiModal/UiModal'
import UiSpinning from 'components/common/ui/UiSpinning/UiSpinning'
import NoItemFound from 'pages/404/NoItemFound'
import BlogCard from 'pages/blog/BlogCard'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsRequest } from 'requests/product.request'

const ProductList = () => {
  const [response, setResponse] = useState([])
  const [fetchLoading, setFetchLoading] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const { productId } = useParams()

  useEffect(() => {
    const handleFetchProjectDetail = async () => {
      if (fetchLoading) return
      setFetchLoading(true)
      try {
        const fetchResult = await getProductsRequest({
        })
        const data = fetchResult?.data
        setResponse(data)
      } catch (error) {
        console.log(error)
        setFetchError(true)
      } finally {
        setFetchLoading(false)
      }
    }

    handleFetchProjectDetail()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])


  const tempDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus dignissimos Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus dignissimos ullam aperiam ea aut vitae similique quos, totam, eum ratione animi minima rerum tenetur cupiditate repellendus facilis quia, rem est.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus dignissimos ullam aperiam ea aut vitae similique quos, totam, eum ratione animi minima rerum tenetur cupiditate repellendus facilis quia, rem est.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus dignissimos ullam aperiam ea aut vitae similique quos, totam, eum ratione animi minima rerum tenetur cupiditate repellendus facilis quia, rem est.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Necessitatibus dignissimos ullam aperiam ea aut vitae similique quos, totam, eum ratione animi minima rerum tenetur cupiditate repellendus facilis quia, rem est.'

  // temp return in case product not found
  if (fetchError) return <NoItemFound />

  return (
    <>
      {!fetchLoading ? (
        <div className=' pb-[100px] pt-[50px] max-w-[1366px]'>
          <h1 className='text-[48px] w-[600px]'>
            Vì sao chọn
            <br />
            <span className=' font-light'>
              Kế hoạch bảo vệ và chăm sóc sức khỏe?
            </span>
          </h1>
          <div className="m-8 p-12 shadow-sm min-w-[400px] overflow-hidden">
            <div className='grid grid-cols-3 -mt-36 w-fit gap-x-9 gap-y-16 pb-32 pt-40'>
              {
                response.map((data, index) => (
                  <BlogCard key={index} title={data.productName} subTitle={data.snippet} img={data.avatar}
                    desc={data.productDescription === '' ? tempDescription : data.productDescription} path={`${data.productID}`} />
                ))
              }
            </div>

          </div>
        </div>
      ) : (
        <div className='h-[calc(100vh-162px)] flex justify-center items-center'>
          <UiSpinning />
        </div>
      )}
    </>
  )
}


export default ProductList