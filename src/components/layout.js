/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types';
import React from 'react';
import '../styles/style.scss';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
    
    return (
        <React.Fragment>
            <div className="container">
                <Navbar />
                
                <main>
                    {children}
                </main>
                
                <Footer/>
            </div>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
