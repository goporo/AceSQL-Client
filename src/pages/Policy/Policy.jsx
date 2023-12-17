import './Policy.css';
import React from 'react';

function Policy()
{
    return(
        <>
        <div className="container">
            <div className="left">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="content">
                    <div className="labeltext">
                        <p><b>Khách Hàng</b></p>
                    </div>
                    <ul>
                        <li>Duyệt Yêu Cầu</li>
                        <li>Yêu Cầu Đã Duyệt</li>
                        <li>Yêu Cầu Đã Hủy</li>
                    </ul>
                    <div className="labeltext">
                        <p><b>Điều Trị</b></p>
                    </div>
                    <ul>
                        <li>Duyệt Yêu Cầu</li>
                        <li>Yêu Cầu Đã Duyệt</li>
                        <li>Yêu Cầu Đã Hủy</li>
                    </ul>
                    <div className="labeltext">
                        <p><b>Chính Sách</b></p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="cs">
                    <h4>Chính sách</h4>
                    <input id="logout" type="button" value="Đăng Xuất"/>
                </div>
                <div className="ChinhSachLabel">
                    <h1><b>Chính Sách</b></h1>
                </div>
                <div className="search">
                    <input id="searching" placeholder=" Tìm kiếm" type="text" className="txt"/>
                </div>
                <div className="addcs">
                    <input id="addcsbutton" type="button" value="+ Thêm Chính Sách"/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Mã Đơn</td>
                            <td>Tên Khách Hàng</td>
                            <td>Tình Trạng Sức Khỏe</td>
                            <td>Thanh Toán</td>
                            <td>Tình Trạng Chính Sách</td>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        </div>
        </>
    )
}

export default Policy