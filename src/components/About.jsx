import React from "react";
import "../Component.css";

export default function About() {
  return (
    <div className="div_about">
      <div className="head_text">About</div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide carousel-fade my-3"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item active"
            data-bs-delay="1500"
            data-bs-interval="5000"
          >
            <h1>Who are we?</h1>
            <p>
              This department of IT established in the year 1999-2000 is headed
              by Dr. Pradip Mane. The performance of department has been
              consistent from the time of its inception. The department has
              produced university toppers consistently and regularly. The staff
              members are also well qualified, versatile and dynamic. 100% of
              our staff is ME/M.Tech and some of them are pursuing PhD Program.
              <p></p>
              To provide a valuable channel between technology applications,
              research and real world scenarios, Department of Information
              Technology is associated with three renowned industry: 9Ledge Pro,
              Blocklogy and Ekeeda Pvt Ltd.
            </p>
          </div>
          <div class="carousel-item" data-delay="1500" data-bs-interval="5000">
            <h1>About us</h1>
            <p>
              What is TechStorm? TechStorm is an Intercollegiate IT Festival
              organized by the Department of Computer Science & Information
              Technology. TechStorm is an assortment of well-thought-out events
              catering to anyone and everyone who is more than just casually
              interested in computers.
              <p></p>
              We also invite eminent speakers as guest lecturers to speak on
              modern technologies and developments in the IT industry and
              related fields. Students respond to every event by participating
              in large numbers.
              <p></p>
              Our ultimate goal is to highlight a few known as well as some
              unknown fields in which the presence of computers or computing, in
              general, has made a positive difference.
            </p>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
