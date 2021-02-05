import React from "react";
import Carousel from "react-elastic-carousel";
import CarouselStyled from "./CarouselStyled";

const HomeCarousel = ({ products }) => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <CarouselStyled>
      <Carousel
        className="carousel"
        enableAutoPlay
        autoPlaySpeed={5000}
        transitionMs={1500}
      >
        {featuredProducts.map((product) => (
          <div className="slide" key={product._id}>
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </Carousel>
    </CarouselStyled>
  );
};

export default HomeCarousel;
