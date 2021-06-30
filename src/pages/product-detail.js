import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductAPI from '../api/productAPI';

const ProductDetailPage = () => {
    
    const { id } = useParams();
    const [product, setProduct] = useState({})
   
    useEffect(() => {
        const getProduct = async () => { 
            try {
              const { data } = await ProductAPI.get(id);
              console.log(data);
              setProduct(data);
            } catch (error) {
                
            }
        }
        getProduct();
    }, [])
      return (  
                <div>
                <div className="main-top">
                  <a href>
                    <span>Trang chủ</span>
                  </a>
                  <a href="/#/products">
                    <span> / Danh Mục </span>
                  </a>
                  <span> / {product.name}</span>
                </div>
                <div className="product-detail">
                  <div className="image-product">
                    <img src={`http://localhost:4000/api/product/photo/${product._id}`} width={330} height={570}  className="img-fluid" alt="${result.name}" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <hr />
                    <div className="price-products">
                      <p className>${product.price}VNĐ</p>
                    </div>
                    <hr />
                    <p className="card-text">Trạng thái:
                      <span>còn hàng</span></p><p>
                    </p><hr />
                    <p className="card-text">Mô tả:<br /> 
                      <span>{product.description}</span></p>
                    <button data-id="${result.id}" className="btn" id="btnAddcart">Thêm vào giỏ hàng</button> 
                  </div>
                </div>
              </div>
      )
} 

export default ProductDetailPage
