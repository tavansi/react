import React from 'react'
import Products from '../components/Products';
import '../css/Homepage.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
const HomePage = () => {
  const sidz =window.location.origin;
    return (
       <div className="box  ">
  <div className="banner">
     <img src={`${sidz}/image/banner-logo/banner.jpg`}></img>
  </div>
  <div className="content-top">
    <h3>SHOP</h3>
    <hr />
  </div>
  <div className="content">
    <div className="content-left">
      <Link to="/#/category/1">
        <img  src={`${sidz}/image/shopmen.png`} alt />
      </Link>
    </div>
    <div className="content-right">
      <Link to="/#/category/2">
        <img src={`${sidz}/image/shopwomen.png`} alt />
      </Link>
    </div>
  </div>
  <div className="title-content-bottom">
    <h3>NEW</h3>
    <hr />
    <Link to="/products">
      <span>Xem thêm</span>
    </Link>
  </div>
  <div className="content-bottom">
    <div className="content-show">
      <Link to="/#/products">
        <img src="../image/image-homepage/bag.png" width="400px" height="400px" alt />
      </Link>
    </div>
    <div className="content-show">
      <Link to="/#/products">
        <img src="../image/image-homepage/hat.jpg" width="400px" height="400px" alt />
      </Link>
    </div>
    <div className="content-show">
      <Link to="/#/products">
        <img src="../image/image-homepage/bag.png" width="400px" height="400px" alt />
      </Link>
    </div>
  </div>
  <div className="title-content-bottom">
    <h3>Tin Tức</h3>
    <hr />
    <Link to="/#/products">
      <span style={{paddingTop: 20}}>Xem thêm</span>
    </Link>
    <div className="title-homepage">
      <div className="images-news" style={{paddingTop: 20}}>
        <Link to>
          <img src="../image/news/news.png" alt width="400px" height="300px" />
        </Link>
      </div>
      <div className>
        <Link to>
          <h5>Thẻ kim cương của shop văn sĩ</h5>
        </Link>
        <p>
          Sau khi mua và sử dụng sản phẩm từ shopvansi thì khách hàng sẽ nhận được những quyền lợi
          <br />tương ứng với số lượng sản phẩm đã mua như sau.</p></div>
    </div>
  </div>
</div>


    )
}

export default HomePage
