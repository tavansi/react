import React ,{ useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import CategoryAPI from '../api/categoryAPI';
import ProductAPI from '../api/productAPI';
const CategoryPage = ( props) => {
  //  su dung useffect call product id category
  const {id} = useParams();
  useEffect(() => {
    const getProduct= async () => {
        try {
            const { data:products } = await ProductAPI.getAll();
            console.log(products);
        } catch (error) {
        }
    }
    getProduct();
}, [])
    return (
      < >  
    
{/*            
           {
             products.filter(product => product.categoryID == id).map(product => (
          <div className="profile-card" >
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
        ))} */}

            )

        
      </>
    //   <div class="list-products">
         
    //   {
    //     props.products.filter(product => product.categoryID == id).map(product => (
    //       <div className="profile-card" >
    //         <Link to={`products/${product._id}`}>
    //           <img width="190px" height="230px" src={`http://localhost:4000/api/product/photo/${product._id}`} className alt="" />
    //         </Link>
    //         <div className="card-body">
    //           <p className="card-name">{product.name}</p>

    //           <div className="price-product">
    //             <p>${product.price}VNĐ</p></div>

    //           <Link to={`products/${product._id}`} className="btn">Show</Link>
    //           <button data-id="${product._id}" className="btn" id="btnAddcart">Add to cart</button>
    //         </div>
    //       </div>
    //     ))}
    // </div>

    )
}

export default CategoryPage
