import React from 'react';
import Avatar from '../components/avatar';
import Layout from '../components/layout';
import Seo from '../components/seo';

const tech = [
    'javascript',
    'typescript',
    'reactjs',
    'redux',
    'php',
    'laravel',
    'java',
    'sql',
];

const About = () => (
    <Layout>
        <Seo title="About"/>
        
        <div className='about'>
            <div className='center'>
                <div className='avatar'>
                    <Avatar/>
                </div>
                
                <h2>Nii Apa Abbey</h2>
                <small>Chief Technology Officer @ Chalkboard</small>
                <small>Principal Engineer @ Medtronic</small>
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
