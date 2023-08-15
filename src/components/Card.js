import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";
import "./Card.css";
import "./animation.css";
import { useNavigate, useParams } from "react-router-dom";
const Card = ({
  singlePlace,
  notInterestedHotel,
  hotels,
  getHotelsBack,
  fetchingItienary,
  specifichotel,
}) => {
  const navigate = useNavigate();
  const id = useParams();
  const notInterested = (index) => {
    notInterestedHotel(index);
  };
  const [allHotels, setAllHotels] = useState();
  const [searchedValues, setSearchedValues] = useState();

  const clickHandler = () => {
    const filterHotel = hotels.filter((currHotel) => {
      return currHotel.name
        .toLowerCase()
        .includes(searchedValues.toLowerCase());
    });
    setAllHotels(filterHotel);
  };

  useEffect(() => {
    setAllHotels(hotels);
  }, [hotels]);

  const itienaryHandler = () => {
    console.log("singlePlace", singlePlace);
    navigate(`itineary`);
    fetchingItienary(singlePlace);
    localStorage.setItem("itinearyName", singlePlace?.name);
    localStorage.setItem("itinearyInfo", singlePlace?.info);
    localStorage.setItem("itinearyImage", singlePlace?.image);
    localStorage.setItem("itinearyIdealDuration", singlePlace?.idealDuration);
    localStorage.setItem("itinearyBestTime", singlePlace?.BestTime);
    localStorage.setItem("itinearyPrice", singlePlace?.price);
    localStorage.setItem(
      "itinearyInclusions",
      JSON.stringify(singlePlace?.Inclusions)
    );
    localStorage.setItem(
      "itinearyExlusions",
      JSON.stringify(singlePlace?.Exclusions)
    );
    localStorage.setItem(
      "itinearyPlan",
      JSON.stringify(singlePlace?.itinearys)
    );
  };

  return (
    <div className="fade-in-text" id="package">
      <div className="relative">
        <img
          src={singlePlace.image}
          alt="destination img"
          className="h-[430px] w-full"
        />
        <div className="flex flex-col w-full justify-center items-center text-white  text-3xl infodiv">
          <h1 className="text-[#FEA216] font-bold uppercase">
            {singlePlace.name} Package
          </h1>
          <p className='"text-white mb-4 text-4.5xl mt-[20px] font-bold h-[60px] uppercase'>
            {singlePlace.info}
          </p>
          <div className="flex justify-center text-[white] text-2xl font-bold">
            <div className="flex flex-col justify-center items-center uppercase">
              <p>Ideal Duration</p>
              <p>{singlePlace.idealDuration}</p>
            </div>
            <div className="flex flex-col justify-center items-center ml-[30px] font-bold uppercase">
              <p>Best Time</p>
              <p>{singlePlace.BestTime}</p>
            </div>
            <div className="flex flex-col justify-center items-center ml-[30px] font-bold uppercase">
              <p>Prices Starts At</p>
              <p className="text-3xl">&#8377; {singlePlace.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1300px] mx-auto ">
        <div className="popularPackageHeader">
          <h1 className="text-center text-[#FEA216]">
            Most Popular {singlePlace.name} Package (
            <span>{singlePlace.duration}</span>)
          </h1>
          <div className="flex justify-center mt-[10px]">
            <button
              className="ml-[10px] bouncy bouncyBtn"
              onClick={itienaryHandler}
              style={{
                border: "1px solid black",
                width: "40%",
                padding: "15px 0",
              }}
            >
              Watch {singlePlace.name} Itineary
            </button>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Search Hotel"
              style={{
                border: "1px solid black",
                width: "500px",
                padding: "10px",
              }}
              onChange={(e) => setSearchedValues(e.target.value)}
            />
            <button
              className="ml-[10px]"
              onClick={clickHandler}
              style={{ border: "1px solid black", padding: "12px 10px" }}
            >
              Search
            </button>
          </div>
          {hotels?.length === 1 ? (
            <button onClick={getHotelsBack} className="w-full">
              <div className="w-full flex justify-center">
                <span className="text-3xl bg-[#434344]  text-[white] relative bottom-2 border-4 border-[#434344] font-bold uppercase mt-5">
                  Get All Hotels Back
                </span>
              </div>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="flex w-[1200px] mx-auto mt-[20px]  gap-10 flex-wrap cursor-pointer animated slideInUp">
          {allHotels?.map((singleHotel, index) => {
            return (
              <div key={index}>
                <Hotel
                  singleHotel={singleHotel}
                  notInterested={notInterested}
                  index={index}
                  specifichotel={specifichotel}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
