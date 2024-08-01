import Link from 'next/link'
import React from 'react'

function LeftSide() {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
          <div className="service-sidebar">
            {/*Start Services Details Sidebar Single*/}
            <div className="sidebar-widget service-sidebar-single">
              <div className="sidebar-service-list">
                <ul>
                  <li className="current">
                    <Link href="/services/software-development">
                      <i className="fas fa-angle-right" />
                      <span>Software Development</span>
                      </Link>
                  </li>
                  <li>
                    <Link href="/services/web-application">
                      <i className="fas fa-angle-right" />
                      <span>Web Application</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/e-commerce-and-marketplace">
                      <i className="fas fa-angle-right" />
                      <span>E-Commerce & Marketplace</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/mobile-app-development">
                      <i className="fas fa-angle-right" />
                      <span>Mobile App Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/enterprise-software-development">
                      <i className="fas fa-angle-right" />
                      <span>Enterprise Software Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/game-development">
                      <i className="fas fa-angle-right" />
                      <span>Game Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/website-design-and-development">
                      <i className="fas fa-angle-right" />
                      <span>Website Design And Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-intelligence-solutions">
                      <i className="fas fa-angle-right" />
                      <span>Business Intelligence</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/digital-marketing-solutions">
                      <i className="fas fa-angle-right" />
                      <span>Digital Marketing</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="service-details-help">
                <div className="help-shape-1" />
                <div className="help-shape-2" />
                <h2 className="help-title">
                  Contact with <br /> us for any <br /> advice
                </h2>
                <div className="help-icon">
                  <span className=" lnr-icon-phone-handset" />
                </div>
                <div className="help-contact">
                  <p>Need help? Talk to an expert</p>
                  <a href="tel:+8801708591899">01708591899</a>
                </div>
              </div>
              {/*Start Services Details Sidebar Single*/}
              <div className="sidebar-widget service-sidebar-single mt-4">
                <div
                  className="service-sidebar-single-btn wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1200m"
                >
                  <a href="#" className="theme-btn btn-style-one d-grid">
                    <span className="btn-title">
                      <span className="fas fa-file-pdf" /> download company profile
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/*End Services Details Sidebar*/}
          </div>
        </div>
    </>
  )
}

export default LeftSide
