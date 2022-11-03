import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Content } from "./MySkills";
import frases from "../video/frases.mp4";
import ecommerceV from "../video/ecommerceV.mp4";
import clima from "../video/clima.mp4";
import pokemon from "../video/pokemon.mp4";
import rickAndMorty from "../video/rickandmorty.mp4";
import ecommerce from "../video/commerce.mp4";
import FrontProject from "./FrontProject";
import BackProject from "./BackProject";

const Myprojects = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ContentProjects>
      <h2>My projects</h2>
      <div className="selectProjects">
        <button
          className={`selectProjects__button ${isVisible ? "isVisible" : ""}`}
          onClick={() => setIsVisible(true)}
        >
          Front-end
        </button>
        <button
          className={`selectProjects__button ${isVisible ? "" : "isVisible"}`}
          onClick={() => setIsVisible(false)}
        >
          Back-end
        </button>
      </div>
      <Content className="content">
        {isVisible ? (
          <>
            <FrontProject
              videoProject={pokemon}
              nameProject={"Pokemon App"}
              demo={"https://vermillion-kleicha-e0c8fb.netlify.app/"}
              code={"https://github.com/LuisSoraca27/Fifth-entregable"}
            />

            <FrontProject
              videoProject={rickAndMorty}
              nameProject={"Rick and Morty wiki"}
              demo={"https://lucky-croquembouche-7a69e0.netlify.app/"}
              code={"https://github.com/LuisSoraca27/Third-entregable"}
            />

            <FrontProject
              videoProject={ecommerceV}
              nameProject={"Ecommerce v1"}
              demo={"https://serene-genie-9d8352.netlify.app/"}
              code={"https://github.com/LuisSoraca27/e-commerce"}
            />

            <FrontProject
              videoProject={frases}
              nameProject={"Ramdom phrases"}
              demo={"https://rainbow-eclair-371018.netlify.app/"}
              code={"https://github.com/LuisSoraca27/first-entregable"}
            />

            <FrontProject
              videoProject={ecommerce}
              nameProject={"Ecommerce v2"}
              demo={"https://rainbow-eclair-371018.netlify.app/"}
              code={"https://scintillating-heliotrope-2aa901.netlify.app/"}
            />

            <FrontProject
              videoProject={clima}
              nameProject={"Weather App"}
              demo={"https://shimmering-unicorn-d0a406.netlify.app/"}
              code={"https://github.com/LuisSoraca27/Second-entregable"}
            />
          </>
        ) : (
        <>
          <BackProject />
          <BackProject />
          <BackProject />
          <BackProject />
        </>
        )}
      </Content>
    </ContentProjects>
  );
};

export default Myprojects;

const ContentProjects = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #05021c;

  h2 {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
  }
  .selectProjects {
    width: 320px;
    height: 30px;
    border: 3px solid white;
    border-radius: 8px;
    margin: 20px auto;
    padding: 0;
    box-sizing: content-box;

    &__button {
      width: 50%;
      height: 100%;
      border-radius: 6px;
      font-size: 20px;
      font-weight: 700;
      background-color: transparent;
      color: white;
      transition-duration: 0.7s;
    }
    .isVisible {
      background-color: white;
      color: #05021c;
      transition-duration: 0.7s;
    }
  }
`;
