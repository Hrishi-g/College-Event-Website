import React from "react";
import "../Component.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
        <div className="container-fluid">
          <a style={{color: "white",fontWeight:"bold"}} className="navbar-brand" href="#">
            Techanathon
          </a>
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
              <a className="nav-link active" style={{color: "white",fontWeight:"bold"}} aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" style={{color: "white",fontWeight:"bold"}} href="#">
                Features
              </a>
              <a className="nav-link" style={{color: "white",fontWeight:"bold"}} href="#">
                Pricing
              </a>
              <a className="nav-link disabled" style={{color: "white",fontWeight:"bold"}}>Disabled</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
