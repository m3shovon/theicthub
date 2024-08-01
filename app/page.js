// import Image from "next/image";
// import styles from "./page.module.css";

import About from "./Components/About";
import Blog from "./Components/Blog";
import Call_to_action from "./Components/Home/Call_to_action";
import Client from "./Components/Home/Our_Client/Client";
import ClientsSection from "./Components/Home/ClientsSection";
import Slider from "./Components/Home/Slider";
import Main_team from "./Components/Home/Team/Main_team";
import Technologies_database from "./Components/Home/Technologies/Technologies_database";
import Technologies_frameworks from "./Components/Home/Technologies/Technologies_frameworks";
import Technologies_languages from "./Components/Home/Technologies/Technologies_languages";
import Technologies_info from "./Components/Home/Technologies/Technologies_languages";
import TestimonialSection from "./Components/Home/TestimonialSection";
import VideoSection from "./Components/Home/VideoSection";
import Menu from "./Components/Menu";
import Slidertwo from "./Components/Home/Slidertwo";
import Single_service from "./services/_components/Single_service";
import Link from "next/link";

export default function Home() {
  const dynamicHref = "/services/software-development";
const dynamicHref2 = "/services/web-application";
const dynamicHref3 = "/services/e-commerce-and-marketplace";
const dynamicHref4 = "/services/mobile-app-development";
const dynamicHref5 = "/services/enterprise-software-development";
const dynamicHref6 = "/services/game-development";
const dynamicHref7 = "/services/website-design-and-development";
const dynamicHref8 = "/services/business-intelligence-solutions";
const dynamicHref9 = "/services/digital-marketing-solutions";
  return (
    <>
      {/* Body info Start */}
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="preloader" /> */}
        <Slidertwo/>
        {/* <Slider /> */}

        {/* End Main Slider*/}
        {/* Services Section */}
        <section className="services-section">
          <div className="bg bg-pattern-1" />
          <div className="auto-container">
            <div className="sec-title light">
              <div className="row">
                <div className="col-lg-7">
                  <span className="sub-title">our services</span>
                  <h2>Services we offer</h2>
                </div>
                <div className="col-lg-5">
                  <div className="text-right">
                    <Link
                      href="/services"
                      className="theme-btn btn-style-one hvr-dark"
                    >
                      <span className="btn-title">View All Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
            <Single_service count="1" service_link={dynamicHref} service_title_1="SOFTWARE" service_title_2="DEVELOPMENT SERVICE" service_info="The ICT Hub help you maximize your potential in software development services by infusing the operational ….." />
            <Single_service count="2" service_link={dynamicHref2} service_title_1="WEB" service_title_2="APPLICATION SERVICE" service_info="We specialize in creating efficient and engaging web applications from scratch by utilizing industry-standard web app ….." />
            <Single_service count="3" service_link={dynamicHref3} service_title_1="E-COMMERCE &" service_title_2="MARKETPLACE DEVELOPMENT" service_info="We offer e-commerce and marketplace-building services to assist businesses in establishing an online presence and effortlessly reaching clients. " />
            <Single_service count="4" service_link={dynamicHref4} service_title_1="MOBILE APP" service_title_2="DEVELOPMENT SERVICE" service_info="Rapid growth in mobile technology has probed innovation in mobile application development for both established businesses as well as entrepreneurs" />
            <Single_service count="5" service_link={dynamicHref5} service_title_1="ENTERPRISE" service_title_2="SOFTWARE DEVELOPMENT" service_info="Our enriched Enterprise solutions are flexible enough to transform your business process and achieve potential of agile growth." />
            <Single_service count="6" service_link={dynamicHref6} service_title_1="GAME " service_title_2="DEVELOPMENT" service_info="We focus on game creation for Desktop, Online, Android, IOS, and TV platforms. For the local gaming business, our team produces interesting 2D and 3D games" />
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* About Section */}
        <section className="about-section bg-white">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="content-column col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInRight"
                  data-wow-delay="600ms"
                >
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">get to know us</span>
                      <h2>Our Technologies</h2>
                      <div className="text mt-15">
                        OUR TECHNOLOGIES We mostly work on web development. Here
                        is a list of technologies we use for web development-
                        Python, Django, Laravel, Flask, React & redux, Rest API,
                        etc. And for Android app development we use Java. More
                        and more new technologies are coming but we are looking
                        forward to Flutter because hybrid apps and
                        cross-platform technologies are becoming more popular
                        these days and they are easy to use. Unity for game
                        Development.
                      </div>
                    </div>
                      {/*Language carousel*/}
                      <Technologies_languages title="Languages"/>
                      <Technologies_frameworks title="Frameworks"/>
                      <Technologies_database title="Database"/>
                      {/*Language carousel*/}
                  </div>
                </div>
                {/* Image Column */}
              </div>
            </div>
          </div>
        </section>
        {/*Emd About Section */}
        <Call_to_action/>
        {/* About Section Two */}
        <Client/>

        {/* Why Choose US */}
        <section className="why-choose-us">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
                  data-wow-delay="600ms"
                >
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">Your Benefits</span>
                      <h2>
                        Why you Should Choose <br />
                        ICT HUB
                      </h2>
                      <ul className="list-style-two text">
                        <li>
                          <i class="fa fa-check-circle"></i> Research and
                          Analysis of Customers Need, interest and Concern
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Planning,
                          Prototyping, Visualization and Documentation
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> First Class and
                          Talented on Demand Dedicated Development Team
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Excellent
                          interpersonal Communication
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Maintaining Global
                          Quality Standard and Testing Procedure
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> 100% Customer
                          Satisfaction
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Trending UI/ UX
                          Design and Maintaining Software Development procedure
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> High Level Security
                          and Risk management
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Data Security and 3
                          Leyer Backup Storage
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> On time Delivery
                          and Implementation.
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> 24/7 After Sales
                          Service and Support with ticketing System.
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Free on Demand IT
                          Consultation
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> High Integrity and
                          Compassion
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Data Driven
                          Decisions
                        </li>
                        <li>
                          <i class="fa fa-check-circle"></i> Informative
                          Reporting and Graphical BI Dash Board
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column wow fadeInLeft">
                    <div className="image-box">
                      <figure className="image overlay-anim wow fadeInUp">
                        <img src="images/resource/why-us.jpg" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Emd Why Choose US */}
        {/* Projects Section*/}
        <section className="projects-section">
          <div className="upper-box">
            <div className="auto-container">
              <div className="sec-title">
                <span className="sub-title">our portfolio</span>
                <h2>our recent work</h2>
              </div>
            </div>
          </div>
          <div className="carousel-outer">
            {/*clients carousel*/}
            <div className="projects-carousel owl-carousel owl-theme default-navs">
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-1.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-1.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-2.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-2.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-3.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-3.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-4.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-4.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-1.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-1.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-2.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-2.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-3.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-3.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="project-block">
                <div className="image-box">
                  <figure className="image">
                    <a
                      href="images/resource/project-4.jpg"
                      className="lightbox-image"
                    >
                      <img src="images/resource/project-4.jpg" alt="" />
                    </a>{" "}
                  </figure>
                  <div className="caption-box">
                    <h4 className="title">
                      <a href="page-project-details.html">
                        Marketing webdesign
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Projects Section */}
        {/* Contact Section */}

        {/* End Contact Info Section */}
        {/* News Section */}
        <Blog />
        {/*End News Section */}
        
      </div>

      {/* Body info End */}
    </>
  );
}
