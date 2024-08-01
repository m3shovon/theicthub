import React from 'react'

function Blog() {
  return (
    <>
      <section className="news-section" style={{background:'white'}}>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">From the Blog</span>
              <h2>News &amp; Articles</h2>
            </div>
            <div className="row">
              {/* News Block */}
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="news-details.html">
                        <img src="images/resource/news-1.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="date">
                      20
                      <br /> SEP
                    </span>
                  </div>
                  <div className="lower-content">
                    <div className="author-thumb">
                      <img src="images/resource/avatar.jpg" alt="" />
                    </div>
                    <ul className="post-info">
                      <li>by Admin</li>
                      <li>2 Comments</li>
                    </ul>
                    <h4 className="title">
                      <a href="news-details.html">
                        Five Ways that can develop your business website
                      </a>
                    </h4>
                    <a href="news-details.html" className="read-more">
                      Read More <i className="fa fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* News Block */}
              <div
                className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="news-details.html">
                        <img src="images/resource/news-2.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="date">
                      20
                      <br /> SEP
                    </span>
                  </div>
                  <div className="lower-content">
                    <div className="author-thumb">
                      <img src="images/resource/avatar.jpg" alt="" />
                    </div>
                    <ul className="post-info">
                      <li>by Admin</li>
                      <li>2 Comments</li>
                    </ul>
                    <h4 className="title">
                      <a href="news-details.html">
                        Five Ways that can develop your business website
                      </a>
                    </h4>
                    <a href="news-details.html" className="read-more">
                      Read More <i className="fa fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* News Block */}
              <div
                className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="news-details.html">
                        <img src="images/resource/news-3.jpg" alt="" />
                      </a>
                    </figure>
                    <span className="date">
                      20
                      <br /> SEP
                    </span>
                  </div>
                  <div className="lower-content">
                    <div className="author-thumb">
                      <img src="images/resource/avatar.jpg" alt="" />
                    </div>
                    <ul className="post-info">
                      <li>by Admin</li>
                      <li>2 Comments</li>
                    </ul>
                    <h4 className="title">
                      <a href="news-details.html">
                        Five Ways that can develop your business website
                      </a>
                    </h4>
                    <a href="news-details.html" className="read-more">
                      Read More <i className="fa fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Blog
