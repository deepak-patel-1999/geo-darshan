import React from 'react';

function Contact() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="m-5">
                            <h1 className="border-bottom">About Me!</h1>

                            <div>
                                <img src="/images/Personal.JPG" alt="About-image" className="rounded-3" />
                            </div>
                            <div className="mt-2">
                                <p>
                                    Welcome to my corner of the internet! My name is Darshan Malviya. I am a geologist by Profession and
                                    currently pursuing my PhD from IIT Roorkee. Here, I share research tutorials and basic methodologies
                                    that I'll be using in my PhD journey. I am particularly enthusiastic about Mountains, rivers. My
                                    research interest includes Hydrogeology, studying river ecosystem, their interaction with different
                                    components and Anthropogenic impact on Environmental system using RS-GIS, AI and field study. I also
                                    love collecting fossils. For a detailed overview of my academic and professional background, please
                                    refer to my CV/Resume. Also, feel free to reach out me for any suggestion or assistance.
                                </p>
                            </div>

                            <div>
                                <p>
                                    <b>Darshan Malviya</b>
                                    <br />
                                    Research Scholar, Department of Earth Sciences
                                    <br />
                                    Indian Institute of Technology, Roorkee
                                    <br />
                                    Uttarakhand, India
                                    <br />
                                    <br />
                                    E-mail: Darshan_m@es.iitr.ac.in
                                    <br />
                                    Contact: +91-9039630899
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="m-5">
                            <h2>"Got Feedback? I'm eager to listen!"</h2>
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

                        <div className="map-container m-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.396484208661!2d77.5632707743516!3d29.939272223548254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec1f14184a309%3A0xb8a8ac9ce784e2ca!2sIndian%20institute%20of%20technology%20Roorkee%20Saharanpur%20campus!5e0!3m2!1sen!2sin!4v1720261508139!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
