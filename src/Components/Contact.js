import React from "react";
// import "./style.css"
import { Button } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div>
                            <div className="m-5">
                                <h1 className="border-bottom">About Me!</h1>

                                <div className="">
                                    <img src="/images/Personal.JPG" alt="About-image" className="rounded-3" />
                                </div>
                                <div className="mt-2">
                                    <p>Welcome to my corner of the internet!
                                        My name is Darshan Malviya. I am a geologist by Profession and currently pursuing my PhD from IIT Roorkee. Here, I share research tutorials and basic methodologies that I'll be using in my PhD journey.
                                        I am particularly enthusiastic about Mountains,rivers. My research interest includes Hydrogeology,  studying river ecosystem, their interaction with different components and Anthropogenic impact on Environmental system using RS-GIS, AI and field study. I also love collecting fossils.
                                        For a detailed overview of my academic and professional background, please refer to my CV/Resume. Also, feel free to reach out me for any suggestion or assistance.
                                    </p>
                                </div>

                                <div className="">
                                    <p>
                                        <b>Darshan Malviya</b><br />
                                        Research Scholar, Department of Earth Sciences<br />
                                        Indian Institute of Technology, Roorkee<br />
                                        Uttarakhand, India<br />
                                        <br />
                                        E-mail: Darshan_m@es.iitr.ac.in
                                        <br />
                                        Contact: +91-9039630899
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="m-5">
                            <h2 className="">"Got Feedback? I'm eager to listen!"</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-semibold">Your Name: </label>
                                    <input type="text" className="form-control" id="name" aria-describedby="yourName" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">Email address: </label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fw-semibold">Message:</label>
                                    <textarea className="form-control" id="message" rows="8"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="contact_image"> */}
            {/* Contact image is there in this div */}
            {/* <h1>Contact Me...</h1> */}
            {/* </div> */}
            {/* <div className="background-wrapper">
                <div className="contactmain-div">
                    <div className="photo">
                        <img src="" alt="" />
                    </div>
                    <div className="first-flex-child">
                        <h1 className="contact-heading">About Me!</h1>
                        <div className="personal_image">
                            <img src="/images/Personal.JPG" alt="About-image" />
                        </div>
                        <div className="contact-paragraph">
                            <p>Welcome to my corner of the internet!
                                My name is Darshan Malviya. I am a geologist by Profession and currently pursuing my PhD from IIT Roorkee. Here, I share research tutorials and basic methodologies that I'll be using in my PhD journey.
                                I am particularly enthusiastic about Mountains,rivers. My research interest includes Hydrogeology,  studying river ecosystem, their interaction with different components and Anthropogenic impact on Environmental system using RS-GIS, AI and field study. I also love collecting fossils.
                                For a detailed overview of my academic and professional background, please refer to my CV/Resume. Also, feel free to reach out me for any suggestion or assistance.
                            </p>
                        </div>

                        <div className="contact-details">
                            <p>
                                <b>Darshan Malviya</b><br />
                                Research Scholar, Department of Earth Sciences<br />
                                Indian Institute of Technology, Roorkee<br />
                                Uttarakhand, India<br />
                                <br />
                                E-mail: Darshan_m@es.iitr.ac.in
                                <br />
                                Contact: +91-9039630899
                            </p>
                        </div>
                    </div>

                    <div className="second-flex-child">
                        <h2 className="form-heading">"Got Feedback? I'm eager to listen!"</h2>
                        <form action="">
                            <label htmlFor="name" className="labels">Your name:
                                <input type="text" placeholder="Enter your name" />
                            </label>
                            <br />
                            <label htmlFor="email" className="labels">Your email:
                                <input type="email" name="email" id="email" placeholder="Enter your email" />
                            </label>
                            <br />
                            <label htmlFor="subject" className="labels">Subject:
                                <input type="text" placeholder="Enter subject here" />
                            </label>
                            <br />
                            <label htmlFor="message" className="labels">Message:
                                <br />
                                <textarea name="" id="textarea" cols="43" rows="7"></textarea>
                            </label>
                            <br />
                            <label htmlFor="submit" className="labels d-grid gap-2 d-md-block">
                                <button className="btn btn-primary" type="submit" id="submitbtn">Send</button>

                            </label>
                        </form>
                    </div>
                </div>
            </div> */}
            {/* <Button variant="primary" type="submit" id="submitbtn">Send</Button> */}
        </>
    )
}

export default Contact;