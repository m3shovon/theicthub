import React from 'react'
import Technologi_item from './Technologi_item';
import firebase from '@/public/images/Technology/database/firebase.png'
import mongo from '@/public/images/Technology/database/mongo.png'
import mysqal from '@/public/images/Technology/database/mysqal.png'
import postgray from '@/public/images/Technology/database/postgray.png'

function Technologies_database({ title }) {
    return (
        <>
            <div className="control_slider">
                <div className="text-center">
                    <a
                        href="#"
                        className="theme-btn btn-style-one hvr-dark rounded-pill"
                    >
                        <span className="btn-title">{title}</span>
                    </a>
                </div>
                <ul className="clients-carousel owl-carousel owl-theme mt-20">
                    <Technologi_item title="Firebase" image_src={firebase} />
                    <Technologi_item title="MongoDB" image_src={mongo} />
                    <Technologi_item title="MySQL" image_src={mysqal} />
                    <Technologi_item title="PostgreSQL" image_src={postgray} />
	

                    {/* <Technologi_item image_src={java} />
                    <Technologi_item image_src={python} />
                    <Technologi_item image_src={javascript} />
                    <Technologi_item image_src={php} /> */}


                </ul>
            </div>
        </>
    )
}

export default Technologies_database
