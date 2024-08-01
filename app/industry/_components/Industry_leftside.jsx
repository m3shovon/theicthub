import React from 'react'

function Industry_leftside() {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
          <div className="service-sidebar">
            {/*Start Services Details Sidebar Single*/}
            <div className="sidebar-widget service-sidebar-single">
              <div className="sidebar-service-list">
                <ul>
                  <li>
                    <a href="page-service-details.html" className="current">
                      <i className="fas fa-angle-right" />
                      <span>Startup</span>
                    </a>
                  </li>
                  <li className="current">
                    <a href="#Health_Care">
                      <i className="fas fa-angle-right" />
                      <span>Health Care</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>Garment</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>Education</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>Government</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>Retail</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>E-Commerce</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>Game</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>Travel & Tourism</span>
                    </a>
                  </li>
                  <li>
                    <a href="page-service-details.html">
                      <i className="fas fa-angle-right" />
                      <span>Automotive</span>
                    </a>
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
                  <a href="tel:12463330079">+892 ( 123 ) 112 - 9999</a>
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
                      <span className="fas fa-file-pdf" /> download pdf file
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

export default Industry_leftside
