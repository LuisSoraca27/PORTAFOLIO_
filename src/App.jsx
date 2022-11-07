import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import About from './components/About';
import MySkills from './components/MySkills';
import Myprojects from './components/Myprojects';
import Contact from './components/Contact';
import NavBarMenu from './components/NavBarMenu';
import { useState } from 'react';
import styled from 'styled-components';

function App() {

  useEffect(() => {
    Aos.init({
      duration:'1000'
    })
}, [])

const [active, setActive] = useState(true)

const changeActive = () => setActive(!active)

  return (
    <div className="App">
      <ButtonMenu onClick={changeActive} >
            <i className="fa-solid fa-bars"></i>
          </ButtonMenu>
     <NavBarMenu active={active} changeActive={changeActive} />
     <Home changeActive={changeActive}/>
     <About/>
     <MySkills/>
     <Myprojects/>
     <Contact/>
    </div>
    
  )
}


export default App

const ButtonMenu = styled.button`
  width: 55px;
      height: 55px;
      border-radius: 50%;
      border: none;
      background-color: #5500ff;
      position: fixed;
      top: 15px;
      right: 25px;
      z-index: 990;
      i {
        font-size: 30px;
        margin-top: 5px;
        color: white;
      }

      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        top: 15px;
        right: 20px;
        i {
          font-size: 20px;
        }
      }
  
`
