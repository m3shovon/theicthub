import Link from 'next/link'
import React from 'react'
function Menu() {
  return (
    <>
      <header className="main-header header-style-one">
        {/* Main box */}
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/images/The-ICT-hub-white.png" alt="" title="Tronis" />
              </Link>
            </div>
            <button className="ui-btn ui-btn search-btn">
              <span className="icon lnr lnr-icon-search" />
            </button>
          </div>
          {/*Nav Box*/}
          <div className="nav-outer">
            <nav className="nav main-menu">
              <ul className="navigation">
                <li>
                  <Link href="/">Home</Link>
                  {/* <a href="/">Home</a> */}
                  {/* <ul>
                <li>
                  <a href="index.html">Home page 01</a>
                </li>
                <li>
                  <a href="index-2.html">Home page 02</a>
                </li>
                <li>
                  <a href="index-3.html">Home page 03</a>
                </li>
                <li className="dropdown">
                  <a href="#">Single</a>
                  <ul>
                    <li>
                      <a href="index-1-single.html">Home Single 1</a>
                    </li>
                    <li>
                      <a href="index-2-single.html">Home Single 2</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">dark</a>
                  <ul>
                    <li>
                      <a href="index-1-dark.html">Home Dark 1</a>
                    </li>
                    <li>
                      <a href="index-2-dark.html">Home Dark 2</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Boxed</a>
                  <ul>
                    <li>
                      <a href="index-1-boxed.html">Home Boxed 1</a>
                    </li>
                    <li>
                      <a href="index-2-boxed.html">Home Boxed 2</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">RTL</a>
                  <ul>
                    <li>
                      <a href="index-1-rtl.html">Home RTL 1</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Header Styles</a>
                  <ul>
                    <li>
                      <a href="index.html">Header Style One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Header Style Two</a>
                    </li>
                  </ul>
                </li>
              </ul> */}
                </li>
                <li className="dropdown">
                  <Link href="/about">About</Link>
                  <ul>
                    <li>
                      <a href="#">Company Profile</a>
                    </li>

                  </ul>
                </li>
                <li className="dropdown">
                  <Link href="/services">Services</Link>
                  <ul className='extra_width'>
                    <li className="current">
                      <Link href="/services/software-development">
                        <span>Software Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/web-application">
                        <span>Web Application</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/e-commerce-and-marketplace">
                        <span>E-Commerce & Marketplace</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/mobile-app-development">
                        <span>Mobile App Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/enterprise-software-development">
                        <span>Enterprise Software Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/game-development">
                        <span>Game Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/website-design-and-development">
                        <span>Website Design And Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/business-intelligence-solutions">
                        <span>Business Intelligence</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/digital-marketing-solutions">
                        <span>Digital Marketing</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link href="/projects">Porjects</Link>
                  <ul>
                    <li>
                      <Link href="/projects">All Porjects</Link>
                      <Link href="/projects">Porjects</Link>
                    </li>
                    <li>
                      <Link href="/projects/project-details">Portfolio Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  {/* <a href="/contact">Contact</a> */}
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* Main Menu End*/}
          </div>
          <div className="outer-box">
            <a href="tel:+92(8800)9806" className="info-btn">
              <i className="icon fa fa-phone" />
              <strong className="text">+92 (8800) 6890</strong>
            </a>
            {/* Mobile Nav toggler */}
            <div className="mobile-nav-toggler">
              <span className="icon lnr-icon-bars" />
            </div>
          </div>
        </div>
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <a href="/">
                  <img src="/images/The-ICT-hub-white.png" alt="" title="" />
                </a>
              </div>
              <div className="close-btn">
                <i className="icon fa fa-times" />
              </div>
            </div>
            <ul className="navigation clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </ul>
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <a href="tel:+92880098670">+92 (8800) - 98670</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <a href="mailto:help@company.com">help@company.com</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Send Email</span>
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search">
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form
              method="post"
              action="https://kodesolution.com/html/2023/digima-html/index.html"
            >
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  defaultValue=""
                  placeholder="Search..."
                  required=""
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <a href="/" title="">
                  <img src="/images/The-ICT-hub-logo.png" alt="" title="" />
                </a>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
      {/*End Main Header */}
    </>
  )
}

export default Menu
