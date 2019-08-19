import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => {
    const links = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Projects',
            url: 'projects'
        },
        {
            name: 'Repositories',
            url: 'repositories'
        }
    ];
    
    return (
        <nav>
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.url} activeClassName='active-link'>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;
