import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import ListCategory from '../components/Listcategory';
import '../css/products.css'
const ProductPage = (props) => {
  return (
     <>
       <div className="main-top">
            <a href="">
            <span>Trang chủ</span>
            </a>
            <a href="/#/products">
            <span> / Danh Mục </span>
            </a>
            <span> / Tất cả sản phẩm</span>
            </div>

            <div className="product-main">
            <div class="option-product">
              <nav id="menu-product">
    <ListCategory  {...props}/>
    </nav>
    </div>
    <div class="list-product">
   
      {
        props.products.map((product, index) => (
          <div className="profile-card" key={index}>
            <Link to={`products/${product._id}`}>
              <img width="190px" height="230px" src={`http://localhost:4000/api/product/photo/${product._id}`} className alt="" />
            </Link>
            <div className="card-body">
              <p className="card-name">{product.name}</p>

              <div className="price-product">
                <p>${product.price}VNĐ</p></div>

              <Link to={`products/${product._id}`} className="btn">Show</Link>
              <button data-id="${product._id}" className="btn" id="btnAddcart">Add to cart</button>
            </div>
          </div>
        ))}
    </div>
    </div>
 </>

  )
}

export default ProductPage
