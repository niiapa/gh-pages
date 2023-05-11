import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Item from "../components/item";
import ExternalLink from "../components/externalLink";

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
            <Seo title="Repositories"/>
            
            <div className='list'>
            {
                list.map((repository, index) => (
                    <ExternalLink key={index} href={repository.url}>
                        <Item>
                            <h3>{repository.name}</h3>

                            <p>
                                {repository.description}
                            </p>

                            {
                                repository.tech.map((tech) => (
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

export default Repositories;
