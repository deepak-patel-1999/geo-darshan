import React from 'react'

function Publications() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="details mt-5">
                            <h1 className='research-articles'>Research Articles</h1>
                            <hr />
                            <br />
                            <p className='publications-details'>
                                <span>1.</span> <a href="https://www.tandfonline.com/doi/full/10.1080/10106049.2022.2142958" target='_blank'>Assessing the vulnerability of watersheds to environmental degradation in the lesser Himalayan region using satellite data and a series of models</a></p>
                            <p className='authors'>Authors: Pankaj Chauhan, <strong>Darshan Malviya</strong>, Kalachand Sain, Ram L. Ray, Sudhir Kumar Singh & Dharmaveer Singh</p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="details">
                            <h1 className='research-articles'>Training and Workshops</h1>
                            <hr />
                            <br />
                            <p className='training-details'>
                                <span>1.</span> <span>AI4Water</span>
                                <br />
                                Seven days workshop organized by the Department of Hydrology, IIT Roorkee
                                from 20th August 2023 to 26th August 2023. Its main objective was to teach
                                students about the application of Artificial intelligence in water resources.</p>
                                
                            <p className='training-details'>
                                <span>2.</span> <span>TopoToolbox</span>
                                <br />
                                One-day workshop organized by the Department of Hydrology, IIT Roorkee on
                                18th October 2023.</p>
                            <a href="https://topotoolbox.wordpress.com/" target='_blank' className='training-details-link'><i>TopoToolbox Link</i></a>

                            <br />
                            <br />
                            <p className='training-details'>
                                <span>3.</span> <span>Groundwater quality and monitoring</span>
                                <br />
                                Ten-day course titled <i>“Groundwater quality and
                                    monitoring” </i> organized by National Geophysical Research Institute(NGRI), Hyderabad from 7 December 2023 to 16 December 2023.</p>

                            <p className='training-details'>
                                <span>4.</span> <span>Tools & Techniques for Hydrological Investigations</span>
                                <br />
                                five-day course titled <i>“Tools & Techniques for Hydrological Investigations” </i> organized by National Institute of Hydrology, Roorkee from 11 March 2024 to 15 March 2024.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='publications-main-div'>
                <div className="publications-div">


                    <br />

                   

                </div>
            </div> */}
        </>
    )
}

export default Publications

