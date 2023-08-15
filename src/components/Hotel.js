import React, { useEffect, useState } from "react";
import "./Hotel.css";
import { useNavigate } from "react-router-dom";
const Hotel = ({ singleHotel, index, notInterested, specifichotel }) => {
  const [isVisible, setIsVisible] = useState(false);
  const hotelRef = React.useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(hotelRef.current);
      }
    });

    observer.observe(hotelRef.current);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const interestedHandler = (hotelName) => {
    navigate("specifichotel");
    console.log("hotelName", hotelName);
    specifichotel(hotelName);
    localStorage.setItem("hotelName", hotelName?.name);
    localStorage.setItem("hotelImage", hotelName?.image);
    localStorage.setItem("hotel_trip_type", hotelName?.trip_type);
    localStorage.setItem("hotelDescription", hotelName?.description);
    localStorage.setItem(
      "hotelInclusions",
      JSON.stringify(hotelName?.inclusions)
    );
    localStorage.setItem("hotelPrice", hotelName?.price);
  };

  console.log("image", singleHotel?.image);
  return (
    <div
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } container h-full  relative hover:shadow-2xl hotel-container`}
      ref={hotelRef}
    >
      <img
        src={singleHotel.image}
        alt="hotel"
        className="w-1/3 mt-[7px] relative right-[12px] bottom-[4px] bg-cover rounded-2xl hotel-image"
      />
      <div className="flex flex-col w-7/12 h-full">
        <div className=" ml-[10px] text-center">
          <h2 className="text-[#FEA216]">{singleHotel.name}</h2>
          <p className="text-2xl">{singleHotel.trip_type}</p>
          <p className="text-[20px] text-justify">{singleHotel.description}</p>
        </div>
        <div className="relative right-[15px] flex justify-center hotel-buttons">
          <button
            onClick={() => interestedHandler(singleHotel)}
            className="bg-[#FEA116] btn3 interestedBtn"
          >
            Interested
          </button>
          <button
            className="bg-[#FEA116] btn4 notInterestedBtn"
            onClick={() => notInterested(index)}
          >
            Not Interested
          </button>
        </div>
      </div>
      <div className="h-[100%] w-[10px] relative left-[20px] rightBorder "></div>
      <div className="ml-[20px]">
        <h2 className="text-[#FEA216] text-center">Inclusions</h2>
        <ul className="text-[20px] mt-[20px] text-center">
          {singleHotel.inclusions.map((inclusion, index) => {
            return (
              <div key={index}>
                <li className="mt-[20px] text-[20px] text-[#2997FF]">
                  {inclusion}
                </li>
                <div className="border"></div>
              </div>
            );
          })}
        </ul>
        <p className="text-center text-3xl text-[#2997FF]">
          &#8377; {singleHotel.price}/day
        </p>
      </div>
    </div>
  );
};

export default Hotel;
