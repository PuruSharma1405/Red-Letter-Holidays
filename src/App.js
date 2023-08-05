import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route,useLocation} from "react-router-dom"
import Services from './components/Services';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Payment from './components/Payment';
import India from './components/India';
import Asia from './components/Asia';
import Beaches from './components/Beaches';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import PrivacyPolicy from './components/PrivacyPolicy';
import Itineary from './components/Itineary';
import Visa from './components/Visa';
import SpecificHotel from './components/SpecificHotel';
function App() {
  const[place,setPlace]=useState("package/Goa")
  const[itienary,setItineary]=useState()
  const location=useLocation();
  const[specificHotel,setSpecificHotel]=useState()
  const fetchingPlace=(value)=>{
    setPlace(value)
  }

   function fetchingItienary(data) {
    console.log('data',data);
     setItineary(data);
   }

   function specifichotel(data){
    setSpecificHotel(data)
   }

   console.log('location',useLocation());

  return (
    <div className="bg-[#F1F8FF] h-screen w-screen overflow-x-hidden">
      <Navbar fetchingPlace={fetchingPlace} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/#" element={<India />} />
        <Route path="#" element={<Asia />} />
        <Route path="#" element={<Beaches />} />
        <Route path="/services" element={<Services />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/package/:id"
          element={
            <Cards
              fetchingPlace={fetchingPlace}
              place={place}
              fetchingItienary={fetchingItienary}
              specifichotel={specifichotel}
            />
          }
        />
        <Route
          path="/package/:id/itineary"
          element={<Itineary itienary={itienary} />}
        />
        SpecificHotel
        <Route
          path="/package/:id/:id"
          element={<SpecificHotel specificHotel={specificHotel}/>}
        />
        <Route path="/visa" element={<Visa />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
