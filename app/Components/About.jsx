import React from 'react'

function About() {
    return (
        <>
            {/* About Section */}
            <section className="about-section bg-white">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            <div
                                className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
                                data-wow-delay="600ms"
                            >
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">get to know us</span>
                                        <h2>
                                            Leading the best software <br />
                                            company in town
                                        </h2>
                                        <div className="text">
                                            The ICT Hub is a widely recognized software development company that
                                            provides IT-enabled solutions, services, and consultations to a range of
                                            organizations worldwide. Embrace innovation and growth with The ICT
                                            Hub, where reliable solutions perfect for your needs await you. Our
                                            expertise lies in driving your organization's growth by providing modern
                                            and innovative solutions utilizing advanced technology and tools.
                                        </div>
                                        <div className="text">
                                            We put our clients’ and partners’ needs front and center. We understand
                                            every individual or organization’s needs are unique and which is why we
                                            emphasize a personalized approach to deliver solutions to meet your
                                            requirements precisely.
                                        </div>
                                        <div className="text">
                                            Our team of experts is not only highly skilled and innovative in their field,
                                            but they also possess a knack for thinking outside the box. With their
                                            creative and unique perspectives, they are ready to provide solutions to
                                            elevate your company, organization, institution, or individual endeavors
                                            to new heights.
                                        </div>
                                        <div className="text">
                                            With The ICT Hub by your side, you can trust that you'll receive reliable
                                            solutions and a dedicated partner committed to your growth and
                                            success. Let us be your guide in the ever-evolving tech landscape,
                                            where possibilities are endless and your ambitions can become a
                                            Reality.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="image-box">
                                        <span className="icon icon-dots-one bounce-x" />
                                        <figure className="image-1 overlay-anim wow fadeInUp">
                                            <img src="/images/resource/about-1.jpg" alt="" />
                                        </figure>
                                        <figure className="image-2 overlay-anim wow fadeInRight">
                                            <img src="/images/resource/about-2.jpg" alt="" />
                                        </figure>
                                        <span className="icon-box icon-one">
                                            <i className="flaticon-innovation" />
                                        </span>
                                        <span className="icon-box icon-two">
                                            <i className="flaticon-rocket" />
                                        </span>

                                    </div>
                                    <div className="exp-box bg-white mt-15">
                                        <h2 className="count">
                                            <i className="icon flaticon-experience" /> +8
                                        </h2>
                                        <span className="txt">Years of Experience</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Emd About Section */}
        </>
    )
}

export default About

