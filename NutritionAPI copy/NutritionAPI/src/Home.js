import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import main from "./images/main.jpeg";

const Home = () => {
  return (
    <div className="home">
      {/* Photo Section */}
      <div className="photo-section">
        <img src={main} alt="Decorative" className="photo-image" />
      </div>

      {/* Main Section */}
      <div className="main-section-wrapper">
        <div className="main-section">
          <div className="container text-center">
            <h1 className="display-3">Welcome to Nutrition App</h1>
            <p>Your source for the latest in nutrition research.</p>
            <br />
            <Link to="/api" className="btn btn-primary btn-lg">
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
