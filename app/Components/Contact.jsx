import React from 'react'

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="bg bg-pattern-6" />
        <div className="bg-image">
          <img src="images/resource/girl.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">contact with us</span>
                  <h2>let’s work together?</h2>
                  <div className="text">
                    Sed ut perspiciatis unde omnis natus error sit voluptatem
                    accusa ntium doloremque laudantium totam rem.
                  </div>
                </div>
                {/* Contact block */}
                <div className="contact-info-block">
                  <div className="inner">
                    <i className="icon fa fa-phone" />
                    <h6 className="title">Have any question?</h6>
                    <div className="text">
                      Free <a href="tel:+8801708591899">+880 1708 591 899</a>
                    </div>
                  </div>
                </div>
                {/* Contact Info block */}
                <div className="contact-info-block">
                  <div className="inner">
                    <i className="icon fa fa-envelope" />
                    <h6 className="title">Send email</h6>
                    <div className="text">
                      <a href="mailto:info@theicthub.com">
                        info@theicthub.com
                      </a>
                    </div>
                  </div>
                </div>
                {/* Contact Info block */}
                <div className="contact-info-block">
                  <div className="inner">
                    <i className="icon fa fa-map-marker-alt" />
                    <h6 className="title">Visit anytime</h6>
                    <div className="text">
                      House no. 8, 2nd Floor,
                      <br />
                      Mohammadia Housing main road,
                      <br />
                      Mohammadpur, Dhaka – 1207
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Column */}
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Contact Form */}
                <div className="contact-form wow fadeInLeft">
                  <h2 className="title">Contact us</h2>
                  {/*Contact Form*/}
                  <form
                    method="post"
                    action="https://kodesolution.com/html/2023/digima-html/get"
                    id="contact-form"
                  >
                    <div className="row">
                      <div className="form-group col-lg-12">
                        <input
                          type="text"
                          name="full_name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Comment"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <button
                          className="theme-btn btn-style-one hvr-dark"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title">Write a Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/*End Contact Form */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.593510996673!2d90.35461467518891!3d23.761870688336153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5f934e832d%3A0x9569d0daa0b7ece6!2sTHE%20ICT%20HUB!5e0!3m2!1sen!2sbd!4v1710232469944!5m2!1sen!2sbd"
            // width={600}
            height={500}
            style={{ border: 0, width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </section>
    </>
  )
}

export default Contact
