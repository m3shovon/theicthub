import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="Web Application" />
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
            <h3 className="mt-4">Web Application Service Overview</h3>
            <p>
            We specialize in creating efficient and engaging web applications from scratch by utilizing industry-standard web app development technologies like Python, Django, Javascript, React, Redux, Next JS, Express JS. Our expertise includes designing and developing enterprise web apps, web portals, customer-facing web apps, online services, e-commerce, analytics web apps, and many more. With our services, organizations can seamlessly conduct their activities online, enhancing overall workflow while maintaining constant connectivity with their audience and employees.
            </p>
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
