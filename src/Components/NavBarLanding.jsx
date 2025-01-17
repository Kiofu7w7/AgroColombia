import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLanding = () => {
    return (
        <div className="navbar glass ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Compra</Link></li>
                        <li><Link>Vende</Link></li>
                        <li><Link>Quienes somos</Link></li>
                    </ul>
                </div>
                <img alt="icon" className="size-12" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1709572838/Guajolota/logo_tayiwj.png"></img>
                <Link to="/" className="btn btn-ghost text-xl">AgroColombia</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/*">Compra</Link></li>
                    <li><Link to="/vende">Vende</Link></li>
                    <li><Link to="/quienes-somos">Quienes somos</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn">Inicia sesión</Link>
            </div>
        </div>
    )
}

export default NavBarLanding