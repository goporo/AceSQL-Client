import { ROUTES } from 'routes/RouterConfig';

export const navItems = [
  {
    title: 'Khi CẦN mình có NHAU',
    icon: null,
    items: [
      {
        path: ROUTES.SpecialEvent,
        title: 'Chiến dịch thương hiệu: Khi CẦN mình có NHAU',
      },
    ],
  },
  {
    title: 'Blog',
    icon: null,
    items: [
      { path: ROUTES.BlogBaiVietNoiBat, title: 'Bài viết nổi bật' },
      { path: ROUTES.BlogBaiVietNoiBat, title: 'Kiến thức bảo hiểm' },
      { path: ROUTES.BlogBaiVietNoiBat, title: 'Sức khỏe thể chất' },
      { path: ROUTES.BlogBaiVietNoiBat, title: 'Chăm sóc tinh thần' },
      { path: ROUTES.BlogBaiVietNoiBat, title: 'Quản lý tài chính' },
    ],
  },
  {
    title: 'Sản phẩm bảo hiểm',
    icon: null,
    items: [
      { path: ROUTES.BaoHiem, title: 'Bảo hiểm tai nạn' },
      {
        path: ROUTES.BaoHiem,
        title: 'Bảo hiểm bệnh hiểm nghèo',
      },
      {
        path: ROUTES.BaoHiem,
        title: 'Bảo hiểm chăm sóc sức khỏe',
      },
      {
        path: ROUTES.BaoHiem,
        title: 'Bảo hiểm từ vong và thương tật',
      },
      { path: ROUTES.BaoHiem, title: 'Bảo hiểm tổn thương' },

      { path: ROUTES.BaoHiem, title: 'Đầu tư an toàn' },
      {
        path: ROUTES.BaoHiem,
        title: 'Đầu tư linh hoạt với lợi nhuận/rủi ro không đảm bảo',
      },
      { path: ROUTES.BaoHiem, title: 'Đầu tư dài hạn' },

      { path: ROUTES.BaoHiem, title: 'Tích lũy Giáo dục' },
      { path: ROUTES.BaoHiem, title: 'Tích lũy Tương lai' },
    ],
  },
  {
    title: 'Chăm sóc khách hàng',
    icon: null,
    items: [
      {
        path: ROUTES.CSKHGiaiQuyetQuyenLoiBaoHiem,
        title: 'Giải quyết quyền lợi bảo hiểm',
      },
      {
        path: ROUTES.CSKHKenhThanhToanPhiBaoHiem,
        title: 'Kênh thanh toán phí bảo hiểm',
      },
      {
        path: ROUTES.CSKHPROOnlineCongThongTin,
        title: 'PROOnline - Cổng thông tin khách hàng',
      },
      {
        path: ROUTES.CSKHPRORewardDoiDiemNhanQua,
        title: 'PRURewards - Đổi điểm nhận quà',
      },
      {
        path: ROUTES.CSKHThongTinUuDaiVaDichVu,
        title: 'Thông tin & ưu đãi dịch vụ',
      },
      {
        path: ROUTES.CSKHTaiLieuVaBieuMauThamKhao,
        title: 'Tài liệu và biểu mẫu tham khảo',
      },
      {
        path: ROUTES.CSKHChuongTrinhKhuyenMai,
        title: 'Chương trình khuyến mại nổi bật',
      },
      {
        path: ROUTES.CSKHThucHienQuyenCuaChuThe,
        title: 'Thực hiện quyền của chủ thể dữ liệu',
      },
    ],
  },
  {
    title: 'Cơ hội nghề nghiệp',
    icon: null,
    items: [
      {
        path: ROUTES.CHNNTaiProtector,
        title: 'Cơ hội nghề nghiệp tại Protector',
      },
      {
        path: ROUTES.CHNNPhatTrien,
        title: 'Cơ hội phát triển tại kênh hợp tác kinh doanh',
      },
      {
        path: ROUTES.CHNNChuyenVienHoachDinhProplanner,
        title: 'ProPlanner - Chuyên viên hoạch định tài chính',
      },
      {
        path: ROUTES.CHNNTaiProtector,
        title: 'PRURewards - Chuyên viên hoạch định tài chính Protector - Kênh đại lý',
      },
    ],
  },
  {
    title: 'Về Protector',
    icon: null,
    items: [
      { path: ROUTES.AboutProtector, title: 'Tìm hiểu về Protector' },
      {
        path: ROUTES.AboutPhatTrienCongDong,
        title: 'Phát triển cộng đồng bền vững',
      },
      {
        path: ROUTES.AboutTuDoTuoi50,
        title: 'Tự do tuổi 50 - Sẵn sàng cho cuộc sống về già',
      },
      {
        path: ROUTES.AboutChienDichThuongHieu,
        title: 'Chiến dịch thương hiệu: Khi Tình Yêu Đủ Lớn',
      },
      {
        path: ROUTES.About175NamTonVinh,
        title: '175 năm tôn vinh cuộc sống',
      },
      {
        path: ROUTES.AboutThongCaoBaoChi,
        title: 'Thông cáo báo chí'
      },
      {
        path: ROUTES.AboutVanPhongGiaoDichGanBanNhat,
        title: 'Văn phòng giao dịch gần bạn nhất',
      },
      { path: ROUTES.AboutLienHe, title: 'Liên hệ' },
    ],
  },
];
