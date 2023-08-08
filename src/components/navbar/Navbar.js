import './Navbar.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
    return(
        <>
            <header className="navbar">
                <div className="left">
                 <a href='https://www.instagram.com/thisisneelesh_/'><InstagramIcon style={{fontSize:"xx-large", color:"gray"}}/></a>
                 <a href='https://github.com/neeleshishu'><GitHubIcon style={{fontSize:"xx-large",  color:"gray"}}/></a>
                 <a href='https://www.linkedin.com/in/neelesh-tiwari-0451b621a/'><LinkedInIcon style={{fontSize:"xx-large",  color:"gray"}}/></a>
                </div>
                <div className="right">
                <a href='mailto:neeleshishu021@gmail.com'> <EmailIcon style={{fontSize:"xx-large",  color:"gray"}}/></a>
                </div>
            </header>
        </>
    )
}

export default Navbar;