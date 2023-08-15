import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { BeachesData } from "./data";
import { IndiaPlacesData } from "./data";
import InternationalPopularPackages from "./InternationalPopularPackages";
import "./animation.css";
import DomesticPopularPackages from "./DomesticPopularPackages";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [domesticPopulerPackages, setDomesticPopularPackages] =
    useState(IndiaPlacesData);
  const [internationPopularPackages, setInternationalPopularPackages] =
    useState(BeachesData);

  const homeRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(homeRef.current);
      }
    });

    observer.observe(homeRef.current);
  }, []);

  const scrollDomesticPackage = () => {
    setTimeout(() => {
      const section = document.querySelector("#package");
      console.log("section", section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  const scrollInternationalPackage = () => {
    console.log("clicked");
    setTimeout(() => {
      const section = document.querySelector("#package");
      console.log("section", section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  return (
    <div>
      <Carousel />
      <div
        className={`fade-in-section ${
          isVisible ? "is-visible" : ""
        }  circleHome`}
        ref={homeRef}
      >
        <div className="flex w-[1200px] mx-auto justify-evenly mt-[60px] home-circles">
          <div className="bg-[#41C6BD] flex flex-col justify-center items-center text-white w-1/4 h-[305px] rounded-full home-specificcircle">
            <h2 className="uppercase text-[30px]">Easy EMI</h2>
            <p className="uppercase text-[20px]">Travel Now Pay Later</p>
          </div>
          <div className="bg-[#3FD8ED] flex flex-col justify-center items-center text-white w-1/4  h-[305px] rounded-full home-specificcircle">
            <h2 className="uppercase text-[30px]">100%</h2>
            <p className="uppercase text-[20px]">Money Back Guarantee</p>
          </div>
          <div className="bg-[#DF7FFA] flex flex-col justify-center items-center text-white w-1/4  h-[305px] rounded-full home-specificcircle">
            <h2 className="uppercase text-[30px]">Best Price</h2>
            <p className="uppercase text-[20px]">Best Price Guarantee</p>
          </div>
        </div>
      </div>
      <div className="relative home-packages">
        <div className="flex flex-col w-full justify-center items-center relative">
          <h1 className="text-[#b3615b] uppercase font-bold" id="international">
            Most Popular <span>Packages</span>
          </h1>
          <h2 className="text-[#b3615b] uppercase font-bold">International</h2>
        </div>
        <div
          className="flex flex-wrap justify-center"
          onClick={scrollInternationalPackage}
        >
          {internationPopularPackages.map((singlePackage) => {
            return (
              <div key={singlePackage.id}>
                <InternationalPopularPackages singlePackage={singlePackage} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col  mt-[30px] justify-center items-center relative">
            <h1 className="text-[#b3615b] font-bold uppercase" id="domestic">
              Most Popular <span>Packages</span>
            </h1>
            <h2 className="text-[#b3615b] uppercase font-bold text-4xl">
              Domestic
            </h2>
          </div>
          <div
            className="flex flex-wrap justify-center"
            onClick={scrollDomesticPackage}
          >
            {domesticPopulerPackages.map((singlePackage) => {
              return (
                <div key={singlePackage.id}>
                  <DomesticPopularPackages singlePackage={singlePackage} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
