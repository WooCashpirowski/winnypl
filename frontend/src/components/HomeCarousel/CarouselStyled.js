import styled from "styled-components";

const CarouselStyled = styled.div`
  .carousel {
    background: linear-gradient(270deg, #cf3142 20%, #260000 100%);
    position: "relative";
    .slide {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60vh;
      .wrapper {
        height: 80%;
        width: 90%;
        overflow: hidden;
        text-align: center;
        border-radius: 15px 0 15px 0;
        /* background: white; */
        background: linear-gradient(90deg, white 40%, #cf3142 100%);
        display: flex;
        align-items: center;
        /* justify-content: space-around; */
        padding: 2rem;
        img {
          height: 100%;
        }
        .info {
          text-align: center;
          width: 70%;
          h2 {
            font-family: "Dancing Script", cursive;
            font-size: 3rem;
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .carousel {
      .slide {
        .wrapper {
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(125deg, white 75%, #cf3142 100%);
          img {
            height: 80%;
          }
          .info {
            width: 100%;
            h2 {
              font-size: 1.8rem;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
    }
  }
`;

export default CarouselStyled;
