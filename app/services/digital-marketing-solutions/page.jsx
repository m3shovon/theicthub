import Breadcrumb from '@/app/Components/Breadcrumb'
import React from 'react'
import LeftSide from '../_components/LeftSide'
import More_Info from '../_components/More_Info'

function page() {
  return (
    <>
      <Breadcrumb page_title="Digital marketing solutions" />
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
            <h3 className="mt-4">Digital marketing solutions Service Overview</h3>
            <p>
            Social Media Marketing ( SMM ) Social Media Marketing “SMM” is the use of social media platforms like (Facebook, Instagram, LinkedIn) to connect with your audience to improve and grow your brand, increase, and gain sales also drive website traffic.
            </p>
            <p>
            Digital Advertisement Digital advertising corresponds to actions in web browsers, Social Media Pages, Journals/Blogs, Apps, or any other form of contact through the Internet. Online Based Advertising is the communication made by a company to promote and boost its brand, product, or service using various platforms and digital channels.
            </p>
            <p>Digital Marketing Digital Marketing combines all marketing enterprises that use an electronic appliance or the web. Organizations buy digital channels, for example, Search Engines, Social Media, Email, and different Websites to affiliate with the flow and potential clients.</p>
            <p>
            Branding Consultancy Brand consultants give analysis, solutions, and the general promoting ability for organizations to sell their items. Brand strategists can grow small organizations against competitors through market investigation, Content Marketing, Audit Websites, Keyword Research, and Video Services.
            </p>
            <p>
            Digital Sales Lead Digital Sales Lead considers converting leads into possibilities. The digital sales group will be liable for persuading the expected clients to buy the organization’s items. They will take the clients through a summary of their items to guarantee they complete the deal. To dominate in digital sales, you must be engaged with good communication and influence abilities.
            </p>
            <p>Search Engine Optimization ( SEO Analytics ) SEO means “search engine optimization.” In direct terms, it implies the method involved with working on your site to build its receivability when individuals search for items or administrations identified with your business in Google, Bing, and other search engines.</p>
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
