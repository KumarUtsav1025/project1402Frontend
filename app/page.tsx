"use client";
import React, { useState } from "react";
import "./globals.css"; // Import CSS file for styling

import Card from "./Card";
import CardVers2 from "./CardVers2";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    instagramId: "",
    yearOfStudy: "",
  });
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <nav className="navBar">Crushed</nav>
      <div className="form-container">
        <h1>Find Your Match!</h1>
        <form onSubmit={handleClick}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" />
          </div>
          <div>
            <label htmlFor="instagramId">Instagram ID:</label>
            <input type="text" id="instagramId" name="instagramId" />
          </div>
          <div>
            <label htmlFor="yearOfStudy">Year of Study:</label>
            <select id="yearOfStudy" name="yearOfStudy">
              <option value="">Select Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
          </div>
          <div className="gender">
            <div className="male" style={{ display: "inline" }}>
              <input type="radio" name="gender" />
              <label htmlFor="gender">Male</label>
            </div>
            <div className="female">
              <input type="radio" name="gender" />
              <label htmlFor="gender">Female</label>
            </div>
          </div>
          {/* <Card> </Card> */}
          <CardVers2></CardVers2>
        </form>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
      <footer className="ftr">
        {" "}
        Made with &#9829; <br />
        [By singles @NITRR For singles @NITRR.]
      </footer>
    </>
  );
};
export default page;
