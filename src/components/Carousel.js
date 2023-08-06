import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Carousel1 from "../assets/img/carousel-1.jpg";
import Carousel2 from "../assets/img/carousel-2.jpg";
import "./Carousel.css";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [text] = useTypewriter({
    words: ["Places", "Destinations"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 100,
  });

  return (
    <div className=" mx-auto containerCarousel">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
        nextLabel='Next'
      >
        <Carousel.Item active={index === 0}>
          <div className="carousel-item active relative">
            <img
              className="w-100 h-[1080px] bg-cover"
              src={Carousel1}
              alt="carousel"
            />
            <Carousel.Caption>
              <div className="carousel-caption flex flex-col items-center justify-center h-[max-content]">
                <div className="p-3 max-w-[1100px] flex flex-col items-center">
                  <h6 className="section-title  text-white uppercase text-4xl font-bold description ">
                    Discover the most engaging {text}
                  </h6>
                  <h1 className="text-white mb-4 text-4.5xl mt-[20px] font-bold h-[60px] uppercase">
                    Plan With{" "}
                    <span className="company-name">Red Letter Holidays</span>
                  </h1>
                  <div className="flex text-white gap-10 mt-[10px]">
                    <a href="#domestic">
                      <button className="bg-[#FEA116] btn1">Domestic</button>
                    </a>
                    <a href="#international">
                      <button className="bg-[#999999] btn2">
                        International
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item active={index === 1}>
          <div className="carousel-item active relative">
            <img className="w-100 bg-cover h-[1080px]" src={Carousel2} alt="carousel" />
            <Carousel.Caption>
              <div className="carousel-caption flex flex-col items-center justify-center h-[max-content]">
                <div className="p-3 max-w-[700px] flex flex-col items-center">
                  <h6 className="section-title text-white uppercase text-3xl font-bold">
                    Travel Now Pay Later
                  </h6>
                  <h1 className="text-white mb-4 text-2xl mt-[20px] font-bold">
                    Avail Our No Cost EMI
                  </h1>
                  <div className="flex text-white gap-10 mt-[10px]">
                    <Link to="/contact">
                      <button className="bg-[#999999] btn2">Know More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item active={index === 2}>
          <div className="carousel-item active relative">
            <img className="w-100 bg-cover h-[1080px]" src={Carousel2} alt="carousel" />
            <Carousel.Caption>
              <div className="carousel-caption flex flex-col items-center justify-center h-[max-content]">
                <div className="p-3 max-w-[700px] flex flex-col items-center">
                  <h6 className="section-title text-white uppercase text-3xl font-bold">
                    Explore Our Best Deals
                  </h6>
                  <div className="flex text-white gap-10 mt-[10px]">
                    <Link to="/package/Maldives">
                      <button className="bg-[#FEA116] btn1">Maldives</button>
                    </Link>
                    <Link to="/package/Bali ">
                      <button className="bg-[#999999] btn2">Bali</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
