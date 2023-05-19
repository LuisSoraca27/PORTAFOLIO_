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
    <ContentProjects id="projects">
      <h2>Mis proyectos</h2>
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
            <BackProject
              name={"Savefod server"}
              github={"https://github.com/LuisSoraca27/tester-server"}
              description={
                "Savefood app server, an app similar to rappi, the server has user management, password encryption and authentication for security, we can create stores and add products and manage the user's purchase."
              }
            />
            <BackProject name={'Ecommerce server'} github={'https://github.com/LuisSoraca27/Academlo-store'}
              description={'An ecommerce server capable of managing buyer and seller users, adding products for sale and managing the purchase.'} />
            <BackProject name={'Game store'} github={'https://github.com/LuisSoraca27/Games-store'} description={'Game store, in it he wants to be able to register the different video game consoles that he has available in his store, as well as to register several video games, and as you can guess, these games can be multiplatform.'} />
            <BackProject name={'Academlo meals'} github={'https://github.com/LuisSoraca27/Academlo-Meals'} description={'Restaurant management app, with user management, creation of restaurants and their products, users can place orders and see all their orders in the history.'} />
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
