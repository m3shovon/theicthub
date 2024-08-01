import React from 'react'
import Technologi_item from './Technologi_item';
import c from '@/public/images/Technology/language/c.png'
import java from '@/public/images/Technology/language/java.png'
import python from '@/public/images/Technology/language/python.png'
import javascript from '@/public/images/Technology/language/javascript.png'
import php from '@/public/images/Technology/language/php.png'

function Technologies_languages({title}) {
    return (
        <>
            {/* <Image src={SliderItem}  width={100} height={100}/> */}
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
                    <Technologi_item title="c #" image_src={c} />
                    <Technologi_item title="java" image_src={java} />
                    <Technologi_item title="python" image_src={python} />
                    <Technologi_item title="javascript" image_src={javascript} />
                    <Technologi_item title="php" image_src={php} />


                </ul>
            </div>
        </>
    )
}

export default Technologies_languages;
