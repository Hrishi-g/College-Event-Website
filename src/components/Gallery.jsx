import React from 'react'
import "../Component.css";
import gallery2 from "../img/gallery2.jpeg";
import gallery1 from "../img/gallery1.jpeg";

export default function Gallery() {
  return (
    <div className='gallery-info'>
      <div className='gallery-row1'>
      <div className="card">
        <span className='img-border'>
        <img src={gallery1} className="card-img-top" alt="..."/>
        </span>
        <div className="card-body">
          <p className="card-text">
            <span>Pranav Kolekar</span>
            <span>President</span>
            </p>
        </div>
      </div>
      <div className="card">
      <span className='img-border'>
        <img src={gallery2} className="card-img-top" alt="..."/>
        </span>
        <div className="card-body">
          <p className="card-text">
            <span>Pranav Kolekar</span>
            <span>President</span>
            </p>
        </div>
      </div>
      <div className="card">
      <span className='img-border'>
        <img src={gallery1} className="card-img-top" alt="..."/>
        </span>
        <div className="card-body">
          <p className="card-text">
            <span>Pranav Kolekar</span>
            <span>President</span>
            </p>
        </div>
      </div>
      <div className="card">
      <span className='img-border'>
        <img src={gallery2} className="card-img-top" alt="..."/>
        </span>
        <div className="card-body">
          <p className="card-text">
            <span>Pranav Kolekar</span>
            <span>President</span>
            </p>
        </div>
      </div>
      </div>

      <div className='gallery-row2'>
      <div className="card">
      <span className='img-border'>
        <img src={gallery1} className="card-img-top" alt="..."/>
        </span>
        <div className="card-body">
          <p className="card-text">
            <span>Pranav Kolekar</span>
            <span>President</span>
            </p>
        </div>
      </div>
      <div className="card">
      <span className='img-border'>
        <img src={gallery2} className="card-img-top" alt="..."/>
        </span>
        <div className="card-body">
          <p className="card-text">
            <span>Pranav Kolekar</span>
            <span>President</span>
            </p>
        </div>
      </div>
      <div className="card">
      <span className='img-border'>
        <img src={gallery1} className="card-img-top" alt="..."/>
        </span>
        <div className="card-body">
          <p className="card-text">
            <span>Pranav Kolekar</span>
            <span>President</span>
            </p>
        </div>
      </div>
      </div>
    </div>
  )
}
