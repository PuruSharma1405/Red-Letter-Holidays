import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import './animation.css'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import ContactUsMountain from "../assets/img/ContactUsMountain.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const form = useRef();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function formEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dd9n1ev",
        "template_dzt1rgi",
        form.current,
        "8kr9SYjqfuyy-87rc"
      )
      .then(
        (result) => {
          toast.info("Message Sent", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(result.text);
        },
        (error) => {
           toast.error("Something went wrong while sending mail", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
           });
          console.log(error.text);
        }
      );
  }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div id="contact">
      <ToastContainer />
      <div className="relative ">
        <img
          src="https://demo2wpopal.b-cdn.net/triply/wp-content/uploads/2020/11/breadcrumb-bg.jpg"
          alt="contactus"
          width="w-full"
          style={{ opacity: 0.7, height: "259px", width: "100%" }}
        />
        <div className="w-full text-center  absolute bottom-32 text-white">
          <h2 className="text-5xl uppercase">Contact Us</h2>
        </div>
      </div>
      <div className="w-[1200px] mx-auto">
        <div>
          <div className="flex justify-center">
            <div className="flex items-center mt-[20px] animated slideInDown">
              <div className="w-[50px] h-[2px] bg-[#FEA116]"></div>
              <h6 className="text-center text-[#FEA116] text-3xl px-[20px] ">
                Contact Us
              </h6>
              <div className="w-[50px] h-[2px] bg-[#FEA116]"></div>
            </div>
          </div>
          <h1 className="text-center animated slideInUp">
            <span className=" text-[#FEA116]">Contact</span>
            <span className="text-4xl px-[15px]">For Any Query</span>
          </h1>
        </div>
        <div className="w-full flex justify-between mt-[50px]">
          <div className="flex flex-col items-center">
            <div className="flex items-center  animated slideInRight">
              <div className="w-[50px] h-[2px] bg-[#FEA116]"></div>
              <h6 className="text-[#FEA116] text-2xl mx-[15px]">Call Us At</h6>
              <div className="w-[50px] h-[2px] bg-[#FEA116]"></div>
            </div>
            <p className="mx-[50px]  animated slideInRight">+91 8447190171</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center animated slideInUp">
              <div className="w-[50px] h-[2px] bg-[#FEA116]"></div>
              <h6 className="text-[#FEA116] text-2xl mx-[15px]">Mail Us At</h6>
              <div className="w-[50px] h-[2px] bg-[#FEA116]"></div>
            </div>
            <p className="mx-[50px]  animated slideInUp">
              hello@redletterholidays.com
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center animated slideInLeft">
              <div className="w-[50px] h-[2px] bg-[#FEA116]"></div>
              <h6 className="text-[#FEA116] text-2xl mx-[15px]">
                Branch Office
              </h6>
              <div className="w-[50px] h-[2px] bg-[#FEA116] animated slideInLeft"></div>
            </div>
            <p className="animated slideInLeft">
              F-16 Baani Adress 1,Sector-56,Gurgaon
            </p>
          </div>
        </div>
        <div className="flex contact-map-form">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.922132017043!2d77.1020965762568!3d28.421606375780705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21f8e6094aa7%3A0xda8add7a0b95b2a2!2sAddress%20One%20by%20Baani!5e0!3m2!1sen!2sin!4v1682523570620!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form ref={form} onSubmit={formEmail} className="animated slideInUp">
            <div className="flex ">
              <div>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  name="fullName"
                  value={formData.name}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="input"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full inputSubject"
                name="subject"
                value={formData.subject}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Message"
                className="inputSubject"
                name="message"
                value={formData.message}
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-[#FEA116] text-white w-[650px] cursor-pointer py-3 ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact