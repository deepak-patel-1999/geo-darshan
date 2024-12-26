import React, { useState } from "react";
import { addContact } from "./api/contacts";

function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Reset any previous messages
    setErrorMessage("");

    try {
      await addContact(formData);
      setSuccessMessage("Your message has been successfully sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      }); // Reset the form after submission
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again later.");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="m-5">
              <h1 className="border-bottom">About Me!</h1>

              <div>
                <img
                  src="/images/Personal.JPG"
                  alt="About-image"
                  className="rounded-3"
                />
              </div>
              <div className="mt-2">
                <p>
                  Welcome to my corner of the internet! My name is Darshan
                  Malviya. I am a geologist by Profession and currently pursuing
                  my PhD from IIT Roorkee...
                  {/* More details */}
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Your Name:{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email address:{" "}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="8"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>

                {/* Success or error message */}
                {successMessage && (
                  <div className="alert alert-success mt-3">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger mt-3">{errorMessage}</div>
                )}
              </form>
            </div>

            <div className="map-container m-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13839.709000830024!2d77.88253977690864!3d29.86637183317701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe37a7%3A0xa9d19b15af050467!2sIndian%20Institute%20Of%20Technology%20Roorkee!5e0!3m2!1sen!2sin!4v1730307991306!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
