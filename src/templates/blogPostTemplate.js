import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import RatRacePauseMenu from '../components/ratRacePauseMenu/ratRacePauseMenu';

// Fun interactive components in blog posts
const extraComponents = {
    'ratRace': RatRacePauseMenu,
}

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const ExtraComponent = extraComponents[frontmatter?.component] ?? null;


    return (
        <Layout>
            <Seo title={`${frontmatter.title} | Blog`}/>
            
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <div className='meta'>
                    <time dateTime={frontmatter.date}>
                        {frontmatter.formattedDate}
                    </time>
                </div>


                {ExtraComponent ? <ExtraComponent /> : null}
                
                <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date
                formattedDate: date(formatString: "DD MMMM YYYY")
                path
                title
                component
            }
        }
    }
`;

export default BlogPostTemplate;
