import React, { useEffect, useState } from "react";
import { data } from "./data";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const Cards = ({ place, fetchingPlace, fetchingItienary, specifichotel }) => {
  let { id } = useParams();
  const [placeData, setPlaceData] = useState(data.data);
  const [allPlaces, setAllPlaces] = useState([]);
  const [hotels, setHotels] = useState();

  function getPlaces() {
    setAllPlaces(placeData[place]);
  }

  const notInterestedHotel = (i) => {
    const removeHotel = hotels.filter((currHotel, index) => {
      return i !== index;
    });
    if (hotels.length === 1) {
      toast.info("PLEASE MAKE INTEREST IN ATLEAST 1 HOTEL", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      setHotels(removeHotel);
    }
  };

  const getHotelsBack = () => {
    setHotels(allPlaces[0]?.hotels);
  };

  useEffect(() => {
    setHotels(allPlaces[0]?.hotels);
  }, [allPlaces]);

  useEffect(() => {
    getPlaces();
    fetchingPlace(`package/${id}`);
  }, [place]);

  return (
    <div className=" mx-auto">
      <ToastContainer />
      {allPlaces?.map((singlePlace, index) => {
        return (
          <div key={index}>
            <Card
              key={singlePlace.id}
              singlePlace={singlePlace}
              notInterestedHotel={notInterestedHotel}
              hotels={hotels}
              getHotelsBack={getHotelsBack}
              fetchingItienary={fetchingItienary}
              specifichotel={specifichotel}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
