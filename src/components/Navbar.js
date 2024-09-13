import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

export const Navbar = () => {
  return (
    <>
       <nav class="navbar navbar-expand-lg main_menu">
        <div class="container">
            <Link class="navbar-brand" to="/">
                <img src={logo} alt="RegFood" className="img-fluid" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="far fa-bars menu_icon_bar"></i>
                <i className="far fa-times close_icon_close"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">about</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/menu">menu</Link>
                    </li>
                   
                    <li class="nav-item">
                        <Link class="nav-link" to="/chefs">chefs</Link>
                    </li>
                    {/* <li class="nav-item">
                        <Link class="nav-link" to="/pages">Pages</Link>
                    </li> */}
                    <li class="nav-item">
                        <Link class="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <ul class="droap_menu">
                            <li><Link to="/sign-in">sign in</Link></li>
                            <li><Link to="/sign-up">sign up</Link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/order">order</Link>

                    </li>
                </ul>
                <ul class="menu_icon d-flex flex-wrap">
                    <li>
                        <Link class="cart_icon" to="/cart_view"><i class="fas fa-shopping-basket"></i>
                            <span>05</span></Link>
                    </li>
                    <li>
                        <Link href="dashboard.html"><i class="fas fa-user"></i></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
