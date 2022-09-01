import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import About from './components/About';

function App() {

  useEffect(() => {
    Aos.init({
      duration:'1000'
    })
}, [])

  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <About/>
    </div>
    
  )
}


export default App

