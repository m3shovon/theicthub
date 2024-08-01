import React from 'react'

function ClientsSection() {
  return (
    <>
      <section className="clients-section pull-up">
          <div className="bg bg-pattern-3" />
          <div className="auto-container">
            <div className="default-tabs tabs-box">
              {/*Tabs Box*/}
              <ul className="tab-buttons clearfix">
                <li className="tab-btn active-btn" data-tab="#tab1">
                  <span className="title">Our Missions</span>
                </li>
                <li className="tab-btn" data-tab="#tab2">
                  <span className="title">Our Visions</span>
                </li>
                <li className="tab-btn" data-tab="#tab3">
                  <span className="title">Our History</span>
                </li>
              </ul>
              <div className="tabs-content">
                {/*Tab*/}
                <div className="tab active-tab" id="tab1">
                  <div className="tab-block">
                    <div className="row">
                      <div className="image-column col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                          <figure className="image">
                            <img src="images/resource/tab-img.jpg" alt="" />
                          </figure>
                          <i className="icon flaticon-mission" />
                        </div>
                      </div>
                      <div className="text-column col-lg-4 col-md-6 col-sm-12">
                        <div className="text">
                          To deliver exceptional services with revolutionary
                          solutions while constantly evolving in this fast-paced
                          information technology industry. We aspire to foster a
                          dynamic and collaborative corporate culture
                          distinguished by an unwavering commitment to
                          innovation, quality, and technology.
                        </div>
                      </div>
                      <div className="list-column col-lg-4 col-md-6 col-sm-12">
                        <div className="list-outer">
                          <ul className="list-style-two">
                            <li>
                              <i className="fa fa-check-circle" /> Nsectetur
                              cing elit
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> Suspe ndisse
                              suscip sagittis leo
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> Entum estib
                              dignissim posuere
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> If you are
                              going to use a pass
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Tab*/}
                <div className="tab" id="tab2">
                  <div className="tab-block">
                    <div className="row">
                      <div className="image-column col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                          <figure className="image">
                            <img src="images/resource/tab-img.jpg" alt="" />
                          </figure>
                          <i className="icon flaticon-mission" />
                        </div>
                      </div>
                      <div className="text-column col-lg-4 col-md-6 col-sm-12">
                        <div className="text">
                          We strive to be a global frontrunner in the IT
                          industry by delivering innovative products and
                          services to meet the unique needs of various
                          industries. Our commitment to innovation and customer
                          satisfaction drives us to push boundaries and set new
                          benchmarks.
                        </div>
                      </div>
                      <div className="list-column col-lg-4 col-md-6 col-sm-12">
                        <div className="list-outer">
                          <ul className="list-style-two">
                            <li>
                              <i className="fa fa-check-circle" /> Nsectetur
                              cing elit
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> Suspe ndisse
                              suscip sagittis leo
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> Entum estib
                              dignissim posuere
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> If you are
                              going to use a pass
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Tab*/}
                <div className="tab" id="tab3">
                  <div className="tab-block">
                    <div className="row">
                      <div className="image-column col-lg-4 col-md-6 col-sm-12">
                        <div className="image-box">
                          <figure className="image">
                            <img src="images/resource/tab-img.jpg" alt="" />
                          </figure>
                          <i className="icon flaticon-mission" />
                        </div>
                      </div>
                      <div className="text-column col-lg-4 col-md-6 col-sm-12">
                        <div className="text">
                          There are many variations of passages of available but
                          simply free text available in the market sit amed
                          majority alteration in some form, by humouor.
                        </div>
                      </div>
                      <div className="list-column col-lg-4 col-md-6 col-sm-12">
                        <div className="list-outer">
                          <ul className="list-style-two">
                            <li>
                              <i className="fa fa-check-circle" /> Nsectetur
                              cing elit
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> Suspe ndisse
                              suscip sagittis leo
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> Entum estib
                              dignissim posuere
                            </li>
                            <li>
                              <i className="fa fa-check-circle" /> If you are
                              going to use a pass
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sponsors Outer */}
            <div className="sponsors-outer">
              {/*clients carousel*/}
              <ul className="clients-carousel owl-carousel owl-theme">
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img src="images/resource/client.png" alt="" />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img src="images/resource/client.png" alt="" />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img src="images/resource/client.png" alt="" />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img src="images/resource/client.png" alt="" />
                  </a>{" "}
                </li>
                <li className="slide-item">
                  {" "}
                  <a href="#">
                    <img src="images/resource/client.png" alt="" />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default ClientsSection
