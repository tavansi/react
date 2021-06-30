import React, { useState ,useEffect} from 'react'
import {
    NavLink , useHistory } from 'react-router-dom';
import { signOut , isAuthenticated} from '../auth';
import '../css/Homepage.css';
import {useLocation} from 'react-router-dom'
const Header = (props) => {
  const history = useHistory();
    const sidz =window.location.origin;
    const{ pathname} = useLocation();
    const [isLogged, setIsLogged] = useState(false)
    useEffect(()=>{
      isAuthenticated() && setIsLogged(true)
    },[pathname , isLogged])
    return (

      <div className="header">
  <div className="logo">
    <NavLink to="/">
      <svg xmlns="http://www.w3.org/2000/svg" width={100} height={50} viewBox="0 0 192.756 192.756">
        <g fillRule="evenodd" clipRule="evenodd">
          <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
          <path d="M8.504 37.451h18.639l10.328 71.031 10.075-71.031h127.706l-4.281 20.403H63.164l-16.373 93.449h-18.64L8.504 37.451z" />
          <path d="M178.527 124.855c.504 11.082-5.793 27.959-19.648 27.959-16.119 0-19.646-19.898-19.646-28.211h13.098c0 4.785 4.031 9.572 7.053 9.572 3.023 0 6.047-3.779 6.047-6.297 0-2.52-1.008-6.297-5.793-9.572-15.619-9.32-19.145-20.152-19.145-29.471-.504-11.083 4.785-27.456 18.639-27.456 13.855 0 17.633 19.396 17.633 27.456h-12.342c0-4.534-3.023-7.808-6.045-7.808-3.023 0-5.039 3.022-5.039 5.542 0 2.519.504 4.786 5.291 8.06 6.548 3.023 19.897 12.846 19.897 30.226zM179.275 146.266a4.031 4.031 0 0 1 4.037 4.037 4.036 4.036 0 0 1-4.037 4.062 4.05 4.05 0 0 1-4.062-4.062c0-2.235 1.816-4.037 4.062-4.037v-.939c-2.768 0-5.002 2.234-5.002 4.977a4.995 4.995 0 0 0 5.002 5.002c2.742 0 4.977-2.234 4.977-5.002a4.985 4.985 0 0 0-4.977-4.977v.939z" />
          <path d="M178.273 148.438h1.307c.521 0 1.283 0 1.283.697 0 .686-.42.826-1.016.812h-1.574v.801h1.053l1.193 2.285h1.232l-1.309-2.285c.953-.064 1.473-.471 1.473-1.447 0-.559-.152-1.08-.635-1.396-.406-.254-1.002-.268-1.459-.268h-2.604v5.396h1.055v-4.595h.001zM69.712 121.078l5.038-32.746 5.038 32.746H69.712zm-3.022 18.387h15.617l2.015 11.838h24.936v-46.85l15.365 46.85h12.846V64.151h-13.098v44.332l-14.609-44.332H96.161v81.863L82.055 64.151h-14.61l-15.113 87.152h12.846l1.512-11.838z" />
        </g>
      </svg>
    </NavLink>
  </div>
  <nav className>
    <ul id="menu">
      <li><NavLink to="/" className="link-menu">Trang chủ</NavLink></li>
      <li><NavLink to="/products" className="link-menu">Sản phẩm</NavLink>
        <ul>
           { 
            props.category.map((category,index)=>(
                
                <li key={index}  ><NavLink to={`/category/${category._id}`}>{category.name}</NavLink></li>
            ))}
        </ul></li>
      <li><NavLink to="/about" className="link-menu">Giới thiệu</NavLink></li>
      <li><NavLink to="/news" className="link-menu">Tin tức</NavLink></li>
      <li><NavLink to="/contacts" className="link-menu">Liên hệ</NavLink></li>
      <li><NavLink to="/admin/dashboard" className="link-menu">Quản trị</NavLink></li>
      {isLogged &&(
      <li><a 
      activeClassName="active"
       className="link-menu" 
       style={{cursor:'pointer'}}
       onClick={()=> signOut(()=>
        {
           setIsLogged(false)
           window.alert('Đã thoát đăng nhập')
           history.push('/')
       })}>Signout</a></li>
      )}
      {/* <li><NavLink  className="link-menu" style={{cursor:'pointer'}} >Thoát</NavLink></li> */}
    </ul>
  </nav>
  <div className="icons">
    <div className="search">
      <input type="text" name id="test123" placeholder="Tìm kiếm" />
      <button>search</button>
    </div>
    <NavLink to="/#/cartpage">
      <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
      </svg>
    </NavLink>
    {!isLogged &&(
       <NavLink className="btn " style={{marginBottom: 20}} to="/signin">Login</NavLink>
  )}
  </div>
</div>
    )
}

export default Header
