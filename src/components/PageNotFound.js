import React from 'react'
import Dogie from '../assets/img/Dogie.png'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="uppercase text-[80px] text-center text-[#858585] italic">
          Sorry
        </h2>
        <h3 className="uppercase text-[80px] text-[#858585] italic">
          We couldn't find that page
        </h3>
      </div>
      <img src={Dogie} alt="Dogie ate this page" className="w-[500px]" />
    </div>
  );
}

export default PageNotFound