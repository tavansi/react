import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import CategoryAPI from '../../../api/categoryAPI';

const AdminCategoryAddPage = ({ onAddCategory }) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onHandleSubmit = (data) => {
        onAddCategory(data);
        history.push('/admin/category')
    }
    
    return (
        <div>
            <h1>Product Add</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="product-name">Tên danh mục</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                </div>
               
                <button type="submit" className="btn ">Submit</button>
            </form>

        </div>
    )
}

export default AdminCategoryAddPage;
