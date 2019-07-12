import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = () => {
    const list = [
        {
            name: 'DettySZN',
            url: 'https://dettyszn.com',
            description: 'A site to search and find events going on in the heart of Ghana, Accra.',
            tech: [
                'react-js',
                'firebase',
                'semantic-ui'
            ]
        }
    ];
    
    return (
        <Layout>
            <SEO title="Projects"/>
            
            {
                list.map((project, index) => (
                    <a key={index} className='project' href={project.url} target='_blank'  rel='noopener noreferrer'>
                        <h3>{project.name}</h3>
                        
                        <p>
                            {project.description}
                        </p>
                        
                        {
                            project.tech.map((tech) => (
                                <small key={tech}>{tech}</small>
                            ))
                        }
                    </a>
                ))
            }
        </Layout>
    );
};

export default Projects;
