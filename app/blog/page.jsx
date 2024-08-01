import React from 'react'
import Blog from '../Components/Blog'
import Breadcrumb from '../Components/Breadcrumb'

function page() {
  return (
    <div>
      <Breadcrumb page_title="Blog" />
      <Blog/>
    </div>
  )
}

export default page
