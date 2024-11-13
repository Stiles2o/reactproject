import React, { Component } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router'

export default class ClassLayout extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-2"><SideBar></SideBar></div>
                <div className="col"><Outlet></Outlet></div>
            </div>
        )
    }
}
