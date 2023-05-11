import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Item from "../components/item";
import ExternalLink from "../components/externalLink";

const Projects = () => {
    const list = [
        {
            name: 'Oware',
            url: 'https://oware-js.web.app/',
            description: 'A two-player one-round game of the classic Ghanaian game, Oware',
            tech: [
                'react',
                'redux',
                'javascript',
                'firebase',
                'game',
                'multiplayer',
            ]
        },
        {
            name: 'DettySZN',
            url: 'https://dettyszn.com',
            description: 'A site to search and find events going on in the heart of Ghana, Accra.',
            tech: [
                'react',
                'javascript',
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
            <Seo title="Projects"/>

            <div className='list'>
            {
                list.map((project, index) => (
                    <ExternalLink key={index} href={project.url}>
                        <Item>
                            <h3>{project.name}</h3>

                            <p>
                                {project.description}
                            </p>

                            {
                                project.tech.map((tech) => (
                                    <div key={tech} className='meta'>{tech}</div>
                                ))
                            }
                        </Item>
                    </ExternalLink>
                ))
            }
            </div>
        </Layout>
    );
};

export default Projects;
