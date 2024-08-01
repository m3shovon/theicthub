import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="Enterprise Software Development" />
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
            <h3 className="mt-4">Enterprise Software Development Service Overview</h3>
            <p>
            Our enriched Enterprise solutions are flexible enough to transform your business process and achieve potential of agile growth. We offer affordable implementation & future customization. Our Dedicated team are always active for your business operations remain active, time consuming, faster, smother more scalable.
            </p>
            <ul>
              <li>➡️ Admin Panel</li>
              <li>➡️ HR Module</li>
              <li>➡️ Accounts</li>
              <li>➡️ Inventory</li>
              <li>➡️ Sales and Marketing</li>
              <li>➡️ Order Tracking</li>
              <li>➡️ Delivery Management</li>
              <li>➡️ Vehicles Management</li>
              <li>➡️ Asset Management</li>
              <li>➡️ BI Dashboard</li>
              <li>➡️ Document</li>
              <li>➡️ Dispatch</li>
            </ul>
            <h4 className='mt-4'>Why Chose The ICT Hub ERP</h4>
            <ul>
              <li>➡️ Research and Analysis of Customers Need, Interest and Concern</li>
              <li>➡️ Planning, Prototyping, Visualization, and Documentation</li>
              <li>➡️ First Class and Talented on Demand Dedicated Development Team</li>
              <li>➡️ Excellent interpersonal Communication</li>
              <li>➡️ Maintaining Global Quality Standard and Testing Procedure</li>
              <li>➡️ 100% Customer Satisfaction</li>
              <li>➡️ Trending UI/ UX Design and Maintaining Software Development procedure</li>
              <li>➡️ Effective Data Migration, Implementation, and Continuous Support</li>
              <li>➡️ High-Level Security and Risk management</li>
              <li>➡️ Data Security and 3 Layer Backup Storage</li>
              <li>➡️ On-time Delivery and Implementation.</li>
              <li>➡️ 24/7 After Sales Service and Support with ticketing System.</li>
              <li>➡️ Free on Demand IT Consultation</li>
              <li>➡️ High Integrity and Compassion</li>
              <li>➡️ Data-Driven Decisions</li>
              <li>➡️ Informative Reporting and Graphical BI Dash Board</li>
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
