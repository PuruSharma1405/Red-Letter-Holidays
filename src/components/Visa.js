import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Visa = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      toast.info("Our team will contact you shortly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(()=>{
        alert("Click Ok To Go Back to Dashboard")
      },3000)
      setTimeout(()=>{
         navigate('/')
      },3000)
  };

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <div id="visa">
      <ToastContainer />
      <div className="relative">
      <img
        src="https://demo2wpopal.b-cdn.net/triply/wp-content/uploads/2020/11/breadcrumb-bg.jpg"
        alt="visa"
      />
      <h3 className="text-center absolute w-full bottom-20 text-white text-4xl uppercase visa-banner">Visa</h3>
      </div>
      <div>
        <h1 className="text-center mt-[20px] text-[#FEA216]">Fill All the Details,Our Team Will Shortly Contact You</h1>
        <form
          onSubmit={handleSubmit}
          style={formStyles}
          className=" animated slideInUp visa"
        >
          <label style={labelStyles}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
          <br />
          <label style={labelStyles}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
          <br />
          <label style={labelStyles}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
          <br />
          <label style={labelStyles}>
            Contact Number:
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              style={inputStyles}
            />
          </label>
          <br />
          <button type="submit" style={buttonStyles}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles
const formStyles = {
  maxWidth: "1200px",
  margin: "30px auto",
  boxShadow: "1px 1px 1px  ",
  borderRadius:'5px',
  padding: "30px",
  background: "#fff",
};

const labelStyles = {
  display: "block",
  marginBottom: "10px",
  fontWeight: "bold",
};

const inputStyles = {
  padding: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "100%",
};

const buttonStyles = {
  padding: "12px 24px",
  borderRadius: "4px",
  border: "none",
  background: "#4285F4",
  color: "#fff",
  cursor: "pointer",
};


export default Visa;
