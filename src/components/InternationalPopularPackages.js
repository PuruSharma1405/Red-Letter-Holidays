import React, { useEffect, useState } from 'react'
import './PopularPackages.css'
import { useNavigate } from 'react-router-dom';
const InternationalPopularPackages = ({ singlePackage }) => {
  const [isVisible, setIsVisible] = useState(false);
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
  const navigate = useNavigate();
  const clickHandler = (data) => {
    navigate(`package/${data}`);
  };
  return (
    <div
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } m-[15px] singleCard`}
      ref={homeRef}
    >
      <img
        src={singlePackage.image}
        alt="singlepackage"
        className="w-[500px] h-[531px] "
      />
      <div className="text-white figcaption">
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {singlePackage.place}
        </h3>
        <div className="btncontainer">
          <button
            className="btn"
            onClick={() => clickHandler(singlePackage.place)}
          >
            Book Now
          </button>
        </div>
        <p>{singlePackage.duration}</p>
      </div>
    </div>
  );
};

export default InternationalPopularPackages;