import React, { useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HomeDiv>
        <div className="HomeDivDiv">
          <ContentHome data-aos="fade-right">
            <p>
              Hi my name is <b>Luis Soracá</b>.{" "}
            </p>
            <h3>Full-stack developer</h3>
            <a href="#About">
              <button>About Me</button>
            </a>
          </ContentHome>
          <ContentHome2 data-aos="fade-left">
            <div className="container-img-home">
              <i className="fa-solid fa-code"></i>
            </div>
          </ContentHome2>
          <RedHome>
            <a
              href="https://github.com/LuisSoraca27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-enrique-sorac%C3%A1-benthan-09a999241/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/luis_soraca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </RedHome>
        </div>
      </HomeDiv>
    </>
  );
};

export default Home;

const HomeDiv = styled.div`
  width: 100%;
  background-color: #05021c;
  .HomeDivDiv {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-wrap: wrap;
  }
`;
export const ContentHome = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  p {
    color: white;
    font-size: 30px;
  }
  b {
    color: #522cef;
  }
  h3 {
    color: white;
    font-size: 65px;
    display: block;
    font-weight: bold;
    text-align: center;
  }
  button {
    margin-top: 15px;
    padding: 10px;
    border: none;
    width: 160px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;

    background-color: #5500ff;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #55557f;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    p {
      font-size: 22px;
    }
    h3 {
      text-align: center;
      font-size: 65px;
      margin-bottom: 30px;
      line-height: 60px;
    }
    button {
      position: relative;
      animation-name: flota;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      @keyframes flota {
        0% {
          top: 0px;
        }
        25% {
          top: 10px;
        }
        50% {
          top: 0;
        }
        75% {
          top: 10px;
        }
        100% {
          top: 0;
        }
      }
    }
  }
`;
const ContentHome2 = styled.div`
  width: 50%;
  height: 80vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  .container-img-home {
    margin: auto;
    padding: 50px;
    padding-left: 80px;
  }
  .container-img-home i {
    font-size: 300px;
    color: white;
    position: relative;
    animation-name: flota;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    @keyframes flota {
      0% {
        top: 0px;
      }
      25% {
        top: 10px;
      }
      50% {
        top: 0;
      }
      75% {
        top: 10px;
      }
      100% {
        top: 0;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;
const RedHome = styled.div`
  width: 100%;
  height: 10vh;
  text-align: center;
  i {
    color: white;
    padding: 20px;
    font-size: 35px;
  }
  @media (max-width: 768px) {
    i {
      font-size: 30px;
    }
  }
`;
