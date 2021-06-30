import './css/products.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,

} from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/404';
import Header from './components/Header';
import LayoutAdmin from './layouts/admin';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
import LayoutWebsite from './layouts/website';
import ProductDetailPage from './pages/product-detail';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import AdminProductEditPage from './pages/admin/product/edit';
import AdminCategoryPage from './pages/admin/category';
import AdminCategoryAddPage from './pages/admin/category/add';
import AdminCategoryEditPage from './pages/admin/category/edit';
import Footer from './components/Footer';
import NewPage from'./pages/new/NewPage';
import ContactPage from './pages/contact';
import ProductPage from './pages/productpage';
import CategoryPage from './pages/categorypage';
const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/admin/:path?/:path?/:path?">
                        <LayoutAdmin>
                            <Switch>
                                <Route exact path="/admin">
                                    <Redirect to="/admin/dashboard" />
                                </Route>
                                <Route exact path="/admin/dashboard">
                                    Dashboard
                                </Route>
                                <Route exact path="/admin/product">
                                    <AdminProductPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AdminProductAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/users">
                                    Users Manager
                                </Route>
                                <Route exact path="/admin/product/edit/:id">
                                    <AdminProductEditPage {...props}/>
                                </Route>
                                <Route exact path="/admin/category">
                                    <AdminCategoryPage {...props} />
                                </Route>
                                <Route exact path="/admin/category/add">
                                    <AdminCategoryAddPage {...props} />
                                </Route>

                                <Route exact path="/admin/category/edit/:id">
                                    <AdminCategoryEditPage {...props}/>
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite {...props}>
                            <Switch>
                                <Route exact path="/">
                                <HomePage {...props} />
                                </Route>
                                <Route exact path="/products">
                                <ProductPage {...props} />
                                </Route>
                                <Route exact path="/about">
                                    <AboutPage />
                                </Route>
                                <Route exact path="/news">
                                    <NewPage />
                                </Route>
                                <Route exact path="/contacs">
                                    <ContactPage />
                                </Route>
                                <Route exact path="/category/:id">
                                    <CategoryPage />
                                </Route>
                                <Route path="/products/:id">
                                    <ProductDetailPage  />
                                </Route>
                                <Route exact path="/signup">
                                    <SignUp />
                                </Route>
                                <Route exact path="/signin">
                                    <SignIn/>
                                </Route>
                                <Route path="*">
                                    <NotFoundPage />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers
