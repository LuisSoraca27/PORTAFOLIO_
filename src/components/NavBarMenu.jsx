import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarMenu = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        style={{ background: "#5500ff" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <NavbarMenu>
          <a href="">
            <button>HOME</button>
          </a>
          <a href="">
            <button>ABOUT ME</button>
          </a>
          <button onClick={handleClose}>
          
           
          </button>
          <a href="">
            <button>MY PROJECTS</button>
          </a>
          <a href="">
            <button>CONTACT</button>
          </a>
        </NavbarMenu>
      </Offcanvas>
    </>
  );
};

export default NavBarMenu;

const NavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  button {
    background-color: transparent;
    margin: 30px 0;
    font-size: 30px;
    color: white;
    border: 2px solid white;
  }
`;
