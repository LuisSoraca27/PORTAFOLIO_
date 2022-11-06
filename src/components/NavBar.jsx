import React, { useState } from "react"
import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";



const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);



  return (
    <>
      <NavContainer>
        <div className="NavContainerDiv" data-aos="fade-down">
          <h2>
            
            Luis<span>Soracá</span>.Dev
          </h2>
          <button onClick={handleShow}>
            <i className="fa-solid fa-bars"></i>
          </button>
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
              <a href="#About" onClick={() => handleClose} >
                <button>ABOUT ME</button>
              </a>
              <button onClick={handleClose}></button>
              <a href="">
                <button>MY PROJECTS</button>
              </a>
              <a href="">
                <button>CONTACT</button>
              </a>
            </NavbarMenu>
          </Offcanvas>
        </div>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  .NavContainerDiv {
    width: 90%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    h2 {
      color: white;
      font-size: 40px;
      font-weight: 700;
      span {
        font-weight: 700;
        color: #522cef;
      }
    }
    button {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      border: none;
      background-color: #5500ff;
      position: sticky;
      right: 10;
      top: 10;
      i {
        font-size: 30px;
        margin-top: 5px;
        color: white;
      }
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 25px;
      }
      button {
        width: 40px;
        height: 40px;
        i {
          font-size: 20px;
        }
      }
    }
  }
  padding: 0.7rem;
  background-color: #05021c;
  height: 8vh;
`;


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