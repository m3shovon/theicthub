import Link from 'next/link'
import React from 'react'

function Slidertwo() {
  return (
    <>
      <>
  {/* Banner Section */}
  <section className="banner-section">
    <div className="banner-carousel owl-carousel owl-theme">
      {/* Slide Item */}
      <div className="slide-item">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1 className="title animate-1">
            <br /> Deployment 
            </h1>
            <div className="text animate-2">
            Your Ideas Our Design, Write The Codes And You Are Online.
            </div>
            <div className="btn-box animate-3">
              <Link href="/about" className="theme-btn btn-style-one">
                <span className="btn-title">Get Started</span>
              </Link>
              <Link
                href="/about"
                className="theme-btn btn-style-one light-bg"
              >
                <span className="btn-title">Explore Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Item */}
      <div className="slide-item">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1 className="title animate-1">
              <br />
              Updated 
            </h1>
            <div className="text animate-2">
            We Suggest You The Best Technology To Serve Your Purpose 
            </div>
            <div className="btn-box animate-3">
              <Link href="/about" className="theme-btn btn-style-one">
                <span className="btn-title">Get Started</span>
              </Link>
              <Link
                href="/about"
                className="theme-btn btn-style-one light-bg"
              >
                <span className="btn-title">Explore Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1 className="title animate-1">
            <br /> Team  
            </h1>
            <div className="text animate-2">
            Creativity Is Our Fuel. Passion And Dedication Makes Us Smart. 
            </div>
            <div className="btn-box animate-3">
              <Link href="/about" className="theme-btn btn-style-one">
                <span className="btn-title">Get Started</span>
              </Link>
              <Link
                href="/about"
                className="theme-btn btn-style-one light-bg"
              >
                <span className="btn-title">Explore Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Item */}
      <div className="slide-item">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(/images/main-slider/2.jpg)" }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1 className="title animate-1">
              <br />
              Support  
            </h1>
            <div className="text animate-2">
            We Ensure You The Best Customer Service Experience. 
            </div>
            <div className="btn-box animate-3">
              <Link href="/about" className="theme-btn btn-style-one">
                <span className="btn-title">Get Started</span>
              </Link>
              <Link
                href="/about"
                className="theme-btn btn-style-one light-bg"
              >
                <span className="btn-title">Explore Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  {/* End Banner Section */}
</>

    </>
  )
}

export default Slidertwo
