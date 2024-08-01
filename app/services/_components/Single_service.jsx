import Link from 'next/link'
import React from 'react'

function Single_service({ count, service_title_1, service_title_2, service_info, service_link }) {
    if (!service_link) {
        return null;
      }
    
    return (
        <>
            <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                    <span className="count">{count}</span>
                    <h6 className="title">
                        <Link href={service_link}>
                            
                                {service_title_1}<br />{service_title_2}
                            
                        </Link>
                    </h6>
                    <i className="icon flaticon-digital-services" />
                    <div className="text">
                        {service_info}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single_service
