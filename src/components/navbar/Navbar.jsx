import { Route, Routes, Link } from 'react-router-dom';
import './navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='navbarcomponent'> 
                <div className='nav-item'>
                    <HomeIcon sx={{ color: "rgb(115,123,147)", marginRight: "12px" }}/>
                    <Link to="/comparaison">Home</Link>
                </div>
                <div className='nav-item'>
                    <WbSunnyIcon sx={{ color: "rgb(115,123,147)", marginRight: "12px" }}/>
                    <Link to="/comparaison">Temperature</Link>
                </div>
                <div className='nav-item'>
                    <CloudQueueIcon sx={{ color: "rgb(115,123,147)", marginRight: "12px" }}/>
                    <Link to="/comparaison">Comparaison</Link>
                </div>
                <div className='nav-item'>
                    <WaterDropIcon sx={{ color: "rgb(115,123,147)", marginRight: "12px" }}/>
                    <Link to="/comparaison">humidité</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
