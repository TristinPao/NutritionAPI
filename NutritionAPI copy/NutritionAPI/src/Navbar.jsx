import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Define your component pages
const MusicLessons = () => <div>Music Lessons Page</div>;
const AcademyHighlights = () => <div>Academy Highlights Page</div>;
const Careers = () => <div>Careers Page</div>;
const StudentResources = () => <div>Student Resources Page</div>;
const Calendar = () => <div>Academic Calendar Page</div>;
const Mission = () => <div>Our Mission Page</div>;

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <BrowserRouter>
      <Router>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="images/logo.png" alt="Logo" />
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/">MUSIC LESSONS</Link>
              </li>
              <li>
                <Link to="/academic-highlights">ACADEMY HIGHLIGHTS</Link>
              </li>
              <li>
                <Link to="/careers">CAREERS</Link>
              </li>
              <li className="dropdown">
                <a href="#" onClick={toggleDropdown}>
                  CURRENT STUDENTS
                </a>
                <ul
                  className={`dropdown-menu ${
                    dropdownVisible ? "visible" : ""
                  }`}
                  style={{ display: dropdownVisible ? "block" : "none" }}
                >
                  <li>
                    <Link to="/student-resources">STUDENT RESOURCES</Link>
                  </li>
                  <li>
                    <Link to="/calendar">ACADEMIC CALENDAR</Link>
                  </li>
                  <li>
                    <Link to="/mission">OUR MISSION</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MusicLessons />} />
          <Route path="/academic-highlights" element={<AcademyHighlights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/student-resources" element={<StudentResources />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
};

export default Navbar;
