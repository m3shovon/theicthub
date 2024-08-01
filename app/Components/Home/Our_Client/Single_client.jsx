import React from 'react'
import Image from 'next/image'
function Single_client({image}) {
    return (
        <>
            {/* <Image src={SliderItem}  width={100} height={100}/> */}

            <div className="col-md-2 col-sm-4 text-center mt-4 span3 wow rollIn d-flex align-self-stretch">
                <div className="client-info w-100 d-flex align-items-center justify-content-center">
                <a href="#" className='text-center'>
                    <Image src={image} width={100} height={100} alt={`{Goverment}`.png} />
                    
                    {/* <img src={image_src} alt="" /> */}
                </a>
                </div>
            </div>
        </>
    )
}

export default Single_client
