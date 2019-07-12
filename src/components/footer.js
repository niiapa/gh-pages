import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const Footer = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        socials {
                            name
                            url
                        }
                    }
                }
            }
        `
    );
    
    return (
        <footer>
            <ul>
            {
                data.site.siteMetadata.socials.map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target='_blank' rel='noopener noreferrer'>
                            {social.name}
                        </a>
                    </li>
                ))
            }
            </ul>
        </footer>
    );
};

export default Footer;
