import React, { useState } from 'react'
import PaymentImage from "../assets/RedLetterHolidays.jpg";
import './Payments.css'
const Payment = () => {
  const[formData,setFormData]=useState({
    fullName:'',
    amount:'',
    phone:'',
    email:'',
    address:'',
    city:'',
    state:'',
    pincode:'',
    country:'',
    message:''
  })
  return (
    <div
      className="w-[1200px] mx-auto fade-in-text"
      style={{ boxShadow: "5px 15px 5px white" }}
    >
      {/* <div>
        <div className="text-center">
          <h1 className="mt-[30px]">
            Pay <span className='text-[#FEA216]'>Online</span>
          </h1>
          <p className='text-3xl'>Red Letter Holidays</p>
        </div>
        <div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Name"
              className="w-2/5 p-3 border"
              name='fullName'
            />
            <input
              type="number"
              placeholder="Amount"
              className="w-2/5 p-3 border mx-[30px]"
              name='amount'
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Phone"
              className="w-2/5 p-3 border mt-[30px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-2/5 p-3 border mx-[30px] mt-[30px]"
            />
          </div>
          <div className="mt-[30px] flex justify-center">
            <input
              type="text"
              placeholder="Address"
              className="w-[82.5%] p-3 border relative right-[15px]"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="city"
              className="w-2/5 p-3 border mt-[30px]"
            />
            <input
              type="text"
              placeholder="state"
              className="w-2/5 p-3 border mx-[30px] mt-[30px]"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="pincode"
              className="w-2/5 p-3 border mt-[30px]"
            />
            <input
              type="text"
              placeholder="country"
              className="w-2/5 p-3 border mx-[30px] mt-[30px]"
            />
          </div>
          <div className="flex justify-center">
            <textarea
              placeholder="Any Message"
              className="w-[82.5%] mt-[30px] p-3 resize-none relative right-[15px] border"
            ></textarea>
          </div>
          <div className="flex justify-center relative right-[15px] mt-[30px]">
            <button className="w-[82.5%] bg-[#FEA216] py-3 cursor-pointer">
              Pay Now
            </button>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center mt-[30px] payment">
        <h3 className='text-[#FEA216]'>Please Scan This QR Code Using UPI Scanner</h3>
        <img
          src={PaymentImage}
          alt="online payment img"
          className="h-[700px] w-[500px] mt-5 mb-5"
        />
      </div>
    </div>
  );
}

export default Payment