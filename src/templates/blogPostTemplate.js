import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark: { frontmatter, html } } = data;
    
    return (
        <Layout>
            <SEO title={`${frontmatter.title} | Blog`}/>
            
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <time dateTime={frontmatter.date}>{frontmatter.formattedDate}</time>
                
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
                formattedDate: date(formatString: "DD MMMM, YYYY")
                path
                title
            }
        }
    }
`;

export default BlogPostTemplate;
