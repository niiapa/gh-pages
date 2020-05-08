import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Repositories = () => {
    const list = [
        {
            name: 'react-typescript-starter',
            url: 'https://github.com/niiapa/react-typescript-starter',
            description: 'Quick starter template for ReactJS applications using Typescript',
            tech: [
                'react-js',
                'typescript'
            ]
        }
    ];
    
    return (
        <Layout>
            <SEO title="Repositories"/>
            
            <div className='list'>
            {
                list.map((repository, index) => (
                    <a key={index} className='item' href={repository.url} target='_blank'  rel='noopener noreferrer'>
                        <div>
                            <h3>{repository.name}</h3>

                            <p>
                                {repository.description}
                            </p>

                            {
                                repository.tech.map((tech) => (
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

export default Repositories;
