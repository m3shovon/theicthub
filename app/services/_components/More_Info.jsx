import React from 'react'

function More_Info() {
    return (
        <>
            <div className="content mt-40">
                <div className="text">
                    <h3>Service Center</h3>
                    <p>
                        Lorem ipsum is simply free text used by copytyping refreshing.
                        Neque porro est qui dolorem ipsum quia quaed inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                    </p>
                    <blockquote className="blockquote-one">
                        Lorem ipsum dolor sit amet, consectetur notted adipisicing
                        elit sed do eiusmod remaining essentially unchanged Lorem
                        ipsum dolor sit amet consec tetur
                    </blockquote>
                </div>
                <div className="feature-list mt-4">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <img
                                className="mb-3"
                                src="/images/resource/service-d1.jpg"
                                alt="images"
                            />
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit Dolor
                                repellat pariatur temporibus doloribus hic conse quatur
                                copy typing refreshing
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <img
                                className="mb-3"
                                src="/images/resource/service-d2.jpg"
                                alt="images"
                            />
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit Dolor
                                repellat pariatur temporibus doloribus hic conse quatur
                                copy typing refreshing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-25">
                <h3>Frequently Asked Question</h3>
                <p>
                    Lorem ipsum is simply free text used by copytyping refreshing.
                    Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                    et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="accordion-box wow fadeInRight">
                    {/*Block*/}
                    <li className="accordion block">
                        <div className="acc-btn">
                            Is my technology allowed on tech?
                            <div className="icon fa fa-plus" />
                        </div>
                        <div className="acc-content">
                            <div className="content">
                                <div className="text">
                                    There are many variations of passages the majority have
                                    suffered alteration in some fo injected humour, or
                                    randomised words believable.
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block active-block">
                        <div className="acc-btn active">
                            How to soft launch your business?
                            <div className="icon fa fa-plus" />
                        </div>
                        <div className="acc-content current">
                            <div className="content">
                                <div className="text">
                                    There are many variations of passages the majority have
                                    suffered alteration in some fo injected humour, or
                                    randomised words believable.
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                        <div className="acc-btn">
                            How to turn visitors into contributors
                            <div className="icon fa fa-plus" />
                        </div>
                        <div className="acc-content">
                            <div className="content">
                                <div className="text">
                                    There are many variations of passages the majority have
                                    suffered alteration in some fo injected humour, or
                                    randomised words believable.
                                </div>
                            </div>
                        </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                        <div className="acc-btn">
                            How can i find my solutions?
                            <div className="icon fa fa-plus" />
                        </div>
                        <div className="acc-content">
                            <div className="content">
                                <div className="text">
                                    There are many variations of passages the majority have
                                    suffered alteration in some fo injected humour, or
                                    randomised words believable.
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default More_Info
