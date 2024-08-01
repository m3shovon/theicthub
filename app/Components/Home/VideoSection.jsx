import React from 'react'

function VideoSection() {
  return (
    <>
      <section className="video-section">
          <div className="auto-container">
            <div className="video-box">
              <div className="bg">
                <div
                  className="bg bg-image"
                  style={{ backgroundImage: "url(images/background/2.jpg)" }}
                />
                <div className="overlay" />
              </div>
              <div className="content">
                <div className="btn-box">
                  <a
                    href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                    className="play-now"
                    data-fancybox="gallery"
                    data-caption=""
                  >
                    <i className="icon fa fa-play" aria-hidden="true" />
                    <span className="ripple" />
                  </a>
                </div>
                <h2 className="title">Most Trusted Software Company</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section-two pull-up">
          <div className="auto-container">
            <div className="row">
              {/* Features Block */}
              <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="content">
                    <h6 className="title">
                      <a href="page-service-details.html">
                        Professional <br />
                        staff
                      </a>
                    </h6>
                    <i className="icon flaticon-team" />
                  </div>
                  <a href="page-service-details.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
              {/* Features Block */}
              <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="content">
                    <h6 className="title">
                      <a href="page-service-details.html">
                        We satisfy <br />
                        you 100%
                      </a>
                    </h6>
                    <i className="icon flaticon-customer-satisfaction" />
                  </div>
                  <a href="page-service-details.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
              {/* Features Block */}
              <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="content">
                    <h6 className="title">
                      <a href="page-service-details.html">
                        high quality <br />
                        designing
                      </a>
                    </h6>
                    <i className="icon flaticon-design-thinking" />
                  </div>
                  <a href="page-service-details.html" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-box">
              Digital Agency services built specifically for your business.{" "}
              <a
                href="page-services.html"
                className="theme-btn btn-style-one light-bg small"
              >
                Find Your Solution
              </a>
            </div>
          </div>
        </section>
    </>
  )
}

export default VideoSection;
