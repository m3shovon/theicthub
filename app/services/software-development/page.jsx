import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="Software Development" />
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
            <h3 className="mt-4">Software Development Service Overview</h3>
            <p>
            The ICT Hub help you maximize your potential in software development services by infusing the operational excellence of our experts. Our service excellence caters tangible business solutions to meet the needs of diversified businesses from startups, enterprises or mid-level companies. Our strategic, authentic and low-risk approach offers businesses an optimized performance, stability and stronger business ecosystem.
            </p>
            <More_Info/>
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
