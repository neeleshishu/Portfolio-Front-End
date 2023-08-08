import './Hero.scss';
import Typed from 'react-typed';
import pic1 from '../../pics/main.png';
import Navbar from '../navbar/Navbar';

import DataObjectIcon from '@mui/icons-material/DataObject';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EngineeringIcon from '@mui/icons-material/Engineering';



const Hero = () => {
    return(
       <section className="herosection">
        <Navbar/>

<section className='circle'>
       <div className='big'></div>
       <div className='mmed'></div>
       <div className='med'></div>
       <div className='msmall'></div>
       <div className='small'></div>
       <div className='vsmall'></div>
       </section>

<div className='details'>
        <img src={pic1} alt="main" />
        <p className='software'>Software Engineer</p>
        
                   <Typed  style={{color:"white", fontSize:"xx-large"}}  
                     strings={["Hi, I'm Neelesh Tiwari",
                    'Mern Developer',
                    'CompetetiveProgrammer/'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                </div>
                
                <div className="navba">
                <ul className='nav'>
                    <a href='#about'><li className="buttons">About</li></a>
                    <a href='#skills'><li className="buttons">Skills</li></a>
                    <a href='#project'><li className="buttons">Projects</li></a>
                    <a href='experience'><li className="buttons">Experince</li></a>
                </ul>
            </div>

            <div className='imgCon'>
            

            <button className='b1' variant='contained'><DataObjectIcon className='s1' fontSize='small' /> Coder</button>
            <button className='b2' variant='contained'><ArrowBackIosIcon style={{ fontSize: "18px" }} className='s2' fontSize='small' />Developer<ArrowForwardIosIcon style={{ fontSize: "18px" }} fontSize='small' /> </button>
            <button className='b4' variant='contained'> <span className='s3'>🚀</span> Unstoppable </button>
            <button className='b5' variant='contained'><EngineeringIcon /> Engineer</button>
            <button className='b6' variant='contained'> <span className='s'>👋</span> Hi there!</button>

          </div>

       </section>
    )
}

export default Hero;