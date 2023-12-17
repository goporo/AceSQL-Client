import UiImage from 'components/common/ui/UiImage/UiImage'
import React from 'react'
import { Link } from 'react-router-dom'

const footerItems = [
  {
    title: "Blog",
    contents: [
      { title: "Bài viết nổi bật", path: "bai-viet-noi-bat" },
      { title: "Kiến thức bảo hiểm", path: "kien-thuc-bao-hiem" },
      { title: "Sức khỏe thể chất", path: "suc-khoe-the-chat" },
      { title: "Chăm sóc tinh thần", path: "cham-soc-tinh-than" },
      { title: "Quản lý tài chính", path: "quan-ly-tai-chinh" }
    ]
  },
  {
    title: "Sản phẩm bảo hiểm",
    contents: [
      { title: "Sản phẩm bảo hiểm chính", path: "san-pham-bao-hiem-chinh" },
      { title: "Kế hoạch bảo vệ & chăm sóc sức khỏe", path: "ke-hoach-bao-ve-cham-soc-suc-khoe" },
      { title: "Kế hoạch tích lũy", path: "ke-hoach-tich-luy" },
      { title: "Kế hoạch đầu tư", path: "ke-hoach-dau-tu" },
      { title: "Sản phẩm bảo hiểm bổ trợ", path: "san-pham-bao-hiem-bo-tro" },
      { title: "Thông tin các Quỹ đầu tư", path: "thong-tin-cac-quy-dau-tu" },
      { title: "Tài liệu và biểu mẫu tham khảo", path: "tai-lieu-va-bieu-mau-tham-khao" },
      { title: "Chương trình khuyến mại", path: "chuong-trinh-khuyen-mai" }
    ]
  },
  {
    title: "Chăm sóc khách hàng",
    contents: [
      { title: "Giải quyết quyền lợi bảo hiểm", path: "giai-quyet-quyen-loi-bao-hiem" },
      { title: "Kênh thanh toán phí bảo hiểm", path: "kenh-thanh-toan-phi-bao-hiem" },
      { title: "PROOnline – Cổng thông tin khách hàng", path: "proonline-cong-thong-tin-khach-hang" },
      { title: "ProRewards – Đổi điểm nhận quà", path: "prorewards-doi-diem-nhan-qua" },
      { title: "Thông tin & ưu đãi dịch vụ", path: "thong-tin-uu-dai-dich-vu" }
    ]
  },
  {
    title: "Cơ hội nghề nghiệp",
    contents: [
      { title: "Cơ hội nghề nghiệp tại Protector", path: "co-hoi-nghe-nghiep-tai-protector" },
      { title: "Cơ hội phát triển tại kênh hợp tác kinh doanh", path: "co-hoi-phat-trien-tai-kenh-hop-tac-kinh-doanh" },
      { title: "ProPlanner – Chuyên viên hoạch định tài chính", path: "proplanner-chuyen-vien-hoach-dinh-tai-chinh" },
      { title: "Chuyên viên hoạch định tài chính Protector - Kênh đại lý", path: "chuyen-vien-hoach-dinh-tai-chinh-protector-kenh-dai-ly" }
    ]
  },
  {
    title: "Protector Việt Nam",
    contents: [
      { title: "Tìm hiểu về Protector", path: "tim-hieu-ve-protector" },
      { title: "Phát triển cộng đồng bền vững", path: "phat-trien-cong-dong-ben-vung" },
      { title: "Thông cáo báo chí", path: "thong-cao-bao-chi" },
      { title: "Chiến dịch thương hiệu", path: "chien-dich-thuong-hieu" },
      { title: "Liên hệ", path: "lien-he" }
    ]
  },
  {
    title: "Liên hệ",
    contents: [
      { title: "Tầng 25, Tòa nhà Sài Gòn Pro Center, 666 Tôn Thất Tùng, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh", path: "tang-25-toa-nha-sai-gon-pro-center-666-ton-that-thang-phuong-ben-nghe-quan-1-tp-ho-chi-minh" },
      { title: "Điện thoại trụ sở chính: 028.3910.2222", path: "dien-thoai-tru-so-chinh-02839102222" },
      { title: "Văn phòng Giao dịch gần bạn nhất", path: "van-phong-giao-dich-gan-ban-nhat" },
      { title: "Miễn trừ trách nhiệm & Quyền sở hữu", path: "mien-tru-trach-nhiem-quyen-so-huu" },
      { title: "Chính sách bảo mật thông tin", path: "chinh-sach-bao-mat-thong-tin" },
      { title: "Quay lại Trang chủ", path: "quay-lai-trang-chu" }
    ]

  },

]

const Footer = () => {
  return (
    <div className="max-w-[1366px] overflow-hidden flex flex-col m-auto ">
      <div className="h-[425px] bg-[#1f1f1f] pt-[10px] pb-[14px]">
        <div className='w-[1200px] m-auto flex flex-row'>
          {footerItems.map((item, idx) => {
            return (
              <div key={idx}>
                <div className='flex flex-col py-[25px] px-[17px] w-[200px] gap-5'>
                  <p className='text-[18px] text-[#e5eaef]'>
                    {item.title}
                  </p>
                  <div className="flex flex-col gap-4">
                    {item.contents.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className='text-[12px] text-[#b4b4b4] hover:text-white'>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className=" bg-black-primary">
        <div className='w-[1160px] h-[104px] m-auto flex flex-row justify-between items-center text-[#757575] text-[11px]'>
          <p>
            Bản quyền thuộc về Công ty TNHH BHNT Protector Việt Nam. Tất cả các quyền được bảo hộ.<br />
            Copyright © 2023 Protector Việt Nam
          </p>
          <div>
            <UiImage src='/assets/images/social_medias.png' alt='social medias' imageClassName='h-16' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
