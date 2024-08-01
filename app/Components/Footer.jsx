import React from 'react'
"use-client"
import Script from "next/script";
import Link from 'next/link';
function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="main-footer">
        {/* Upper Box */}
        <div className="auto-container">
          <div className="upper-box">
            <div className="row">
              {/*  */}
              <div className="contact-info logo-box col-lg-4 col-md-12 wow fadeInUp text-center">
                <div className="logo">
                  <a href="#">
                    <img src="images/The-ICT-hub-white.png" alt="" />
                  </a>
                </div>
              </div>
              {/* Contact Info */}
              <div className="contact-info col-lg-4 col-md-12 wow fadeInRight">
                <div className="inner-box">
                  <h4 className="title">Send Email</h4>
                  <div className="text">
                    <a href="mailto:info@theicthub.com">info@theicthub.com</a>
                  </div>
                </div>
              </div>
              {/* Contact Info */}
              <div
                className="contact-info col-lg-4 col-md-12 wow fadeInLeft"
                data-wow-delay="600ms"
              >
                <div className="inner-box">
                  <h4 className="title">call now</h4>
                  <div className="text">
                    <a href="tel:+8801708591899">+880 1708 591 899</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Upper Box */}
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              {/*Footer Column*/}
              <div className="footer-column col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="footer-widget about-widget">
                      <h6 className="widget-title">QUICK LINK</h6>
                      <div className="text">
                        <ul className="user-links">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/industry">Industry</Link>
                          </li>
                          <li>
                            <Link href="#">Career</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="footer-widget">
                      <h6 className="widget-title">Explore Services</h6>
                      <ul className="user-links">
                        <li>
                          <Link href="/services/software-development">Software Development</Link>
                        </li>
                        <li>
                          <Link href="/services/web-application">Web Application</Link>
                        </li>
                        <li>
                          <Link href="/services/e-commerce-and-marketplace">E-Commerce & Marketplace</Link>
                        </li>
                        <li>
                          <Link href="/services/mobile-app-development">Mobile App Development</Link>
                        </li>
                        <li>
                          <Link href="/services/enterprise-software-development">Enterprise Software Development</Link>
                        </li>
                        <li>
                          <Link href="/services/game-development">Game Development</Link>
                        </li>
                        <li>
                          <Link href="/services/website-design-and-development">Website Design And Development</Link>
                        </li>
                        <li>
                          <Link href="/services/business-intelligence-solutions">Business Intelligence</Link>
                        </li>
                        <li>
                          <Link href="/services/digital-marketing-solutions">Digital Marketing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contacts-widget">
                      <h6 className="widget-title">Contact</h6>
                      <div className="text">
                        House no. 8, 2nd Floor, Mohammadia Housing main road,
                        Mohammadpur, Dhaka – 1207
                      </div>
                      <ul className="social-icon-two">
                        <li>
                          <Link href="https://www.facebook.com/theicthub">
                            <i className="fab fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/theict_hub">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/company/the-icthub/">
                            <i className="fab fa-linkedin" />
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Footer Column*/}

              {/*Footer Column*/}
              {/* <div className="footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-widget">
              <h6 className="widget-title">Newsletter</h6>
              <div className="widget-content">
                <div className="subscribe-form">
                  <div className="text">
                    Subsrcibe for our upcoming latest articles and news
                    resources
                  </div>
                  <form method="post" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        defaultValue=""
                        placeholder="Email Address"
                        required=""
                      />
                      <button type="button" className="theme-btn">
                        <span className="btn-title">
                          <i className="fa fa-paper-plane" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                <p>
                  © Copyright 2024 by <a href="/">theicthub.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*End Main Footer */}
      <div class="scroll-to-top scroll-to-target" data-target="html">
        <span class="fa fa-angle-up"></span>
      </div>
      {/* <Script src="js/jquery.js"></Script> */}
      <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
      <Script src="js/popper.min.js"></Script>
      <Script src="/plugins/revolution/js/jquery.themepunch.revolution.min.js"></Script>
      <Script src="/plugins/revolution/js/jquery.themepunch.tools.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.actions.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.migration.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></Script>
      <Script src="/plugins/revolution/js/extensions/revolution.extension.video.min.js"></Script>
      <Script src="/js/main-slider-Script.js"></Script>
      <Script src="/js/bootstrap.min.js"></Script>
      <Script src="/js/jquery.fancybox.js"></Script>
      <Script src="/js/jquery-ui.js"></Script>
      <Script src="/js/wow.js"></Script>
      <Script src="/js/appear.js"></Script>
      <Script src="/js/select2.min.js"></Script>
      <Script src="/js/swiper.min.js"></Script>
      <Script src="/js/owl.js"></Script>
      <Script src="/js/Script.js"></Script>
    </>
  )
}

export default Footer
