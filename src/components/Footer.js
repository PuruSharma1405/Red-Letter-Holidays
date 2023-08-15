import React, { useRef, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "./animation.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
const Footer = () => {
  const [email, setEmail] = useState();

  const form = useRef();

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

  const scrollDomestic = () => {
    setTimeout(() => {
      const section = document.querySelector("#domestic");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 700);
  };

  const scrollInternational = () => {
    setTimeout(() => {
      const section = document.querySelector("#international");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 700);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "8447190171";
    const message = "Welcome to Red Letter Holidays";

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const scrollToTopAbout = () => {
    setTimeout(() => {
      const section = document.querySelector("#about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  const scrollToTopContact = () => {
    setTimeout(() => {
      const section = document.querySelector("#contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  const scrollToTopPrivacyPolicy = () => {
    setTimeout(() => {
      const section = document.querySelector("#privacy-policy");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  const scrollToTopSupport = () => {
    setTimeout(() => {
      const section = document.querySelector("#contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  const scrollToVisa = () => {
    setTimeout(() => {
      const section = document.querySelector("#visa");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  return (
    <div className="mt-[20px]">
      <ToastContainer />
      <form ref={form} onSubmit={formEmail} className="footer-connect-with-us">
        <div className="bg-white w-[1200px] mx-auto h-[300px] flex flex-col justify-center fade-in-text">
          <div className="w-10/12 mx-auto footerlettertitle">
            <div className="footerletterdata">
              <h4 className="mb-4 uppercase">Connect With Us </h4>
              <div className="relative input inputbox ">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="outline-none w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-[#FEA116] py-2 text-white cursor-pointer absolute right-2 bottom-2 px-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="w-[1200px] mx-auto bg-[#0F172B] footer relative bottom-[30px] ">
        <div className="flex p-[20px] justify-evenly min-h-[400px] footer-container">
          <div>
            <Link to="/" className="text-[#FEA116]">
              Red Letter Holidays
            </Link>
            <div className="bg-[white] w-[75px] h-[1px] mx-[10px] mt-[10px]"></div>
            <p className="text-white max-w-[250px] mt-[20px]">
              Red Letter Holidays Pvt Ltd based in Gurgaon , is one of India's
              leading online travel companies. We are a travel marketplace
              providing one stop solution for your travel needs. Be it travel
              packages or Visas, We have it all under one roof. What more, we
              provide you with easy EMI's on your travel!..
              <Link to="/about">More About us</Link>
            </p>
          </div>
          <div>
            <h6 className="text-[#FEA116]">Contact</h6>
            <div className="bg-[white] w-[70px] h-[1px] mx-[2px] mt-[10px]"></div>
            <div className="mt-[20px]">
              <p className="text-white">824,Tower 6,Hewo-1,Gurgaon</p>
              <p className="text-white">+91 8447190171</p>
              <p className="text-white">hello@redletterholidays.com</p>
            </div>
            <div className="flex mt-[30px]">
              <div className="w-[40px] h-[40px]  border rounded-full flex justify-center items-center cursor-pointer  hover:bg-[#FEA216]">
                <Link
                  to="https://www.instagram.com/redletterholidays/"
                  target="_blank"
                  className="text-white hover:bg-[#FEA216]"
                >
                  <AiFillInstagram className="text-[25px] " />
                </Link>
              </div>
              <div className="w-[40px] h-[40px]  border rounded-full flex justify-center items-center ml-[10px]  hover:bg-[#FEA216] cursor-pointer">
                <Link
                  to="https://www.facebook.com/RedLetterHolidays"
                  target="_blank"
                  className="text-white hover:bg-[#FEA216]"
                >
                  <AiFillFacebook className="text-[25px] " />
                </Link>
              </div>
              <div className="w-[40px] h-[40px]  border rounded-full   flex justify-center items-center left-[6px] top-[6px] ml-[10px] hover:bg-[#FEA216]">
                <AiOutlineWhatsApp
                  className="cursor-pointer text-[25px] text-white"
                  onClick={handleWhatsAppClick}
                />
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-[#FEA116]">Company</h6>
            <div className="bg-[white] w-[70px] h-[1px] mx-[2px] mt-[10px]"></div>
            <div className="mt-[20px]">
              <Link
                to="/about"
                className="text-white btn-link "
                onClick={scrollToTopAbout}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white btn-link "
                onClick={scrollToTopContact}
              >
                Contact Us
              </Link>
              <Link
                to="/privacy-policy"
                className="text-white btn-link"
                onClick={scrollToTopPrivacyPolicy}
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="text-white btn-link"
                onClick={scrollToTopSupport}
              >
                Support
              </Link>
            </div>
          </div>
          <div>
            <h6 className="text-[#FEA116]">Services</h6>
            <div className="bg-[white] w-[70px] h-[1px] mx-[2px] mt-[10px]"></div>
            <div className="mt-[20px]">
              <Link
                to="/"
                className="text-white btn-link"
                onClick={scrollDomestic}
              >
                Domestic Ticketing
              </Link>
              <Link
                to="/"
                className="text-white btn-link"
                onClick={scrollDomestic}
              >
                Domestic Packages
              </Link>
              <Link
                to="/"
                className="text-white btn-link"
                onClick={scrollInternational}
              >
                International Ticketing
              </Link>
              <Link
                to="/"
                className="text-white btn-link"
                onClick={scrollInternational}
              >
                International Packages
              </Link>
              <Link
                to="/visa"
                className="text-white btn-link"
                onClick={scrollToVisa}
              >
                Visa
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white text-center ">
            {" "}
            <span className="text-black">
              Copyrights &copy; Red Letter Holidays.All Right Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
