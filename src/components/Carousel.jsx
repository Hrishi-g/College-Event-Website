import React from "react";
import "../Component.css";
import file from '../img/file.mp4';
import About from "./About";
import Contact from "./Contact";

export default function Carousel() {
  return (
    <>
      <div className="div_vid">
        <video  className="videoTag" autoPlay loop muted>
          <source src={file} type="video/mp4" />
        </video>
        <div className="carousel-content">
        <h4>Vasantdada Prathisthan College</h4>
        <h4>Of Engineering</h4>
        <h4>IT Department Presents</h4>
        <h1 className="car_head">TechGyanathon</h1>
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Events
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSc7pIXSkoHkqjGCxEVr6cxdWihNzIOQ4iJqaJEy-ZsZL_oTaA/viewform" target="_blank">Project Competition</a></li>
    <li><a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdlSNkXTl32eJ401IoWVSac_QHN-_O1vyfouKKE2OdLdkNqXw/viewform" target="_blank">Coding Competition</a></li>
    <li><a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLScpH-Oy73a6WN9S1T-cohWX_gKpSYXiRSrqCDYGTkYueq0iWA/viewform" target="_blank">Tech Hunt</a></li>
    <li><a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLScUZ1cnW3xtGs5zoSRuemp6d9EkdiPFj6fThbSshvVYuoDCGw/viewform" target="_blank">Web Development</a></li>
  </ul>
</div>
      </div>
      </div>
      <About/>
      <Contact/>
    </>
  );
}
