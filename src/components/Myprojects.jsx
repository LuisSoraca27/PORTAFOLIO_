import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Content } from "./MySkills";
import frases from '../video/frases.mp4'
import ecommerceV from '../video/ecommerceV.mp4'
import clima from '../video/clima.mp4'
import pokemon from '../video/pokemon.mp4'
import rickAndMorty from '../video/rickandmorty.mp4'
import ecommerce from '../video/commerce.mp4'




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
        {
            isVisible ?
           <>
            <ProjectFront>
              <video loop autoPlay muted>
                <source src={pokemon} type='video/mp4'/>
              </video>
            </ProjectFront>
            <ProjectFront>
            <video loop autoPlay muted>
                <source src={rickAndMorty} type='video/mp4'/>
              </video>
            </ProjectFront>
            <ProjectFront>
            <video loop autoPlay muted>
                <source src={ecommerceV} type='video/mp4'/>
              </video>
            </ProjectFront>
            <ProjectFront>
            <video loop autoPlay muted>
                <source src={frases} type='video/mp4'/>
              </video>
            </ProjectFront>
            <ProjectFront>
            <video loop autoPlay muted>
                <source src={ecommerce} type='video/mp4'/>
              </video>
            </ProjectFront>
            <ProjectFront>
            <video loop autoPlay muted>
                <source src={clima} type='video/mp4'/>
              </video>
            </ProjectFront>
           </>
            :
            <ProjectBack></ProjectBack>
        }
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
    width: 350px;
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
      transition-duration: .7s;
    }
    .isVisible {
      background-color: white;
      color: #05021c;
      transition-duration: .7s;
    }
  }
`;

const ProjectBack = styled.div``
;

const ProjectFront = styled.div`
width: 320px;
height: 180px;
border: 2px solid white;
margin: 10px 5px;
 
 video {
  width: 100%;
 }
`;
