import Link from 'next/link'
import React from 'react'

function Call_to_action() {
  return (
    <>
      {/* Call To Action */}
      <section className="call-to-action">
          <div className="bg bg-pattern-7" />
          <div className="auto-container">
            <div className="outer-box">
              <div className="title-box">
                <h3 className="title">The Hub Between You and Us</h3>
                <p>Sucessful Apps Are More Than Just Clean UI/UX and Coding</p>
              </div>
              <div className="btn-box">
                <Link href="/contact" className="theme-btn btn-style-one">
                  <span className="btn-title">get a qoute</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*End Call To Action */}
    </>
  )
}

export default Call_to_action
