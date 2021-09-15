import React from 'react'

import logo from '../assets/images/logo-app.png'
import user from '../assets/images/user.png'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="" />
            </div>
            <div className="sidebar__nav">
                <i className='bx bx-alarm-exclamation'></i>
                <i className='bx bx-calendar-check'></i>
                <i className='bx bx-station'></i>
                <i className='bx bx-group active'></i>
                <i className='bx bxs-bar-chart-alt-2'></i>
                <i className='bx bxs-video'></i>
            </div>
            <div className="sidebar__user">
                <img src={user} alt="" />
            </div>
        </div>
    )
}

export default Sidebar
