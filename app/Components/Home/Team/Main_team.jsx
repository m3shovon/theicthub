import React from 'react'

function Main_team() {
  return (
    <>
      <section className="team-section" style={{background:'white'}}>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">our team members</span>
              <h2>Meet the experts</h2>
            </div>
            <div className="row">
              {/* Team block */}
              <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-team-details.html">
                        <img src="images/resource/team-1.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="social-links">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <span className="share-icon fa fa-share-alt" />
                  </div>
                  <div className="info-box">
                    <h5 className="name">
                      <a href="page-team-details.html">Zubaer Ahammed</a>
                    </h5>
                    <span className="designation">CEO</span>
                  </div>
                </div>
              </div>
              {/* Team block */}
              <div
                className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-team-details.html">
                        <img src="images/resource/team-3.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="social-links">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <span className="share-icon fa fa-share-alt" />
                  </div>
                  <div className="info-box">
                    <h5 className="name">
                      <a href="page-team-details.html">Sadik Ahammed</a>
                    </h5>
                    <span className="designation">CTO</span>
                  </div>
                </div>
              </div>
              {/* Team block */}
              <div
                className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="page-team-details.html">
                        <img src="images/resource/team-3.jpg" alt="" />
                      </a>
                    </figure>
                    <div className="social-links">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <span className="share-icon fa fa-share-alt" />
                  </div>
                  <div className="info-box">
                    <h5 className="name">
                      <a href="page-team-details.html">Muzahidul Islam</a>
                    </h5>
                    <span className="designation">HR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Main_team
