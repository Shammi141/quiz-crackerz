import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <p className='title'>Quiz Station</p>
            <div className='nav-link'>
                <Link to = '/topics'>Topics</Link>
                <Link to = '/statistics'>Statistics</Link>
                <Link to = '/blogs'>Blogs</Link>
            </div>
        </nav>
        
    );
};

export default Header;