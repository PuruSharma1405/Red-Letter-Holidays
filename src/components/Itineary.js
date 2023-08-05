import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Itineary = ({ itienary }) => {
  const navigate = useNavigate();
  const itinearyName=localStorage.getItem("itinearyName");
  const itinearyInfo=localStorage.getItem("itinearyInfo");
  const itinearyImage=localStorage.getItem("itinearyImage");
  const itinearyDuration=localStorage.getItem("itinearyIdealDuration");
  const itinearyBestTime=localStorage.getItem("itinearyBestTime");
  const itinearyPrice=localStorage.getItem("itinearyPrice");
  const itinearyInclusions=JSON.parse(localStorage.getItem("itinearyInclusions"));
  const itinearyExclusions=JSON.parse(localStorage.getItem("itinearyExlusions"));
  const itinearyPlan=JSON.parse(localStorage.getItem("itinearyPlan"));

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        {/* Image */}
        <img
          src={itienary?.image ? itienary?.image : itinearyImage}
          alt="destination img"
          className="h-[430px] w-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-3xl infodiv">
          <h1 className="text-[#FEA216] font-bold uppercase">
            {itienary?.name ? itienary?.name : itinearyName} Package
          </h1>
          <p className="text-white mb-4 text-4.5xl mt-[20px] font-bold h-[60px] uppercase">
            {itienary?.info ? itienary?.info : itinearyInfo}
          </p>
          <div className="flex justify-center text-white text-2xl font-bold">
            <div className="flex flex-col justify-center items-center uppercase">
              <p>Ideal Duration</p>
              <p>
                {itienary?.idealDuration
                  ? itienary?.idealDuration
                  : itinearyDuration}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ml-[30px] font-bold uppercase">
              <p>Best Time</p>
              <p>
                {itienary?.BestTime ? itienary?.BestTime : itinearyBestTime}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ml-[30px] font-bold uppercase">
              <p>Prices Starts At</p>
              <p className="text-3xl">
                {itienary?.price ? itienary?.price : itinearyPrice}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1200px] mx-auto p-8">
        {/* Inclusions */}
        <h1 className="mt-[20px] text-[#FEA216]">+ Inclusions</h1>
        <div className="mt-[20px]">
          {itienary?.Inclusions
            ? itienary?.Inclusions.map((currInclusion, index) => {
                return (
                  <div className="text-3xl mt-3 flex" key={index}>
                    <ImCheckboxChecked />
                    <span className="ml-[10px]">{currInclusion}</span>
                  </div>
                );
              })
            : itinearyInclusions.map((currInclusion, index) => {
                return (
                  <div className="text-3xl mt-3 flex" key={index}>
                    <ImCheckboxChecked />
                    <span className="ml-[10px]">{currInclusion}</span>
                  </div>
                );
              })}
        </div>

        <h1 className="mt-[20px] text-[#FEA216]">- Exclusions</h1>
        <div className="mt-[20px]">
          {itienary?.Exclusions?itienary?.Exclusions.map((currExclusion, index) => {
            return (
              <div className="text-3xl mt-3 flex" key={index}>
                <ImCheckboxChecked />
                <span className="ml-[10px]">{currExclusion}</span>
              </div>
            );
          }):itinearyExclusions?.map((currExclusion, index) => {
            return (
              <div className="text-3xl mt-3 flex" key={index}>
                <ImCheckboxChecked />
                <span className="ml-[10px]">{currExclusion}</span>
              </div>
            );
          })}
        </div>

        {/* Itinerary Plan */}
        <div>
          <h1 className="mt-[20px] text-[#FEA216]">Itinerary Plan</h1>
          {itienary?.itinearys? itienary?.itinearys?.map((currItineary, index) => {
            return (
              <div className="text-3xl mt-3" key={index}>
                <span className="text-[#FEA216]">{currItineary.day}</span>
                <span className="text-[#FEA216]">
                  {currItineary.itinerary}
                </span>{" "}
                <br />
                <div className="mt-[20px]">{currItineary.description}</div>
              </div>
            );
          }):itinearyPlan?.map((currItineary, index) => {
            return (
              <div className="text-3xl mt-3" key={index}>
                <span className="text-[#FEA216]">{currItineary.day}</span>
                <span className="text-[#FEA216]">
                  {currItineary.itinerary}
                </span>{" "}
                <br />
                <div className="mt-[20px]">{currItineary.description}</div>
              </div>
            );
          })}
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center mt-8">
          <button className="btn1" onClick={() => navigate(-1)}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itineary;
