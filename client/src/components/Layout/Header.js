import React from "react";

import Button from "react-bootstrap/Button";

// import components
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <div className="site-navbar py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <Link to="/" className="js-logo-clone">
                  <i className="ri-cross-fill"></i>Pharma
                </Link>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav
                className="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li>
                    <Link to="/store">Our Store</Link>
                  </li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Auth User */}
            {!auth.user ? (
              <>
                <Link to="/login" className="icons-btn d-inline-block log">
                  <Button variant="outline-success text-capitalize">
                    <i className="ri-login-box-line p-1"></i>
                    Login
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <SearchInput />
                <div className="icons d-flex align-items-center">
                  <Link to="/cart" className="icons-btn d-inline-block bag">
                    <span className="ri-shopping-bag-line"></span>
                    <span className="number">0</span>
                  </Link>
                </div>

                <nav className="site-navigation text-right text-md-center">
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li className="has-children">
                      <Link to="/">
                        <i className="ri-user-3-line"></i>
                        {auth?.user?.name}
                        <i className="ri-arrow-drop-down-fill"></i>
                      </Link>

                      <ul className="dropdown">
                        <li>
                          <Link
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="d-inline-block"
                          >
                            <Button variant="outline-success text-capitalize my-button">
                              <i className="ri-dashboard-line p-1"></i>
                              Dashboard
                            </Button>
                          </Link>
                        </li>

                        <li>
                          <Link
                            onClick={handleLogout}
                            to="/login"
                            className="d-inline-block"
                          >
                            <Button variant="outline-success text-capitalize my-button">
                              <i className="ri-login-box-line p-1"></i>
                              Logout
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
