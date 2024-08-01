import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Single_service from './_components/Single_service'
// Define props
const dynamicHref = "/services/software-development";
const dynamicHref2 = "/services/web-application";
const dynamicHref3 = "/services/e-commerce-and-marketplace";
const dynamicHref4 = "/services/mobile-app-development";
const dynamicHref5 = "/services/enterprise-software-development";
const dynamicHref6 = "/services/game-development";
const dynamicHref7 = "/services/website-design-and-development";
const dynamicHref8 = "/services/business-intelligence-solutions";
const dynamicHref9 = "/services/digital-marketing-solutions";
function page() {
  return (
    <>
      <Breadcrumb page_title="Services" />
      <section class="services-section bg-white">
		<div class="auto-container">
            <div class="row">
            <Single_service count="1" service_link={dynamicHref} service_title_1="SOFTWARE" service_title_2="DEVELOPMENT SERVICE" service_info="The ICT Hub help you maximize your potential in software development services by infusing the operational ….." />
            <Single_service count="2" service_link={dynamicHref2} service_title_1="WEB" service_title_2="APPLICATION SERVICE" service_info="We specialize in creating efficient and engaging web applications from scratch by utilizing industry-standard web app ….." />
            <Single_service count="3" service_link={dynamicHref3} service_title_1="E-COMMERCE &" service_title_2="MARKETPLACE DEVELOPMENT" service_info="We offer e-commerce and marketplace-building services to assist businesses in establishing an online presence and effortlessly reaching clients. " />
            <Single_service count="4" service_link={dynamicHref4} service_title_1="MOBILE APP" service_title_2="DEVELOPMENT SERVICE" service_info="Rapid growth in mobile technology has probed innovation in mobile application development for both established businesses as well as entrepreneurs" />
            <Single_service count="5" service_link={dynamicHref5} service_title_1="ENTERPRISE" service_title_2="SOFTWARE DEVELOPMENT" service_info="Our enriched Enterprise solutions are flexible enough to transform your business process and achieve potential of agile growth." />
            <Single_service count="6" service_link={dynamicHref6} service_title_1="GAME " service_title_2="DEVELOPMENT" service_info="We focus on game creation for Desktop, Online, Android, IOS, and TV platforms. For the local gaming business, our team produces interesting 2D and 3D games" />
            <Single_service count="7" service_link={dynamicHref7} service_title_1="WEBSITE DESIGN" service_title_2="AND DEVELOPMENT" service_info="Our experienced team specializes in creating user-friendly websites tailored to organizations’ unique needs. From HTML5 development to responsive design and" />
            <Single_service count="8" service_link={dynamicHref8} service_title_1="BUSINESS " service_title_2="INTELLIGENCE SOLUTIONS" service_info="Every Kind of Business need Right Decision in Right for their business growth and expansion. We Provide Business Intelligence Solutions so that you can make data" />
            <Single_service count="9" service_link={dynamicHref9} service_title_1="DIGITAL" service_title_2="MARKETING SOLUTIONS" service_info="Social Media Marketing ( SMM ) Social Media Marketing “SMM” is the use of social media platforms like (Facebook, Instagram, LinkedIn) to connect with your audience to improve ...." />
            </div>
        </div>

    </section>
    </>
  )
}

export default page
