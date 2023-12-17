import ArrowSlide from 'components/animation/ArrowSlide'
import ButtonZoomShadow from 'components/animation/ButtonZoomShadow'
import UiImage from 'components/common/ui/UiImage/UiImage'
import React from 'react'
import { Link } from 'react-router-dom'

const cacDoiTac = [
  {
    logo: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-doi-tac-aip-266x150.jpg",
    title: "Quỹ phòng chống thương vong Châu Á"
  },
  {
    logo: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-doi-tac-bbgv-266x150.jpg",
    title: "Hiệp hội các doanh nghiệp Anh Quốc tại Việt Nam"
  },
  {
    logo: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-doi-tac-save-the-children-266x150.jpg",
    title: "Tổ chức cứu trợ trẻ em"
  },
  {
    logo: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-doi-tac-ja-vietnam-266x150.jpg",
    title: "Tổ chức Tuổi trẻ thành đạt Việt Nam"
  },
  {
    logo: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-doi-tac-saigon-children-266x150.png",
    title: "Saigonchildren’s charity"
  },
  {
    logo: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-doi-tac-nfvc-266x150.jpg",
    title: "Quỹ bảo trợ trẻ em Việt Nam"
  },
  {
    logo: "https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-doi-tac-red-cross-266x150.jpg",
    title: "Hội chữ thập đỏ Việt Nam"
  },
]

const PhatTrienCongDongBenVung = () => {
  return (
    <div className='flex flex-col max-w-[1366px] h-full'>
      <div className='flex flex-col gap-36'>
        <div className="flex flex-row gap-x-24">
          <div className='w-[500px] flex flex-col justify-center'>
            <h1 className='text-[48px]'>
              Phát triển
              <span className='text-primary font-light'>&nbsp; cộng đồng <br /> bền vững</span>
            </h1>
            <p className='text-[18px] mt-5'>Protector luôn nỗ lực hiện thực hóa cam kết giúp mọi người đạt được những điều tốt đẹp nhất trong cuộc sống. Bên cạnh hoạt động kinh doanh hiệu quả, Protector đã và đang đầu tư vào các hoạt động xã hội với mục tiêu phát triển cộng đồng bền vững và kiến tạo một cuộc sống khỏe mạnh hơn, thịnh vượng hơn cho người dân Việt Nam, tập trung vào các lĩnh vực Giáo dục, Sống khỏe và An toàn.</p>
            <ButtonZoomShadow className='mt-6'>Nhìn lại hành trình năm 2023</ButtonZoomShadow>
          </div>
          <div className="w-[666px] h-[500px] overflow-hidden shrink-0">
            <UiImage width={666} height={589} className=' object-cover' src={"https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/csr-hero-666x500.jpg"} />
          </div>
        </div>

        <div className="flex flex-row gap-x-24">
          <div className="w-[666px] h-[444px] overflow-hidden shrink-0">
            <UiImage width={666} height={444} className=' object-cover' src={"https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/giao-duc/csr-giao-duc-dt-666x444.jpg"} />
          </div>
          <div className='w-[500px] flex flex-col justify-center'>
            <h1 className='text-[48px]'>
              Giáo dục
            </h1>
            <p className='text-[18px] mt-5'>
              Giáo dục luôn là trọng tâm được Protector ưu tiên bởi đây chính là sự đầu tư dài hạn vào con người, giúp nuôi dưỡng một thế hệ trẻ tự tin, năng động, hiểu biết và góp phần kiến tạo một tương lai thịnh vượng hơn cho đất nước.
            </p>
            <ButtonZoomShadow className='mt-6 w-[200px]'>Xem thêm</ButtonZoomShadow>
          </div>
        </div>

        <div className="flex flex-row gap-x-24">
          <div className='w-[500px] flex flex-col justify-center'>
            <h1 className='text-[48px]'>
              An toàn
            </h1>
            <p className='text-[18px] mt-5'>
              Các hoạt động An toàn đã trở thành hoạt động thường niên của Protector và thu hút hàng ngàn nhân viên tham gia với các dự án nhân văn, thiết thực được triển khai tại nhiều địa phương trên cả nước, góp phần nâng cao điều kiện sống an toàn cho mọi người dân Việt Nam.
            </p>
            <ButtonZoomShadow className='mt-6 w-[200px]'>Xem thêm</ButtonZoomShadow>
          </div>
          <div className="w-[666px] h-[444px] overflow-hidden shrink-0">
            <UiImage width={666} height={444} className=' object-cover' src={"https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/an-toan/csr-an-toan-666x444.jpg"} />
          </div>
        </div>

        <div className="flex flex-row gap-x-24">
          <div className="w-[666px] h-[444px] overflow-hidden shrink-0">
            <UiImage width={666} height={444} className=' object-cover' src={"https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/hoat-dong-csr/song-khoe/csr-song-khoe-666x444.jpg"} />
          </div>
          <div className='w-[500px] flex flex-col justify-center'>
            <h1 className='text-[48px]'>
              Sống khỏe
            </h1>
            <p className='text-[18px] mt-5'>
              Việc xây dựng lối sống khoẻ mạnh cho cộng đồng cũng được Protector chú trọng thực hiện trong nhiều năm qua. Không chỉ dừng lại ở những hoạt động rèn luyện sức khỏe, nâng cao kiến thức, Protector còn hướng tới việc nâng cao đời sống cho các đối tượng có hoàn cảnh khó khăn và dễ bị tổn thương.
            </p>
            <ButtonZoomShadow className='mt-6 w-[200px]'>Xem thêm</ButtonZoomShadow>
          </div>
        </div>

      </div>

      <div className='w-[1200px] m-auto mt-24'>
        <h1 className='pb-8 text-[48px]'>Các đối tác</h1>
        <div className="grid grid-cols-4 gap-x-[34px] gap-y-[200px] w-[1200px]">
          {cacDoiTac.map((item, index) => (
            <Link to={'#'} key={index} className='relative w-[266px] h-[318px] bg-white hover:shadow-2xl shadow-lg rounded-lg group'>
              <UiImage src={item.logo} alt="logo" width={266} height={150} />
              <div className='px-5 pt-5 pb-[52px]'>
                <h1 className='text-[20px]  overflow-hidden line-clamp-3 max-h-[90px]'>{item.title}</h1>
                <div className=' absolute right-8 -bottom-5'>
                  <ArrowSlide />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhatTrienCongDongBenVung