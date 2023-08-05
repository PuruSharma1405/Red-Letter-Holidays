import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import result from "../assets/result.png";
import "./Carousel.css";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { RestOfTheWorld, data } from "./data";
import { IndiaPlacesData } from "./data";
import { AsiaPlacesData } from "./data";
import { MoreAsiaPlacesData } from "./data";
import { BeachesData } from "./data";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
const Navbar = ({ fetchingPlace }) => {
  const [indiaPlaces, setIndiaPlaces] = useState(IndiaPlacesData);
  const [asiaPlaces, setAsiaPlaces] = useState(AsiaPlacesData);
  const [beachesData, setBeachesData] = useState(BeachesData);
  const [restOfTheWorld, setRestOfTheWorld] = useState(RestOfTheWorld);
   const [isMenuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const scrollDomestic = () => {
    setTimeout(()=>{
      const section = document.querySelector("#domestic");
      if(section){
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },500)
  };

    const scrollInternational = () => {
      setTimeout(() => {
        const section = document.querySelector("#international");
        if(section){
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);

    };

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  const clickHandler = (place) => {
    fetchingPlace(`package/${place}`);
    navigate(`/package/${place}`);
  };
  return (
    <div className="bg-[#434344]" style={{ boxShadow: "5px 1px 2px red" }}>
      <nav className="w-[1400px] mx-auto flex flex-wrap text-2xl gap-14  items-center font-[500] justify-between ">
        <Link to="/">
          <img src={Logo} alt="logo" height={100} width={105} />
        </Link>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="flex text-black text-[15px] uppercase outline-none gap-10 py-4 mr-[25px] ">
          <Link
            to="/"
            className=" text-white hover:no-underline hover:font-bold scale-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100 "
          >
            About
          </Link>
          <div className="dropdown">
            <Link
              to="#"
              className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100"
            >
              INDIA
            </Link>
            <div className="flex flex-col dropdown-contentIndia">
              {indiaPlaces.map((singlePlace,index) => {
                return (
                  <div
                  key={singlePlace.id}
                    className="link text-white"
                    onClick={() => clickHandler(singlePlace.place)}
                  >
                    {singlePlace.place}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="dropdown">
            <Link
              to="#"
              className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100"
            >
              ASIA
            </Link>
            <div className="dropdown-contentAsia">
              <div className="flex">
                <div className="border-r-2 border-white">
                  {asiaPlaces.map((singlePlace,index) => {
                    return (
                      <div
                      key={singlePlace.id}
                        className="link text-white"
                        onClick={() => clickHandler(singlePlace.place)}
                      >
                        {singlePlace.place}
                      </div>
                    );
                  })}
                </div>
                <div>
                  {MoreAsiaPlacesData.map((singlePlace,index) => {
                    return (
                      <div
                      key={singlePlace.id}
                        className="link text-white"
                        onClick={() => clickHandler(singlePlace.place)}
                      >
                        {singlePlace.place}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <Link
              to="#"
              className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100"
            >
              BEACHES
            </Link>
            <div className="flex flex-col dropdown-contentBeaches">
              {beachesData.map((singlePlace,index) => {
                return (
                  <div
                  key={singlePlace.id}
                    className="link text-white"
                    onClick={() => clickHandler(singlePlace.place)}
                  >
                    {singlePlace.place}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="dropdown">
            <Link
              to="#"
              className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100"
            >
              Rest of the world
            </Link>
            <div className="flex flex-col dropdown-contentRestOfTheWorld">
              {restOfTheWorld.map((singlePlace) => {
                return (
                  <div
                  key={singlePlace.id}
                    className="link text-white"
                    onClick={() => clickHandler(singlePlace.place)}
                  >
                    {singlePlace.place}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="dropdown">
            <Link
              to="#"
              className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100"
            >
              Services
            </Link>
            <div className="flex flex-col dropdown-contentServices">
              <Link to="/visa" className="link text-white">
                Visa
              </Link>
              <Link to="privacy-policy" className="link text-white">
                Privacy Policy
              </Link>
              <Link to="/" className="link text-white" onClick={scrollDomestic}>
                Domestic Packages
              </Link>
              <Link
                to="/"
                className="link text-white"
                onClick={scrollInternational}
              >
                International Packages
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/payment"
              className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100"
            >
              Payment
            </Link>
          </div>
          <Link
            to="/contact"
            className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100"
          >
            Contact
          </Link>
        </div>
        <Link className="hover:text-[#FEA116] text-white hover:no-underline hover:font-bold scale-100 flex text-[18px]">
          <MdOutlinePhoneForwarded className="relative mt-[10px] mr-[10px] text-[px]" />
          <span className="mb-[3px] relative">+91 8447190171</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
