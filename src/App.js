import './App.css';
import Project from './components/Project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Hero from './components/herosection/Hero';
import Skills from './components/skills/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  return (
    <>
    <div className='mainblock'>
     
      <Hero/>
      <About/>
      <Skills/>
      {/* <Experience/> */}
      <Project/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
