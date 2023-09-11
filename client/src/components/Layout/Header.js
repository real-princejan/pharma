import React from 'react'

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <div class="site-navbar py-2">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="logo">
            <div class="site-logo">
              
              <Link to='/' class="js-logo-clone"><i class="ri-cross-fill"></i>Pharma</Link>
            </div>
          </div>
          <div class="main-nav d-none d-lg-block">
            <nav class="site-navigation text-right text-md-center" role="navigation">
              <ul class="site-menu js-clone-nav d-none d-lg-block">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/store'>Store</Link></li>
                <li class="has-children">
                    <Link to='/'> Items <i class="ri-arrow-down-double-line"></i></Link>
                  <ul class="dropdown">
                    <li><Link to='/'>Supplements</Link></li>
                    <li class="has-children">
                      <Link to='/' > Vitamins <i class="ri-arrow-right-double-line"></i></Link>
                      <ul class="dropdown ">
                        <li><Link to='/'>Supplements</Link></li>
                        <li><Link to='/'>Vitamins</Link></li>
                        <li><Link to='/'>Diet &amp; Nutrition</Link></li>
                      </ul>
                    </li>
                    <li><Link to='/'>Diet &amp; Nutrition</Link></li>

                  </ul>
                </li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div class="icons">
            <Link to='/' class="icons-btn d-inline-block js-search-open">
              <span class="ri-search-line"></span></Link>

            <Link to='/cart' class="icons-btn d-inline-block bag">
              <span class="ri-shopping-bag-line"></span>
              <span class="number">2</span>
            </Link>

            <Link to='/login' class="icons-btn d-inline-block log">
              <Button variant="outline-info text-capitalize"><i class="ri-login-box-line p-1"></i>Login</Button>
            </Link>
            
            <Link to='/' class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
              class="icon-menu"></span></Link>
              
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Header