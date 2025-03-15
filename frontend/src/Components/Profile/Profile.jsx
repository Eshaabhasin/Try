import React, { useState } from "react";
import image1 from "../../assets/K.jpeg";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Profile() {
  const [joined, setJoined] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container flex w-[90vw] h-[87vh] text-white">
        {/* Left Section */}
        <div className="w-[50%] flex flex-col items-center justify-center">
          <img src={image1} alt="" className="w-[200px] h-[200px] rounded-full" />
          <h1 className="mt-7 text-4xl">Kirti Suri</h1>
          <p className="mt-2">Financial Coach</p>
        </div>

        {/* Right Section */}
        <div className="w-[90%] bg-gray-800 p-10 rounded-lg shadow-lg">
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-4xl mt-5 text-left">About Me</h1>
              <p className="mt-5 text-[20px] text-left">
                Kriti Suri is a Financial Coach dedicated to empowering women with financial knowledge and confidence.
                She provides practical strategies and personalized guidance to help women manage their finances
                effectively and achieve financial independence. <br /><br />
                Kriti focuses on addressing the unique financial challenges faced by women, ensuring they have the
                tools and resources to make informed financial decisions.
              </p>
            </div>

            {/* Calendar Section */}
            <div className="ml-5">
              <h2 className="text-xl font-bold mt-10 mb-1">Schedule a Video Call</h2>
              <div className="flex flex-col items-center p-4 rounded-xl w-full md:w-[370px]">
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="w-full p-2 bg-gray-800 text-black rounded-xl"
                />
                <p className="mt-3 text-lg text-gray-300">
                  Selected Date: <span className="text-blue-400">{date.toDateString()}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex mt-5">
            {!joined && (
              <Link to="/VideoRoom2">
                <button
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => setJoined(true)}
                >
                  Get on a Video Call
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
