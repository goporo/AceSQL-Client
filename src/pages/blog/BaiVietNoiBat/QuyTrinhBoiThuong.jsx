import React from 'react'
import BlogWrapper from '../BlogWrapper'
import UiImage from 'components/common/ui/UiImage/UiImage'
import UiLi from 'components/common/ui/UiLi/UiLi'
import { Link } from 'react-router-dom'
import { ROUTES } from 'routes/RouterConfig'

const QuyTrinhBoiThuong = () => {


    return (
        <BlogWrapper>

            {/* hero section */}
            <div className="-mt-11 relative mb-[250px]">
                <UiImage
                    width={1366}
                    height={560}
                    src={"https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/pulse-nhip-song-khoe/song-khoe/2023/giai-quyet-quyen-loi-bao-hiem-khi-nam-vien-nhu-the-nao-1366x560.jpg"}
                    alt={"Quy trình bồi thường"}
                />
                <div className='w-[566px] h-[263px] pt-[38px] pb-[42px] px-[52px] bg-white shadow-lg rounded-lg -mt-12 absolute left-24 -bottom-16'>
                    <div className='flex flex-col'>
                        <div className="relative w-fit">
                            <div className='text-[20px] font-bold'>Blog Nhịp Sống Khỏe</div>
                            <div className='w-full h-[2px] bg-[#68737a] opacity-30 absolute -bottom-1'></div>
                        </div>
                        <h1 className='text-[38px] mt-1'>Giải quyết quyền lợi bảo hiểm khi nằm viện
                            <span className='font-light text-primary'> như thế nào?</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className=' px-[166px]'>

                {/* rich text */}
                <div>
                    <div className='mb-20 flex flex-col gap-y-4'>
                        <h3>Nội dung bài viết:</h3>
                        <UiLi className='text-primary'>Thắc mắc #1: Nằm viện phẫu thuật nhưng không nằm viện qua đêm có được chi trả không?</UiLi>
                        <UiLi className='text-primary'>Thắc mắc #2: Chứng từ cần nộp khi Giải quyết quyền lợi bảo hiểm nằm viện là gì?</UiLi>
                    </div>
                    <h3 className='mb-10'>
                        Bảo hiểm Chăm sóc sức khỏe của Protector là giải pháp hỗ trợ tài chính nếu khách hàng không may phải nằm viện hoặc phẫu thuật. Vậy các trường hợp Giải quyết quyền lợi bảo hiểm khi nằm viện như thế nào, các chứng từ cần nộp ra sao? Mời bạn cùng đọc ngay bài viết dưới đây của Protector để bỏ túi bí kíp hữu ích khi cần nhất nhé!
                    </h3>
                    <h1 className='mb-4 text-[38px]'>
                        Thắc mắc #1: Tôi nằm viện phẫu thuật nhưng không nằm viện qua đêm có được chi trả quyền lợi bảo hiểm không?
                    </h1>
                    <span className='text-[18px] font-bold'>
                        Câu trả lời:
                    </span>
                    <UiImage
                        width={966}
                        height={644}
                        alt={"Quy trình bồi thường"}
                        src={"https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/pulse-nhip-song-khoe/song-khoe/2023/giai-quyet-quyen-loi-bao-hiem-khi-nam-vien-nhu-the-nao-1200x800-2.jpg"}
                        className='mt-4'
                    />

                </div>
                <h1 className='my-4 text-[38px]'>
                    Thắc mắc #2: Chứng từ cần nộp khi yêu cầu Giải quyết quyền lợi bảo hiểm nằm viện gồm những gì?
                </h1>
                <div className='text-[18px] '>
                    <span className='font-bold'>
                        Câu trả lời:&nbsp;
                    </span>
                    Để làm thủ tục GQQLBH về Quyền lợi chăm sóc sức khỏe, Anh/chị có thể cần nộp về Protector những giấy tờ sau:
                </div>
                <div className='mt-4 flex flex-col gap-y-4'>
                    <UiLi className='text-black-primary text-[20px]'>Giấy ra viện</UiLi>
                    <UiLi className='text-black-primary text-[20px]'>Bảng kê chi phí điều trị nội trú</UiLi>
                    <UiLi className='text-black-primary text-[20px]'>Chứng nhận phẫu thuật ( nếu có phẫu thuật)</UiLi>
                    <UiLi className='text-black-primary text-[20px]'>Hóa đơn/ Biên lai viện phí</UiLi>
                    <div>
                        <p className='text-[18px]'>
                            ** Trong một số trường hợp, tùy theo tình trạng bệnh lý, công ty có thể yêu cầu Khách hàng bổ sung thêm các hồ sơ như Điều khoản sản phẩm quy định như: Tóm tắt bệnh án, hồ sơ điều trị ngoại trú, Toa thuốc, Kết quả xét nghiệm và chẩn đoán hình...
                            <br />
                            <br />
                            Bảo hiểm Chăm sóc sức khỏe của Protector giúp bạn và gia đình bảo vệ sức khoẻ tối ưu, từ đó vững tin vui sống. Hy vọng thông tin trên đây của Protector đã có thể giải đáp các thắc mắc của bạn về thủ tục cần thực hiện khi Giải quyết quyền lợi bảo hiểm nằm viện.
                            <br />
                            <br />
                            Mời bạn đón đọc các thông tin tiếp theo về Giải quyết quyền lợi bảo hiểm tại:
                            <Link to={ROUTES.BlogBaiVietNoiBat} className='text-primary hover:underline'> Blog Nhịp Sống Khỏe | Protector Việt Nam</Link>
                        </p>
                    </div>
                </div>
            </div>

        </BlogWrapper>
    )
}

export default QuyTrinhBoiThuong