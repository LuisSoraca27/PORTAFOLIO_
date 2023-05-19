import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";

const NavBarMenu = ({ active, changeActive }) => {
  return (
    <>
      <NavMenu className={`navbarMenu ${active && "notActive"}`}>
        <button onClick={changeActive}><i className="fa-solid fa-xmark"></i></button>
        <div>
          <a href="#home" onClick={changeActive}>
            INICIO
          </a>
          <a href="#about" onClick={changeActive}>
            SOBRE MI
          </a>
          <a href="#mySkillss" onClick={changeActive}>
            MIS HABILIDADES
          </a>
          <a href="#projects" onClick={changeActive}>
            MIS PROYECTOS
          </a>
          <a href="#contact" onClick={changeActive}>
            CONTACTO
          </a>
        </div>
      </NavMenu>
    </>
  );
};

export default NavBarMenu;

const NavMenu = styled.div`

 button {
  background-color: transparent;
  border: none;
  font-size: 3rem;
  padding-left: 1rem;
  color: white;
 }
  div {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      margin: 20px 0;
      text-decoration: none;
      color: white;
      padding: 10px 30px;
      border: 2px solid white;
      font-size: 1.6rem;
    }
  }
`;
