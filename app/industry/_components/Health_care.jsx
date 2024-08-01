import React from 'react'

export default function Health_care() {
    return (
        <>
            <div className="row d-flex align-items-center  mb-5">
                <div className="col-xl-6 col-lg-6">
                    <img src="images/industry/health.jpg" className='img-fluid' alt="health" />
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="services-details__content content mt-40" id="Health_Care">
                        <h3 className="mt-4">Health Care</h3>
                        <p>
                        Healthcare industry is one of the critical business industries grappled with human lives and emergency situations. Healthcare has grown exponentially in the last few decades leading to the implementation of cutting-edge medical software. All the healthcare service providers aim to offer the best possible support for patient care and provide optimal medical care. This change has catalyzed the healthcare industry and has taken it to a new horizon
                        <ul className='list-style-two text'>
                            <li><i className='fa fa-check-circle'></i> Hospital Management System</li>
                            <li><i className='fa fa-check-circle'></i> Pathology Management System</li>
                            <li><i className='fa fa-check-circle'></i> Online Appointment System</li>
                            <li><i className='fa fa-check-circle'></i> Doctors and Nurse Training Management System</li>
                        </ul>
                        </p>
                        
                    </div>
                </div>
            </div>

        </>
    )
}
