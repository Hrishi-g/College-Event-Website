import React from "react";
import "../Component.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-black">
        <div className="container-fluid">
          <Link style={{color: "white",fontWeight:"bold"}} className="navbar-brand" to="/">
            TechGyanathon
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{borderColor: "white"}}
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">             
              <Link className="nav-link active" style={{color: "white",fontWeight:"bold"}} aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/#about">
                About
              </Link>
              <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/#contact">
                Contact
              </Link>
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
              {/* <Link className="nav-link" style={{color: "white",fontWeight:"bold"}} to="/card">
                Card
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
