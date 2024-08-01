import React from 'react'
import Technologi_item from './Technologi_item';
import django from '@/public/images/Technology/frameworks/django-basics.png'
import Flask_logo from '@/public/images/Technology/frameworks/Flask_logo.png'
import Flutter from '@/public/images/Technology/frameworks/Flutter.png'
import NextJs from '@/public/images/Technology/frameworks/Next.js.png'
import reactjs from '@/public/images/Technology/frameworks/reactjs.png'
import wordpress from '@/public/images/Technology/frameworks/wordpress.png'

function Technologies_frameworks({ title }) {
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
                    <Technologi_item title="django" image_src={django} />
                    <Technologi_item title="Flask" image_src={Flask_logo} />
                    <Technologi_item title="Flutter" image_src={Flutter} />
                    <Technologi_item title="Next Js" image_src={NextJs} />
                    <Technologi_item title="React Js" image_src={reactjs} />
                    <Technologi_item title="Wordpress" image_src={wordpress} />


                </ul>
            </div> 
            
        </>
    )
}

export default Technologies_frameworks
