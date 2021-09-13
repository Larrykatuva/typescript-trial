import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";

const Slide = () => {
  return (
    <Carousel className="slider">
      <Carousel.Item>
        <img className="slider-img" src={Slide1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="slider-img" src={Slide2} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="slider-img" src={Slide3} alt="" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
