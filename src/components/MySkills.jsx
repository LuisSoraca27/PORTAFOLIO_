import React from "react";
import styled from "styled-components";
import htmlIcon from "../img/icons8-html-5-240.svg";
import cssIcon from "../img/cssIcon.svg";
import javascriptIcon from "../img/javascriptIcon.svg";
import reactIcon from "../img/reactIcon.svg";
import nodejsIcon from "../img/nodejsIcon.svg";
import expressIcon from "../img/expressIcon.svg";
import posgresIcon from "../img/posgresIcon.svg";
import gitIcon from "../img/gitIcon.svg";

const MySkills = () => {
  return (
    <ContentSkills>
      <h2>My skills</h2>
      <Content>
        <Skills>
          <img src={htmlIcon} alt="html" />
          <b>HTML</b>
        </Skills>
        <Skills>
            <img src={cssIcon} alt="html" />
        <b>CSS</b>
        </Skills> 
        <Skills>
         <img src={javascriptIcon} alt="html" />
          <b>JavaScript</b>
        </Skills>
        <Skills>
 <img src={reactIcon} alt="html" />
        <b>React Js</b>
        </Skills>
        <Skills>
 <img src={nodejsIcon} alt="html" />
          <b>Node Js</b>
        </Skills>
        <Skills>
        <img src={expressIcon} alt="html" />
            <b>Express</b>
        </Skills>
        <Skills>
        <img src={posgresIcon} alt="html" />
            <b>PosgreSQL</b>
        </Skills>
        <Skills>
        <img src={gitIcon} alt="html" />
            <b>Git</b>
        </Skills>
      </Content>
    </ContentSkills>
  );
};

export default MySkills;

const ContentSkills = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #05021c;

  h2 {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 55px;
  }
`;
const Content = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  justify-content: center;
  align-items: center;
`;
const Skills = styled.div`
  width: 160px;
  height: 160px;
  background-color: rgba(255, 255, 255, 100);
  margin: 9px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    display: block;
  }
  b {
    font-size: 22px;
  }
`;
