import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { signIn, authenticate } from '../auth'
import '../css/login.css'
import swal from 'sweetalert';
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                    swal({
                        title: "Thành công!",
                        text: "Đăng nhập thành công",
                        icon: "success",
                        button: "Tiếp tục",
                    })
                    authenticate(dataUser, () => {
                        history.push('/');
                    })
                    
                }
            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>

            {error}
        </div>

    }
    const showLoading = () => {

        return loading && <div className="alert alert-info">
            <h2>...LOADING...</h2>
        </div>

    }
    const signInForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                    <section id="login-user">
                <div className="title-login">
                    <h1>Đăng nhập</h1>
                    <hr />
                </div>
                <div class="check-login">
                <div className="email-user">
                    <label htmlFor="email" className="form-label">Email của bạn</label>
                    <input type="text"
                        className="form-control"
                        id="email"
                        {...register('email')} />
                </div>
                <div className="email-user">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        {...register('password')} />
                </div>
                <div className="click-login">
                    <div className="button-login">
                        <input className="btn" type="submit" defaultValue="Đăng nhập" />
                    </div>
                    <div className="registration-user">
                        <a href="/resetpasswd">
                            Quên mật khẩu?
                       </a>
                        <br />
                     hoặc
                    <a href="/Signup">Đăng kí</a>
                    </div>
                </div>
                </div>
             </section>
            </form>
        )
    }
    return (
        <div>
            {showError()}
            {signInForm()}

            {showLoading()}
        </div>
    )
}

export default SignIn
