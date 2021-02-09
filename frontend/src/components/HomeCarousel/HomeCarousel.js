import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselStyled from "./CarouselStyled";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const HomeCarousel = ({ products }) => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <CarouselStyled>
      <Carousel
        className="carousel"
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        containerClass="container"
        customTransition="all 2s cubic-bezier(0,.49,.56,1)"
        draggable
        focusOnSelect={false}
        infinite
        customLeftArrow={<BsChevronLeft />}
        customRightArrow={<BsChevronRight />}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        slidesToSlide={1}
        swipeable
      >
        {featuredProducts.map((product) => (
          <div className="slide" key={product._id}>
            <div className="wrapper">
              <img src={product.image} alt={product.name} />
              <div className="info">
                <h2>{product.name}</h2>
                <Link to={`/produkt/${product._id}`}>Sprawdź</Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </CarouselStyled>
  );
};

export default HomeCarousel;
