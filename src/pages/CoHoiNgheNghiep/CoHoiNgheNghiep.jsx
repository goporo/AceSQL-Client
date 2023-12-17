import WipeImage from 'components/animation/WipeImage'
import UiImage from 'components/common/ui/UiImage/UiImage'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import ButtonZoomShadow from 'components/animation/ButtonZoomShadow'

const lyDoTonTai = [
  {
    logo: 'https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/our-purpose-366x206.jpg',
    title: 'Tôn chỉ mục đích',
    desc: 'Minh chứng rõ ràng nhất cho mục đích này chính là cách chúng tôi cống hiến cho xã hội thông qua những việc mà chúng tôi làm và cách mà chúng tôi hỗ trợ lẫn nhau.',
  },
  {
    logo: 'https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/our-principle-366x206.jpg',
    title: 'Nguyên tắc',
    desc: 'Trong quá trình phát triển và tiến tới tương lai tốt đẹp hơn, cam kết của chúng tôi với tôn chỉ được đặt ra luôn kiên định: đặt khách hàng lên hàng đầu, hành động chính trực, đón đầu sự phát triển, đầu tư vào cộng đồng và hướng tới tầm nhìn dài hạn - bởi chúng tôi sẽ còn tiếp tục phát triển tại đây trong tương lai lâu dài.',
  },
  {
    logo: 'https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/co-hoi-nghe-nghiep/2021/our-value-366x206.jpg',
    title: 'Giá trị cốt lõi',
    desc: 'Thành công của chúng tôi được tạo ra từ những giá trị cốt lõi, những giá trị thể hiện sâu sắc và rõ ràng nhất chúng tôi là ai - Khát vọng, Hiếu kì, Đồng cảm, Can đảm và Sắc bén.',
  },
]

const CoHoiNgheNghiep = () => {
  return (
    <div className="min-h-screen h-full -mt-12 mb-20  flex items-center flex-col">
      <div className="flex flex-col gap-6 pb-40 items-center">

        {/* banner */}
        <div className='relative'>
          <WipeImage>
            <UiImage
              src="/assets/images/banner/living-our-purpose.jpg"
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
            <div className='text-[48px] leading-[56px] font-bold'>Tôn chỉ
              <span className='text-[48px] text-primary font-normal'> mục đích</span>
            </div>

            <p className='pt-4'>
              Tôn chỉ mục đích của Protector là giúp mọi người đạt được những điều tốt đẹp nhất trong cuộc sống. Protector mang đến giải pháp chăm sóc sức khỏe toàn diện với chi phí hợp lý, giúp bảo vệ tài chính và gia tăng tài sản, đồng thời giúp mọi người lên kế hoạch tối ưu cho các mục tiêu của cuộc đời.
            </p>

          </motion.div>
        </div>

        <div className='py-8 px-10 w-[1166px] bg-white shadow-sm rounded-lg my-36'>
          <h1 className='text-[18.67px]'>
            Chúng tôi hiện đang trong quá trình chuyển đổi kinh doanh. Thông qua tất cả những thay đổi này, chúng tôi đã xác định tôn chỉ mục đích của tập đoàn, đó là giúp mọi người đạt được những điều tốt đẹp nhất trong cuộc sống.
            <br /><br />
          </h1>
          <p className='font-light text-[18.67px]'>
            Chúng tôi muốn thu hút và giữ chân những người được truyền cảm hứng bởi tôn chỉ mục đích này, những người chia sẻ chung giá trị cốt lõi và những người được thúc đẩy bởi khát vọng của chúng tôi.
            <br />
            Đó chính là niềm tin để chúng ta cùng nhau đạt được những mục tiêu lớn - và bằng tất cả sự cố gắng, thất bại và không ngừng học hỏi, những điều tốt có thể trở nên tuyệt vời. Và những điều tuyệt vời có thể trở nên vĩ đại.
          </p>
        </div>

        <div className='w-[1200px]'>
          <h1 className='text-[48px]'>
            Chúng tôi
            <span className='font-light'> tồn tại vì
              <br />
              điều gì?
            </span>
          </h1>
          <div className="grid grid-cols-3 gap-x-6 mt-8">
            {lyDoTonTai.map((item, index) => (
              <div key={index} className='relative w-[366px] h-[504px] overflow-hidden  bg-white shadow-lg rounded-lg'>
                <div className='w-[366px] h-[206px]'>
                  <UiImage src={item.logo} alt="logo" width={366} height={206} />

                </div>
                <div className='px-5 pt-5 pb-[52px] '>
                  <h1 className='text-[24px]'>{item.title}</h1>
                  <p className='font-light mt-3 overflow-hidden line-clamp-8 max-h-[192px]'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col mt-32 gap-36'>

          <div className="flex flex-row gap-x-24">
            <div className='w-[500px] flex flex-col justify-center'>
              <h1 className='text-[48px]'>
                Khám phá cơ hội tuyển dụng tại Protector Việt
                <br />
                Nam
              </h1>
              <p className='text-[18px] mt-5'>Hãy theo dõi trang tuyển dụng của chúng tôi để tìm hiểu các cơ hội mới.</p>
              <ButtonZoomShadow className='mt-6'>Xem các cơ hội nghề nghiệp tại đây</ButtonZoomShadow>
            </div>
            <div className="w-[666px] h-[405px] overflow-hidden shrink-0">
              <UiImage width={666} height={405} className=' object-cover' src={"https://i0.wp.com/bwaysawu.com/wp-content/uploads/2022/03/theme9-600x405.jpg"} />
            </div>
          </div>

          <div className="flex flex-row gap-x-24">
            <div className="w-[600px] h-[400px] overflow-hidden shrink-0">
              <UiImage width={600} height={400} className=' object-cover' src={"https://wazo.io/wp-content/uploads/wazo_image_about_2-scaled.jpg.webp"} />
            </div>
            <div className='w-[500px] flex flex-col justify-center'>
              <h1 className='text-[48px]'>
                Đoàn kết thông qua tinh thần đồng đội
              </h1>
              <p className='text-[18px] mt-5'>
                Tại Protector, chúng tôi luôn đổi mới, hợp tác và cùng nhau trải nghiệm thực tế. Sức mạnh để chia sẻ và cộng tác đòi hỏi sự tôn trọng, chính trực và tinh thần đồng đội. Protector sở hữu một di sản phong phú nhưng để hướng tới sự phát triển trong tương lai, chúng tôi cần những nguồn năng lượng mới và suy nghĩ mới.
              </p>
              <ButtonZoomShadow className='mt-6 w-[200px]'>Xem thêm</ButtonZoomShadow>
            </div>
          </div>

          <div className="flex flex-row gap-x-24">
            <div className='w-[500px] flex flex-col justify-center'>
              <h1 className='text-[48px]'>
                Kết nối, Phát triển, Thành Công
              </h1>
              <p className='text-[18px] mt-5'>
                Chúng tôi thấu hiểu niềm tin mà bạn trao cho chúng tôi bằng cách không ngừng đưa Protector trở thành một nơi làm việc tuyệt vời, nơi mà bạn có thể Kết nối, Phát triển và Thành công.
              </p>
              <ButtonZoomShadow className='mt-6 w-[200px]'>Xem thêm</ButtonZoomShadow>
            </div>
            <div className="w-[666px] h-[444px] overflow-hidden shrink-0">
              <UiImage width={666} height={444} className=' object-cover' src={"https://wazo.io/wp-content/uploads/wazo_image_about_1-scaled.jpg.webp"} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CoHoiNgheNghiep