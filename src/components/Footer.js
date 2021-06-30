import React from 'react'
import {

    Link
} from 'react-router-dom';
const Footer = () => {
    return (
        <div>
  <div className="footer-top">
    <div className="title-footer">
      <h3>HỆ THỐNG CỬA HÀNG VANSI
      </h3>
      <p>
        Vansi Store: 121 Nguyễn Trãi Q.1 <br />
        Store 2: 26 LÝ TỰ TRỌNG Q.1 ( THE NEW PLAYROUND) <br />
        Store 3: 350 ĐIỆN BIÊN PHỦ F17 Q. BÌNH THẠNH ( G TOWN) <br />
      </p>
    </div>
    <div className="title-footer">
      <h3>HƯỚNG DẪN &amp; CHÍNH SÁCH<br />
      </h3>
      <Link to>
        <p>
          -Chính sách bảo mật
        </p>
      </Link>
      <Link to>
        <p>
          -Thẻ Thành Viên  
        </p>
      </Link>
      <Link to>
        <p>
          -Chính sách thanh toán
        </p>
      </Link>
    </div>
    <div className="title-footer">
      <h3>Thông tin cửa hàng VANSI
      </h3>
      <p>
        Website: Vansishop.com <br />
        Sdt: 0965873417 <br />
        Địa chỉ: Ngõ 80 xuân phương <br />
      </p>
    </div>
    <div className="title-footer">
      <h3>PHƯƠNG THỨC THANH TOÁN
      </h3>
      <p>
      </p>
    </div>
  </div>
  <div className="footer-bottom">
    <p> © Bản quyền thuộc về Vansi shop
      <br />
      Thiết kế website bởi vsi</p>
    <div className="app">
      <Link to>
        <img src="./src/image/logo-lienket/facebook.png" alt width="35px" height="35px" /></Link>
      <Link to>
        <img src="./src/image/logo-lienket/instagram.png" alt width="35px" height="35px" /></Link>
      <Link to>
        <img src="./src/image/logo-lienket/youtube.png" alt width="35px" height="35px" /></Link>
      <Link to>
        <img src="./src/image/logo-lienket/google.png" alt width="35px" height="35px" /></Link>
    </div>
  </div></div>

    )
}

export default Footer;
