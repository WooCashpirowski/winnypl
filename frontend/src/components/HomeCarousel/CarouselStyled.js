import styled from "styled-components";

const CarouselStyled = styled.div`
  .carousel {
    background: linear-gradient(270deg, #cf3142 0%, #260000 100%);
    .rec.rec-arrow {
      border-radius: 0;
      background: none;
      box-shadow: none;
    }
    .rec.rec-dot {
      height: 6px;
      width: 6px;
    }
    .rec.rec-dot.rec.rec-dot_active {
      background-color: var(--red);
      box-shadow: 0 0 1px 3px var(--dark-red);
    }

    .slide {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60vh;
      .img-wrapper {
        height: 80%;
        width: 250px;
        overflow: hidden;
        text-align: center;
        border-radius: 25% 0 25% 0;
        background: white;
        img {
          height: 100%;
        }
      }
    }
  }
`;

export default CarouselStyled;
