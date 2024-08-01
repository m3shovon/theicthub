import React from 'react'

function Breadcrumb({page_title}) {
  return (
    <>
      {/* Start main-content */}
  <section
    className="page-title"
    style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}
  >
    <div className="auto-container">
      <div className="title-outer">
        <h1 className="title">{page_title}</h1>
        <ul className="page-breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>{page_title}</li>
        </ul>
      </div>
    </div>
  </section>
  {/* end main-content */}
    </>
  )
}

export default Breadcrumb
