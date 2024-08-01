import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="Mobile App Development Service" />
      {/*Start Services Details*/}
  <section className="services-details bg-white">
    <div className="container">
      <div className="row">
        {/*Start Services Details Sidebar*/}
        <LeftSide/>
        {/*Start Services Details Content*/}
        <div className="col-xl-8 col-lg-8">
          <div className="services-details__content">
            <img src="/images/Servics/Software_Development.png" alt="Software_Development.png" />
            <h3 className="mt-4">Mobile App Development Service</h3>
            <p>
            Rapid growth in mobile technology has probed innovation in mobile application development for both established businesses as well as entrepreneurs. Our experienced team of mobile app development can dive deep into business operations and implement innovative UI/UX designs, delightful and appealing user interface with robust architecture that ensures hassle-free performance. The ICT Hub harnesses the power of the latest technology, frameworks and SDK to convert challenging business ideas into high-performing mobile applications.
            </p>
            <ul>
              <li>➡️ Mobile Apps Development Services</li>
              <li>➡️ Design and Prototyping of Apps</li>
              <li>➡️ Native App Development</li>
              <li>➡️ Cross-Platform App Development</li>
              <li>➡️ Enterprise Solution</li>
            </ul>
            {/* <More_Info/> */}
          </div>
        </div>
        {/*End Services Details Content*/}
      </div>
    </div>
  </section>
  {/*End Services Details*/}
    </>
  )
}

export default page
