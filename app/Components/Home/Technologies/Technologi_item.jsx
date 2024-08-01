import Image from 'next/image'
import React from 'react'
function Technologi_item({image_src,title}) {
    return (
        <>
            <li className="slide-item">
                {" "}
                <a href="#">
                    <Image src={image_src} width={100} height={100} alt={`{image_src}`.png} />
                    <p className='mt-2'>{title}</p>
                    {/* <img src={image_src} alt="" /> */}
                </a>{" "}
            </li>
        </>
    )
}

export default Technologi_item
