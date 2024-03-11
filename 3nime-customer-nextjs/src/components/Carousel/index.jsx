import React from "react";
import Image from "next/image";
import Link from "next/link";
function Carousel(props) {
  return (
    <div className="mt-5">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link href="/Blogs/instruct">
              <img
                src="https://theme.hstatic.net/1000160337/1000885200/14/slide_1_img.jpg?v=341"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link href="/about-us">
              <img
                src="https://theme.hstatic.net/1000160337/1000885200/14/slide_3_img.jpg?v=341"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <a href="Blogs/appear">
              <img
                src="https://theme.hstatic.net/1000160337/1000885200/14/slide_4_img.jpg?v=341"
                className="d-block w-100"
                alt="..."
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="Blogs/Kakeibo"></a>
            <img
              src="https://theme.hstatic.net/1000160337/1000885200/14/slide_2_img.jpg?v=341"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
