import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/dashboard.css'
const LayoutAdmin = (props) => {
    return (
        <div className="row">
            <div className=" list-admin">
                <ul className="list-groups">
                <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/product">Product</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/category">Category</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/user">User</NavLink>
                    </li>
                </ul>

            </div>
            <div className="profile-admin">
                {props.children}
            </div>
        </div>
    )
}

export default LayoutAdmin
