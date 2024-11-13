import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SideBar extends Component {
    classlink = [
        { id: 1, text: 'Fistr Comp', url: '/class/classcomp' },
        { id: 2, text: 'Props', url: '/class/props' },

    ]
    render() {
        return (
            <>
                <nav className='nav  flex-column'>
                    {this.classlink.map((link, i) =>
                        <React.Fragment key={link.id}>
                            <li>
                                <NavLink className="nav-link" to={link.url}>{link.text}</NavLink>
                            </li>
                            {i < this.classlink.length - 1 && <li><hr /></li>}
                        </React.Fragment>
                    )}
                    {/* <li className='nav-item'>
                        <a className='nav-link' href="">Frist Class comp</a>
                    </li> */}
                </nav>
            </>
        )
    }
}
