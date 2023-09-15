import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="block-7">
              <h3 className="footer-heading mb-4">About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                quae reiciendis distinctio voluptates sed dolorum excepturi iure
                eaque, aut unde.
              </p>
            </div>
          </div>
          <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Quick Links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Supplements</a>
              </li>
              <li>
                <a href="#">Vitamins</a>
              </li>
              <li>
                <a href="#">Diet &amp; Nutrition</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-2 mb-5">
              <h3 className="footer-heading mb-4">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">University of Pangasinan</li>
                <li className="phone">(+63) 993 894 321</li>
                <li className="email">pharma@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
