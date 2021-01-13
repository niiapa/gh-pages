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
                'material-ui',
                'ssr',
                'next-js'
            ]
        },
        {
            name: 'Off The Top',
            url: 'https://www.youtube.com/watch?v=yFquihunvD8&list=PLghl8oTc1E6JLwCU-jW205gfxNroL3dDN',
            description: 'A Ghanaian Youtube trivia show based around a select cast with a cocktail of personalities created by my friend, Joseph Nti.',
            tech: [
                'youtube'
            ]
        }
    ];
    
    return (
        <Layout>
            <SEO title="Projects"/>
            
            <div className='list'>
            {
                list.map((project, index) => (
                    <a key={index} className='item' href={project.url} target='_blank'  rel='noopener noreferrer'>
                        <div>
                            <h3>{project.name}</h3>

                            <p>
                                {project.description}
                            </p>

                            {
                                project.tech.map((tech) => (
                                    <div key={tech} className='meta'>{tech}</div>
                                ))
                            }
                        </div>
                    </a>
                ))
            }
            </div>
        </Layout>
    );
};

export default Projects;
