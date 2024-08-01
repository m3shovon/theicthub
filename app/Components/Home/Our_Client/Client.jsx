import React from 'react'
import Single_client from './Single_client'
import client from '@/public/images/client/Bangladesh_Goverment.png'
import client2 from '@/public/images/client/Helth.png'
import client3 from '@/public/images/client/DGNM_logo.png'
import client4 from '@/public/images/client/bbc_media_action-logo.png'
import client5 from '@/public/images/client/UNFPA_-Logo.png'
import client6 from '@/public/images/client/UNHCR-logo.png'
import client7 from '@/public/images/client/POL.png'
import client8 from '@/public/images/client/amiebot-logo.png'
import client9 from '@/public/images/client/Pol_mobicontrol-Logo.png'
import client10 from '@/public/images/client/Franchis-avec-rabbani-logo.png'
import client11 from '@/public/images/client/twohoursjob.png'
import client12 from '@/public/images/client/TedX-Dhaka_-logo-.jpg'
import client13 from '@/public/images/client/Professional-Associates-LTD-logo.png'
import client14 from '@/public/images/client/Sagarika-Samaj-Unnayan-Songostha.jpg'
import client15 from '@/public/images/client/bfilms-logo.png'
import client16 from '@/public/images/client/rim.png'
import client17 from '@/public/images/client/claykart-JPEG-scaled-1.jpg'
import client18 from '@/public/images/client/FIttoro-Logo.png'
import client19 from '@/public/images/client/sbe-logo.png'
import client20 from '@/public/images/client/Vape-Company.png'
import client21 from '@/public/images/client/Zazstyle-logo.png'
import client22 from '@/public/images/client/Suha-Logo-png.png'
import client23 from '@/public/images/client/Anzeli-Traders.png'
import client24 from '@/public/images/client/CMMS-Logo-2.png'
import client25 from '@/public/images/client/Halal10-Logo.png'
import client26 from '@/public/images/client/Treatment-in-sri-lanka-logo.png'
import client27 from '@/public/images/client/ksi-logo.png'
import client28 from '@/public/images/client/BD-Patient.png'
import client29 from '@/public/images/client/Crystal-Rose-logo.png'
import client30 from '@/public/images/client/zsk-solution.png'



function Client() {
  return (
    <>
      <section className="about-section bg-white">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                <div
                  className="content-column col-xl-12 col-lg-12 col-md-12 col-sm-12 wow fadeInRight"
                  data-wow-delay="600ms"
                >
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">Who Trusts Us</span>
                      <h2>Our Clients</h2>
                      <div className="text mt-15">
                        OUR TECHNOLOGIES We mostly work on web development. Here
                        is a list of technologies we use for web development-
                        Python, Django, Laravel, Flask, React & redux, Rest API,
                        etc. And for Android app development we use Java. More
                        and more new technologies are coming but we are looking
                        forward to Flutter because hybrid apps and
                        cross-platform technologies are becoming more popular
                        these days and they are easy to use. Unity for game
                        Development.
                      </div>
                    </div>
                      {/*Language carousel*/}
                      <div className="row">
                      <Single_client image={client}/>
                      <Single_client image={client2}/>
                      <Single_client image={client3}/>
                      <Single_client image={client4}/>
                      <Single_client image={client5}/>
                      <Single_client image={client6}/>
                      <Single_client image={client7}/>
                      <Single_client image={client8}/>
                      <Single_client image={client9}/>
                      <Single_client image={client10}/>
                      <Single_client image={client11}/>
                      <Single_client image={client12}/>
                      <Single_client image={client13}/>
                      <Single_client image={client14}/>
                      <Single_client image={client15}/>
                      <Single_client image={client16}/>
                      <Single_client image={client17}/>
                      <Single_client image={client18}/>
                      <Single_client image={client19}/>
                      <Single_client image={client20}/>
                      <Single_client image={client21}/>
                      <Single_client image={client22}/>
                      <Single_client image={client23}/>
                      <Single_client image={client24}/>
                      <Single_client image={client25}/>
                      <Single_client image={client26}/>
                      <Single_client image={client27}/>
                      <Single_client image={client28}/>
                      <Single_client image={client29}/>
                      <Single_client image={client30}/>
                      </div>
                      
                      {/*Language carousel*/}
                  </div>
                </div>
                {/* Image Column */}
              </div>
            </div>
          </div>
        </section>

        
    </>
  )
}

export default Client
