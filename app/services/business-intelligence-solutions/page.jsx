import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="Business Intelligence Solutions" />
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
            <h3 className="mt-4">Business Intelligence Solutions Service Overview</h3>
            <p>
            Every Kind of Business need Right Decision in Right for their business growth and expansion. We Provide Business Intelligence Solutions so that you can make data driven calculated right decision in crucial and tough time. Its saves your time, energy, manpower, reduce risk factors and give you ultimate power of taking right decision in very short time. We maintain International Standard Procedure so that your BI Dash Board is more informative and easier to understand.
            </p>
            <ul>
              <li>➡️ BI Dashboard</li>
              <li>➡️ Data collection, analysis & lineage tracking</li>
              <li>➡️ Data visualization through interactive dashboard</li>
              <li>➡️ Real-Time Reporting Tools</li>
              <li>➡️ Cloud Integration</li>
              <li>➡️ API Integration</li>
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
