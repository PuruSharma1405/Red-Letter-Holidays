import React, { useEffect } from 'react'
import "./Hotel.css";
import { useNavigate } from 'react-router-dom';



const SpecificHotel = ({ specificHotel }) => {
  const hotelName=localStorage.getItem("hotelName")
  const hotelImage=localStorage.getItem("hotelImage", hotelName?.image);
  const hotelTripType= localStorage.getItem("hotel_trip_type", hotelName?.trip_type);
  const hotelDescription= localStorage.getItem("hotelDescription", hotelName?.description);
  const hotelInclusion= JSON.parse(localStorage.getItem("hotelInclusions"));
  const hotelPrice=localStorage.getItem("hotelPrice");
  const navigate=useNavigate()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  console.log('specificHotel',specificHotel);

  console.log('hotelInclusion',hotelInclusion);
  return (
    <div className="w-[1200px] mx-auto mt-[100px] ">
      <div className="w-[90%] border-8 border-[#74E2E7] text-center ml-14">
        <span className="text-[30px] text-[#F08080] text-center">{`We sincerely appreciate your interest in ${
          specificHotel?.name ? specificHotel?.name : hotelName
        } For immediate support, feel free to contact us at +91 8447190171. We look forward to providing you with exceptional service.`}</span>
      </div>
      <div className={`container h-full  relative hover:shadow-2xl mt-[20px]`}>
        <img
          src={specificHotel?.image ? specificHotel?.image : hotelImage}
          alt="hotel"
          className="w-1/3 mt-[7px] relative right-[12px] bottom-[4px] bg-cover rounded-2xl "
        />
        <div className="flex flex-col w-7/12 h-full">
          <div className=" ml-[10px] text-center">
            <h2 className="text-[#FEA216]">
              {specificHotel?.name ? specificHotel?.name : hotelName}
            </h2>
            <p className="text-2xl">
              {specificHotel?.trip_type
                ? specificHotel?.trip_type
                : hotelTripType}
            </p>
            <p className="text-[20px] text-justify">
              {specificHotel?.description
                ? specificHotel?.description
                : hotelDescription}
            </p>
          </div>
        </div>
        <div className="h-[400px] w-[10px] relative left-[20px] rightBorder "></div>
        <div className="ml-[20px]">
          <h2 className="text-[#FEA216] text-center">Inclusions</h2>
          <ul className="text-[20px] mt-[20px] text-center">
            {specificHotel?.inclusions
              ? specificHotel.inclusions.map((inclusion, index) => {
                  return (
                    <li key={index} className="mt-[20px]">
                      {inclusion}
                    </li>
                  );
                })
              : hotelInclusion?.map((inclusion, index) => {
                  return (
                    <li key={index} className="mt-[20px]">
                      {inclusion}
                    </li>
                  );
                })}
          </ul>
          <p className="text-center text-3xl text-[#FEA216]">
            {specificHotel?.price ? specificHotel?.price : hotelPrice}/day
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-[20px]">
        <button
          className="btn1 flex justify-center"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default SpecificHotel