import React from 'react'
import { Route, Routes } from 'react-router'
import App from './App'
import CreateAcc from './components/form/CreateAcc'
import Login from './components/form/Login'
import NewC from './components/form/NewC'
import Productmain from './components/products/Productmain'
import Products from './components/products/Products'
import NewProduct from './components/products/NewProduct'
import FirstClass from './components/Class/FirstClass'
import ClassLayout from './components/Class/ClassLayout'


const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App></App>}>
                    <Route path='acc1' element={<CreateAcc></CreateAcc>}></Route>
                    <Route path='newc' element={<NewC></NewC>}></Route>
                    <Route path='login/' element={<Login></Login>}></Route>
                    <Route path='product' element={<Productmain></Productmain>}></Route>
                    <Route path='productlist' element={<Products></Products>}></Route>
                    <Route path='NewProduct' element={<NewProduct></NewProduct>}></Route>
                    <Route path='class' element={<ClassLayout></ClassLayout>}>
                        <Route path='classcomp' element={<FirstClass></FirstClass>}></Route>
                    </Route>

                </Route>
            </Routes>
        </>
    )
}

export default Routing
