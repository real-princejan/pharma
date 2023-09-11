import React from 'react';

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">

            <div className="block-7">
              <h3 class="footer-heading mb-4">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
                sed dolorum excepturi iure eaque, aut unde.</p>
            </div>

          </div>
          <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
            <h3 class="footer-heading mb-4">Quick Links</h3>
            <ul class="list-unstyled">
              <li><a href="#">Supplements</a></li>
              <li><a href="#">Vitamins</a></li>
              <li><a href="#">Diet &amp; Nutrition</a></li>
            </ul>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="block-2 mb-5">
              <h3 class="footer-heading mb-4">Contact Info</h3>
              <ul class="list-unstyled">
                <li className='address'>University of Pangasinan</li>
                <li className="phone">(+63) 993 894 321</li>
                <li class="email">pharma@gmail.com</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer