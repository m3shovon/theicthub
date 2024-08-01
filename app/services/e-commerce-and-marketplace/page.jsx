import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="E-Commerce & Marketplace Development" />
      {/*Start Services Details*/}
      <section className="services-details bg-white">
        <div className="container">
          <div className="row">
            {/*Start Services Details Sidebar*/}
            <LeftSide />
            {/*Start Services Details Content*/}
            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <img src="/images/Servics/Software_Development.png" alt="Software_Development.png" />
                <h3 className="mt-4">E-Commerce & Marketplace Development</h3>
                <p>
                  We offer e-commerce and marketplace-building services to assist businesses in establishing an online presence and effortlessly reaching clients. Our services include UX/UI design, online shop development, B2B portal development,
                  marketplace development, consulting, and strategy development. We also provide mobile apps and APIs, as well as delivery management, order monitoring, a BI dashboard, and campaign management
                </p>
                <ul>
                  <li>➡️ UX/UI Design</li>
                  <li>➡️ Online Store</li>
                  <li>➡️ B2B Portal</li>
                  <li>➡️ Marketplace Development</li>
                  <li>➡️ Consulting and strategy Buildup</li>
                  <li>➡️ Mobile App</li>
                  <li>➡️ API Development</li>
                  <li>➡️ Delivery Management</li>
                  <li>➡️ Order Tracking</li>
                  <li>➡️ BI Dash Board</li>
                  <li>➡️ Campaign Management</li>
                </ul>
                {/* <More_Info /> */}
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
