import React from 'react';
import Avatar from '../components/avatar';
import Layout from '../components/layout';
import SEO from '../components/seo';

const tech = [
    'javascript',
    'reactjs',
    'vuejs',
    'redux',
    'graphql',
    'firebase',
    'php',
    'laravel',
    'java',
    'mysql'
];

const About = () => (
    <Layout>
        <SEO title="About"/>
        
        <div className='about'>
            <div className='center'>
                <div className='avatar'>
                    <Avatar/>
                </div>
                
                <h2>Nii Apa Abbey</h2>
                <small>Software Engineer</small>
                <small>LDN | ACC</small>
                
                <div style={{ display: 'flex',  flexWrap: 'wrap', flex: 1, justifyContent: 'center'}}>
                    {
                        tech.map((tech, index) => (
                            <span key={index} className='meta'>{tech}</span>
                        ))
                    }
                </div>
            </div>
            
        </div>
    </Layout>
);

export default About;
