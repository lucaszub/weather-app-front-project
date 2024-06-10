import { Route, Routes, Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='Sidebar-container'>
            <div className='link-container'>
                <Link to="/comparaison">Home</Link>
            </div>
            <div className='link-container'>
                <Link to="/comparaison">Temperature</Link>
            </div>
            <div className='link-container'>
                <Link to="/comparaison">comparaison</Link>
            </div>
        </div>
    );
}

export default Sidebar;