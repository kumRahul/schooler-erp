import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <CCarousel controls indicators dark>
      <CCarouselItem>
        <CImage
          className="d-block w-100 carousel"
          src="https://img.freepik.com/free-vector/realistic-back-school-landing-page-template_52683-67602.jpg?size=626&ext=jpg&ga=GA1.2.1428516334.1652984885"
          alt="slide 1"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100 carousel"
          src="https://img.freepik.com/free-photo/back-school-education-concept-yellow-retro-school-bus-carryies-pencils-roof-blue-background-with-school-stationery_90791-1222.jpg?size=626&ext=jpg&ga=GA1.2.101994831.1653655379"
          alt="slide 2"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100 carousel"
          src="https://img.freepik.com/free-photo/stack-books-black-wooden-table_93675-135412.jpg?size=626&ext=jpg&ga=GA1.2.101994831.1653655379"
          alt="slide 3"
        />
      </CCarouselItem>
    </CCarousel>
  );
}

export default Carousel;
