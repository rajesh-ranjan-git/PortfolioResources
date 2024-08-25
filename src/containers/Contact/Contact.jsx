import React from "react";
import "./Contact.scss";
import { Fade } from "react-awesome-reveal";
import HomeContent from "../HomeContent/HomeContent";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { Helmet } from "react-helmet";
import {
  faShareNodes,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const showCustomToast = () => {
    // e.preventDefault()
    // toast.promise(
    //     sendEmail(),
    //      {
    //        loading: 'Sending Mail;...',
    //        success: <b>Mail sent successfully!</b>,
    //        error: <b>Could not send the mail. Please try again later.</b>,
    //      }
    //    );

    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } toast_container`}
      >
        <div className="toast_content">
          <div className="toast_content_container">
            <div className="toast_content_img">
              <img className="toast_img" src={`me.png`} alt="" />
            </div>
            <div className="toast_text">
              <p className="toast_title">Mail sent successfully</p>
              <p className="toast_subtitle">Thank you for reaching out.</p>
              <p className="toast_message">
                I've received your message and will reach out to you
                immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="toast_close">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="toast_close_btn"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending mail...");

    emailjs
      .sendForm(
        "service_ox7ytu8",
        "template_2lj0ouj",
        form.current,
        "SEOj9E83kfSQZCspk"
      )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();

          toast.dismiss(toastId);
          showCustomToast();
        },
        (error) => {
          toast.dismiss(toastId);
        }
      );
  };

  return (
    <HomeContent id="contact" className="contact">
      {/* <Helmet>
        <title>Contact | Pranav Choudhary</title>
        <meta name="description" content="Contact Pranav Choudhary, a software developer. Get in touch for freelance projects, collaboration, questions, or just to say hello!" />
      </Helmet> */}

      <h2 className="h3 section-title">GET IN TOUCH</h2>
      <p className="section-text">
        Whether you have a question, any suggestion, or just want to say hi,
        drop me a message and I'll get back to you!
      </p>

      <Fade direction="bottom" duration={1000}>
        <div className="container">
          <div className="contact_row">
            <div className="contact_details">
              <div className="contact_row">
                <div className="contact_details_social">
                  <div className="info-box">
                    {/* <i className="bx bx-share-alt"></i> */}

                    <FontAwesomeIcon className="bx" icon={faShareNodes} />

                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <SocialMedia />
                    </div>
                  </div>
                </div>
                <div className="contact_details_contact">
                  <div className="info-box mt-4">
                    <FontAwesomeIcon className="bx" icon={faEnvelope} />

                    <h3>Email Me</h3>
                    <p>
                      <a href="mailto:rajeshranjan8271@gmail.com">
                        rajeshranjan8271@gmail
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact_details_contact">
                  <div className="info-box mt-4">
                    <FontAwesomeIcon className="bx" icon={faPhone} />

                    <h3>Call Me</h3>
                    <p>
                      <a href="tel:+919999340771">+91-9999-340-771</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact_details">
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contact_form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="form-control"
                      id="user_name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      required
                      name="user_email"
                      id="user_email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    required
                    name="message"
                    rows="6"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  {/* <div className={active===true?'loading':'loading-none'}>Sending</div> */}
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="contact_btn">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </HomeContent>
  );
}
