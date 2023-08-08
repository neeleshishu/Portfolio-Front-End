import './About.scss';
import main from '../../pics/side.png';

const About = () => {
    return(
        <>
        <h1>About</h1>
        <div className="about" id='about'>
        
        <div data-aos="fade-right" className="left">
            <img src={main} alt="main" />
        </div>
        <div data-aos="fade-left" className="right">
            

            <p className="heading">Here is a little more about me</p>
            <p className="breif">I'm <span>Neelesh</span>. I am Software Developer at GeeCom India PVT. LTD. And I am a Fullstack Developer who specializes in a frontend development using React Js, Angular Js as well as backend developer using Node Js with DataBase knowledge in MongoDb and Sql. Apart from development, I am a competitive programmer and I have a comprehensive understanding of C++ and Javascript and I am skilled in DSA and Core subjects like DBMS, OS and CN.</p>

            </div>
            </div>
        </>
    )
}

export default About;