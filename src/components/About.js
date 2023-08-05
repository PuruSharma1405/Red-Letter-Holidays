import React, { useEffect, useState } from 'react'
import Image1 from '../assets/img/about-1.jpg'
import Image2 from '../assets/img/about-2.jpg'
import Image3 from '../assets/img/about-3.jpg'
import Image4 from '../assets/img/about-4.jpg'
import {AiTwotoneStar} from 'react-icons/ai'
import './About.css'
const About = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [isVisibleReviews, setIsVisibleReviews] = useState(false);
   const aboutWhyUsRef = React.useRef();
   const aboutReviewsRef = React.useRef();
   useEffect(() => {
     const observer = new IntersectionObserver(([entry]) => {
       if (entry.isIntersecting) {
         setIsVisible(true);
         observer.unobserve(aboutWhyUsRef.current);
       }
     });

     observer.observe(aboutWhyUsRef.current);
   }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleReviews(true);
          observer.unobserve(aboutReviewsRef.current);
        }
      });

      observer.observe(aboutReviewsRef.current);
    }, []);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <div>
      <div id="about">
        <div className="mx-auto relative flex items-center justify-center">
          <img
            src="https://demo2wpopal.b-cdn.net/triply/wp-content/uploads/2020/11/breadcrumb-bg.jpg"
            alt="img"
            className="w-full mx-auto"
            style={{ opacity: 0.7 }}
          />
          <div className="absolute">
            <h2 className="text-5xl uppercase text-white">About Us</h2>
          </div>
        </div>

        <div className="flex w-[75rem] mx-auto items-center  animated slideInUp hero-section">
          <div className="w-1/2">
            <h3 className="text-4xl  text-[#b3615b] uppercase font-semibold">
              About Us
            </h3>
            <h2 className="mt-[1.25rem]">
              Welcome to{" "}
              <span className="text-[#b3615b] font-semibold">
                Red Letter Holidays
              </span>
            </h2>
            <h2 className="mt-[1.25rem]">We Help You Planning Your Journey</h2>
            <p className="text-[1.30rem] mt-[1.25rem] text-justify mr-4">
              Yes , that’s right , the mantra of Red Letter Holidays , You tell
              us the Occasion and we tell you the Destination. As an evolved
              Travel Consultant , Red Letter Holidays emphasizes on tailor made
              and innovative packages while designing Luxury holidays for the
              one who cherish exclusivity. We offer vivacious and rare
              destinations , based on a proven detailed study led by highly
              trained consultants , our venture is the first of its kind and we
              ensure high level of expertise in our operations. We aspire to be
              your all-time favorite for all your travel and holiday related
              queries and solutions.
            </p>
          </div>
          <div className="w-1/2 about-images">
            <div>
              <div className="flex">
                <img
                  src={Image1}
                  alt="image1"
                  className="w-[225px] h-[225px] mt-[25%]"
                />
                <img
                  src={Image2}
                  alt="image2"
                  className="w-[298px] h-[298px] mt-[17.4%] mx-[20px]"
                />
              </div>
              <div className="flex">
                <img
                  src={Image3}
                  alt="image3"
                  className="w-[155px] h-[155px] mt-[2%] mx-[7.5%]"
                />
                <img
                  src={Image4}
                  alt="image4"
                  className="w-[227px] h-[227px] mt-[2%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fade-in-section ${isVisible ? "is-visible" : ""} why-us`}
          ref={aboutWhyUsRef}
        >
          <div className="flex justify-center">
            <div className="w-[50px] h-[2px] mt-[25px] bg-[#b3615b]"></div>
            <div className="text-center text-[#7F6D66]">
              <h1 className="text-[#b3615b] font-bold uppercase mx-[15px]">
                Why Us
              </h1>
            </div>
            <div className="w-[50px] h-[2px] mt-[25px] bg-[#b3615b]"></div>
          </div>
          <div className="mt-[50px] shadow-md  w-[1047px] mx-auto flex flex-wrap justify-center">
            <ol>
              <div className="w-[1047px] flex justify-center">
                <div className="flex">
                  <AiTwotoneStar className="mt-[10px]" />
                  <li className="text-3xl ml-[5px]">
                    We Make All the Process Easy
                  </li>
                </div>
                <div className="flex">
                  <AiTwotoneStar className="mt-[10px] ml-[50px]" />
                  <li className="text-3xl ml-[5px]">Trust & Safety</li>
                </div>
                <div className="flex">
                  <AiTwotoneStar className="mt-[10px] ml-[50px] " />
                  <li className="text-3xl ml-[5px]">Best Price Guarantee</li>
                </div>
              </div>
              <div className="w-[1047px] mx-auto flex ">
                <div className="flex">
                  <AiTwotoneStar className="mt-[60px] ml-[40px]" />
                  <li className=" mt-[50px] text-3xl ml-[5px]">
                    Excellent Customer Reviews
                  </li>
                </div>
                <div className="flex">
                  <AiTwotoneStar className="mt-[60px] ml-[70px]" />
                  <li className="text-3xl  mt-[50px] ml-[5px]">Fast Booking</li>
                </div>
              </div>
            </ol>
          </div>
        </div>
        <div
          className={`fade-in-section ${isVisibleReviews ? "is-visible" : ""}`}
          ref={aboutReviewsRef}
        >
          <div className="customerreviews">
            <div className="flex justify-center mt-[25px]">
              <div className="w-[50px] h-[2px] bg-[#FEA216] mt-[25px]"></div>
              <h1 className="text-center text-[#FEA216] text-[40px] mx-[10px]">
                Customer Reviews
              </h1>
              <div className="w-[50px] h-[2px] bg-[#FEA216] mt-[25px]"></div>
            </div>
            <div className="flex w-[1080px] mx-auto">
              <div className="text-[#7F6D66] text-2xl text-justify relative right-[10px]">
                Five stars to Red Letter (Ujjawal). Thanks for organising our
                honeymoon trip and for making it a delightful and unforgettable
                experience🤩 There are hundreds of resorts in Maldives but the
                suggested resort (Ayada) was exactly what we wanted😎 The
                breathtaking views, the vast turquoise ocean, the courteous
                staff, the yummy food, the luxurious water villas. Best part is
                what was discussed was all delivered😊
                <p className="mt-[10px] text-[#b3615b] text-[28px]">
                  Prashant Gupta
                </p>
              </div>
            </div>
            <div className="flex w-[1080px] mx-auto">
              <p className="text-[#7F6D66] text-2xl text-justify relative right-[10px]">
                Had a really good time at Bali with everything managed on time
                by Red Letter Holidays. Special thanks to Ujjawal for making my
                honeymoon trip fuss free with the best hotel recommendations and
                easy travel options..
                <p className="mt-[10px] text-[#b3615b] text-[28px]">
                  Ankit Choudhary
                </p>
              </p>
            </div>
            <div className="flex w-[1080px] mx-auto">
              <p className="text-[#7F6D66] text-2xl text-justify relative right-[10px]">
                It was a wonderful experience with Red Letter Holidays. My
                recent trip to Maldives was very well organized by them. Abhinav
                who was my coordinator did amazing job. He was very
                professional, reachable and helping through the planning and
                complete process. My experience with Red Letter holidays was
                great as the information provided by them was accurate and
                complete.
                <p className="mt-[10px] text-[#b3615b] text-[28px]">
                  Haripreeth
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About