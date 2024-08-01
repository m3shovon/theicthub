import React from 'react'
import Breadcrumb from '../Components/breadcrumb'
import About from '../Components/About'
import Main_team from '../Components/Home/Team/Main_team'
import VideoSection from '../Components/Home/VideoSection'
import ClientsSection from '../Components/Home/ClientsSection'
import TestimonialSection from '../Components/Home/TestimonialSection'

function page() {
  return (
    <>
    <Breadcrumb page_title="About us" />
      <About/>
      {/* Team Section */}
      <VideoSection/>
      <TestimonialSection/>
      <ClientsSection/>
      <Main_team  />
      {/* End Team Section */}
      
      
    </>
  )
}

export default page
