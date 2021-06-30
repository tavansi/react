import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductAPI from './api/productAPI';
import categoryAPI from './api/categoryAPI';
import Routers from './Routers';
import CategoryAPI from './api/categoryAPI';

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // call api
    const getTodoProduct = async () => {
      
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products)
      } catch (error) {
        console.log(error)
      }
    }
    getTodoProduct();
    
    const getTodoCategory = async () => {

      try {
        const { data: categories } = await categoryAPI.getAll();
        setCategories(categories.categories);
      } catch (error) {
        console.log(error)
      }
    }
    getTodoCategory();
  }, [])

  const onHandleAddProduct = async (product) => {
    try {
        const {data:pro}= await ProductAPI.add(product);
      setProducts([
        ...products,
        pro
      ]);
    } catch (error) {
      console.log(error)
    }

  }
  const onHandleAddCategory = async (category) => {
    try {
        await CategoryAPI.add(category);
         setCategories([
        ...categories,
        category
      ]);
    } catch (error) {
      console.log(error)
    }

  }
  const onHandleEditProduct = async (id ,product) => {
    try {
        const {data:pro}= await ProductAPI.update(id , product);
        const newProduct = await ProductAPI.getAll();
        setProducts(
          newProduct.data
        );
    } catch (error) {
      console.log(error)
    }

  }
  
  const onHandleEditCategory = async (id, category) => {
    try {
        await CategoryAPI.update(id , category);
        const {data: newCategory} = await CategoryAPI.getAll();
         setCategories(
          newCategory.categories
      );
    } catch (error) {
      console.log(error)
    }

  }
  const onHandleDeleteProduct = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProducts = products.filter(product => product._id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDeleteCategory = async (id) => {
    try {
      await categoryAPI.remove(id);
      const newCategories = categories.filter(category => category._id !== id);
      setCategories(newCategories);
    } catch (error) {
      console.log(error)
    }

    // console.log(todos);
  }
  return (
    <div className="">
      {/* <TodoForm onAdd={onHandleAdd} />
      <TodoList data={todos} onDelete={onHandleDelete} /> */}
      <Routers
       products={products} 
      onDelete={onHandleDeleteProduct}   
      onAdd={onHandleAddProduct} 
      onEdit={onHandleEditProduct} 
      category={categories}
      onDeleteCategory={onHandleDeleteCategory}   
      onAddCategory={onHandleAddCategory} 
      onEditCategory={onHandleEditCategory} 
      />
    </div>
  );
}

export default App;

