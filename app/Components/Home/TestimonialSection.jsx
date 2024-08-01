import React from 'react'

function TestimonialSection() {
  return (
    <>
      <section className="testimonial-section">
          <div
            className="bg"
            style={{ backgroundImage: "url(images/background/1.jpg)" }}
          />
          <div className="auto-container">
            <div className="testimonials">
              {/* Swiper */}
              <div className="swiper-container testimonial-content">
                <div className="swiper-wrapper">
                  {/* Testimonial Block Two */}
                  <div className="testimonial-block swiper-slide">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/resource/testi-1.png" alt="" />
                        </figure>
                      </div>
                      <div className="text">
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch.
                      </div>
                      <h4 className="name">Christine Eve</h4>
                    </div>
                  </div>
                  {/* Testimonial Block Two */}
                  <div className="testimonial-block swiper-slide">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/resource/testi-1.png" alt="" />
                        </figure>
                      </div>
                      <div className="text">
                        competitive pricing and customer support. It’s throughly
                        refresing to get such a personal touch. This is due to
                        their excellent service,{" "}
                      </div>
                      <h4 className="name">Christine Eve</h4>
                    </div>
                  </div>
                  {/* Testimonial Block Two */}
                  <div className="testimonial-block swiper-slide">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/resource/testi-1.png" alt="" />
                        </figure>
                      </div>
                      <div className="text">
                        pricing and customer support. It’s throughly refresing
                        to get such This is due to their excellent service,
                        competitive a personal touch.
                      </div>
                      <h4 className="name">Christine Eve</h4>
                    </div>
                  </div>
                  {/* Testimonial Block Two */}
                  <div className="testimonial-block swiper-slide">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="images/resource/testi-1.png" alt="" />
                        </figure>
                      </div>
                      <div className="text">
                        pricing and customer support. It’s throughly refresing
                        to get such This is due to their excellent service,
                        competitive a personal touch.
                      </div>
                      <h4 className="name">Christine Eve</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial Thumbs */}
              <div className="swiper-container testimonial-thumbs">
                <div className="swiper-wrapper">
                  <div className="swiper-slide testimonial-thumb">
                    <figure className="image">
                      <img src="images/resource/testi-1.png" alt="" />
                    </figure>
                  </div>
                  <div className="swiper-slide testimonial-thumb">
                    <figure className="image">
                      <img src="images/resource/testi-thumb-2.png" alt="" />
                    </figure>
                  </div>
                  <div className="swiper-slide testimonial-thumb">
                    <figure className="image">
                      <img src="images/resource/testi-thumb-3.png" alt="" />
                    </figure>
                  </div>
                  <div className="swiper-slide testimonial-thumb">
                    <figure className="image">
                      <img src="images/resource/testi-thumb-3.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default TestimonialSection
