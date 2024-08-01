import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Industry_leftside from './_components/industry_leftside'
import Health_care from './_components/Health_care'
import Startup from './_components/Startup'
import Garment from './_components/Garment'
import Education from './_components/Education'
import Government from './_components/Government'
import Retail from './_components/Retail'
import Ecommerce from './_components/Ecommerce'
import Game from './_components/Game'
import Travelandtourism from './_components/Travel-and-tourism'
import Automotive from './_components/Automotive'

function page() {
    return (
        <>
            <Breadcrumb page_title="Industry" />
            {/*Start Services Details*/}
            {/* <section className="services-details bg-white">
                <div className="container">
                    <div className="row">
                        <Industry_leftside />
                        <div className="col-xl-8 col-lg-8">
                            <Startup/>
                            <Health_care/>
                        </div>
                        
                    </div>
                </div>
            </section> */}

            
            <section className="services-details bg-white">
                <div className="container">
                    <Startup />
                    <Health_care/>
                    <Garment/>
                    <Education/>
                    <Government/>
                    <Retail/>
                    <Ecommerce/>
                    <Game/>
                    <Travelandtourism/>
                    <Automotive/>
                </div>
            </section>
            {/*End Services Details*/}
        </>
    )
}

export default page
