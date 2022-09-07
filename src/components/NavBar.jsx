import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import NavBarMenu from './NavBarMenu';


const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <NavContainer>
                <div className="NavContainerDiv"  data-aos="fade-down">
                    <h2> Luis<span>Soracá</span>.Dev</h2>
                    <button onClick={handleShow}>
                    <i className="fa-solid fa-bars"></i>
                    </button>
                    <NavBarMenu show={show} handleClose={handleClose} />
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

@media(max-width: 768px) {
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
    
`