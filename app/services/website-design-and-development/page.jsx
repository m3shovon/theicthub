import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="Website Design And Development" />
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
                <h3 className="mt-4">Website Design And Development Service Overview</h3>
                <p>
                  Our experienced team specializes in creating user-friendly websites tailored to organizations’ unique needs. From HTML5 development to responsive design and re-design, we deliver exceptional results. Our expertise extends to eCommerce, eLearning solutions and effective digital strategies for those. With a focus on user experience, we ensure an engaging online presence. And beyond development, we provide 24/7 support and maintenance to keep your website running smoothly.
                </p>
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
