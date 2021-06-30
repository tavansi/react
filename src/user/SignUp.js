import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { signUp } from '../auth'
import '../css/login.css'
import swal from 'sweetalert';
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);


    const onSubmit = (data, e) => {
        signUp(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error);
                } else {
                    setError("");
                    swal({
                        title: "Thành công!",
                        text: "Đăng kí thành công",
                        icon: "success",
                        button: "Tiếp tục",
                    })
                    setSuccess(true)
                }
            })
    }
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>

            {error}
        </div>

    }
    const showSuccess = () => {
        return <div className="alert alert-info" style={{ display: success ? "true" : "none" }}>
            bạn đã tạo tài khoản thành công.click để <Link to="/signin">đăng nhập</Link>  lại

        </div>

    }
    const signUpForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <section id="login-user">
                    <div className="title-login">
                        <h1>Đăng kí</h1>
                        <hr />
                    </div>
                    <div class="check-login" style={{ margin: '-70px 0px' }}>
                        <div className="email-user">
                            <label htmlFor="name" className="form-label">Họ tên</label>
                            <input type="text"
                                className="form-control"
                                id="name"
                                {...register('name')} />
                        </div>
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
                                <input className="btn" type="submit" defaultValue="Đăng kí" />
                            </div>
                            <div className="registration-user">
                                <a href="#/resetpasswd">
                                    Quên mật khẩu?
                         </a>
                                <br />
                        hoặc
                          <a href="/signin">Đăng Nhập</a>
                            </div>
                        </div>

                    </div>
                </section>
            </form>
        )
    }
    return (
        <div>
            {showSuccess()}
            {showError()}
            {signUpForm()}


        </div>
    )
}

export default SignUp
