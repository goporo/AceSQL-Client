import ButtonZoomShadow from 'components/animation/ButtonZoomShadow'
import UiButton from 'components/common/ui/UiButton/UiButton'
import UiImage from 'components/common/ui/UiImage/UiImage'
import UiModal from 'components/common/ui/UiModal/UiModal'
import UiSpinning from 'components/common/ui/UiSpinning/UiSpinning'
import NotFound from 'pages/404/NotFound'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetailRequest } from 'requests/product.request'

const ProductDetail = () => {
  const [response, setResponse] = useState([])
  const [fetchLoading, setFetchLoading] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { productId } = useParams()

  useEffect(() => {
    const handleFetchProjectDetail = async () => {
      if (fetchLoading) return
      setFetchLoading(true)
      try {
        const fetchResult = await getProductDetailRequest({
          id: productId,
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

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  // temp return in case product not found
  if (fetchError) return <NotFound />

  return (
    <div className='w-[1366px] '>
      <UiModal
        visible={isModalVisible}
        onConfirm={handleCloseModal}
        onclose={handleCloseModal}
        onCancel={handleCloseModal}
        headerTitle="Modal Title"
      >
        <h1>
          Nhập thông tin đăng ký bảo hiểm
        </h1>
        <div className='mt-5'>
          <form className="max-w-md p-6 bg-white rounded-md ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

          </form>
        </div>
      </UiModal>

      {!fetchLoading ? (
        <div className="m-8 bg-white p-12 shadow-sm min-w-[400px] overflow-hidden">
          <h2>ProductDetail</h2>

          <pre className=' whitespace-pre-wrap'>{JSON.stringify(response, null, 2)}</pre>
          <div className="flex justify-center flex-row">
            <ButtonZoomShadow
              onClick={() => {
                setIsModalVisible(!isModalVisible)
              }}
            >
              Enroll Now
            </ButtonZoomShadow>
          </div>
        </div>
      ) : (
        <UiSpinning />
      )}
    </div>
  )
}

export default ProductDetail
