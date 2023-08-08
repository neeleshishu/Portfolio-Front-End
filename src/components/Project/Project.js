import './Project.scss';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DiamondIcon from '@mui/icons-material/Diamond';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PortraitIcon from '@mui/icons-material/Portrait';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Project = () => {
    return(
        <>

  <section class="sections section-services" id='project'>
    <div class="container">
      <h1 class="common-heading">Projects</h1>
      
    </div>
 <div class="grid grid-three-column">

 <div class="service-box">
 <a href='https://neelesh-social-media-website.netlify.app/'>
      <ConnectWithoutContactIcon style={{fontSize:"7rem", color:"gray"}}/>
      <h3>Social Media Website</h3>
      <p>
       Social Media website like Facebook, Instagram which is built by using React js and pure CSS with SCSS framework.
      </p>
      </a>
    </div>

   

    <div class="service-box">
    <a href='https://neeleshishu.github.io/Jewellery-Store/'>
      <DiamondIcon style={{fontSize:"7rem", color:"gray"}}/>
      <h3>Jwellery Store Website</h3>
      <p>
        This Jwellery Store Website is build by using Recat js and Bootstrap framework.
      </p>
      </a>
    </div>

    <div class="service-box">
      <PortraitIcon style={{fontSize:"7rem", color:"gray"}}/>
      <h3>Portfolio</h3>
      <p>
        This Portfolio which you are currently watching is made by React js and with pure CSS and with using Scss framework.
      </p>
    </div>

    <div class="service-box">
    <a href='https://github.com/neeleshishu/Weather-Tracker'>
      <WbSunnyIcon style={{fontSize:"7rem", color:"gray"}}/>
      <h3>Weather Tracker</h3>
      <p>
        This Weather Tracker Website gives you a live Weather of the city which you want to see by just search it and it works using api and this website is made by Node js and pure CSS and javascript.
      </p>
      </a>
    </div>

    <div class="service-box">
    <a href='https://github.com/neeleshishu/Supermarket-Billing-Project'>
      <LocalGroceryStoreIcon style={{fontSize:"7rem", color:"gray"}}/>
      <h3>Super Market Billing Project</h3>
      <p>
      This supermarket billing system is a console application built in C++ without the use of graphics.
      </p>
      </a>
    </div>

    <div class="service-box">
    <a href='https://neeleshishu.github.io/Live_Cricket_Score/'>
      <SportsCricketIcon style={{fontSize:"7rem", color:"gray"}}/>
      <h3>Live Cricket Score</h3>
      <p>
        This webapp gives the live score of a live cricket match using an api and this webapp is build by using HTML, CSS, Javascript.
      </p>
      </a>
    </div>

    
  </div>
</section>
        </>
    )
}

export default Project;