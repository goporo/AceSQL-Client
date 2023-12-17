import React, { useState, useEffect } from 'react'
import { getProductsRequest } from 'requests/product.request'
import WipeImage from 'components/animation/WipeImage'
import UiSpinning from 'components/common/ui/UiSpinning/UiSpinning'
import UiImage from 'components/common/ui/UiImage/UiImage'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons'

const KhiCanMinhCoNhau = () => {
    const [response, setResponse] = useState([])
    const [fetchLoading, setFetchLoading] = useState(false)

    useEffect(() => {
        const handleFetchProjects = async () => {

            if (fetchLoading) return



            setFetchLoading(true)
            try {
                const fetchResult = await getProductsRequest()
                const data = fetchResult?.data
                setResponse(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            } finally {
                setFetchLoading(false)
            }
        }

        handleFetchProjects()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    {/* <ProductItem response={response} fetchLoading={fetchLoading} /> */ }

    return (
        <div className="px-12 -mt-12">

            {/* hero section */}
            <div className="flex flex-col gap-6 pb-40 items-center">
                <div className='relative'>
                    <WipeImage>
                        <UiImage
                            src="/assets/images/banner/khi-can-minh-co-nhau.jpg"
                            alt="banner"
                            height={560}
                            width={1366}
                        />
                    </WipeImage>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 100, y: 0 }}
                        transition={{
                            duration: .5,
                            ease: 'easeInOut',
                            delay: 0.5,
                        }}
                        className='w-[566px] bg-white py-8 px-10 absolute rounded-lg shadow-md right-[110px] -bottom-[76px]'
                    >
                        <div className='text-[48px] leading-[56px] font-bold'>Khi Cần</div>
                        <div className='text-[48px] text-primary'>Mình Có Nhau</div>
                        <div>Chúng ta luôn muốn mình là chỗ dựa khi người thân cần đến. Đó là động lực để ta chủ động chuẩn bị kế hoạch bảo vệ gia đình.</div>

                    </motion.div>
                </div>
            </div>

            {/* text section */}
            <div className='text-[18px] text-center max-w-[900px] px-4 m-auto pb-[100px]'>
                <p className='mb-5'>Khi chúng ta có sự chuẩn bị từ sớm, thì sẽ không còn những sự lựa chọn khó khăn giữa hy vọng và tuyệt vọng, không phải cân nhắc những gì còn lại trong tay để nghĩ cho an sinh của những người thân yêu nếu chẳng may bản thân gặp chuyện.</p>
                <p>Tương lai của người thân yêu vẫn được bảo vệ. Chúng ta vẫn có thể chăm lo, gắn bó dài lâu trong mối quan hệ với gia đình, dù mình còn bên cạnh hay đã vắng mặt.</p>
            </div>

            {/* trailer */}
            <div className='relative mb-[140px] flex flex-row justify-center'>
                <UiImage
                    src="https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/chien-dich-thuong-hieu/2023/khi-can-minh-co-nhau-966x543.jpg"
                    alt="banner"
                    height={543}
                    width={966}
                    imageClassName={'m-auto'}
                />
                <motion.button
                    transition={{
                        duration: .75,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                    animate={{ y: [200, -20], opacity: [0, 1.00] }}
                    onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                    className='bg-primary w-[70px] h-[70px] flex items-center justify-center absolute left-1/2 top-1/2 rounded-full text-white transform origin-center'
                >
                    <FontAwesomeIcon icon={faPlay} className='text-white w-7 h-7 ml-1' />
                </motion.button>
            </div>

        </div>
    )
}

export default KhiCanMinhCoNhau
