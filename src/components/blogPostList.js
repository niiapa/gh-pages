import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';

const BlogPostList = () => {
    const { allMarkdownRemark: { edges } } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    sort: {
                        order: DESC,
                        fields: [frontmatter___date]
                    }
                ) {
                    edges {
                        node {
                            id
                            excerpt(pruneLength: 250)
                            frontmatter {
                                date
                                formattedDate: date(formatString: "DD MMMM, YYYY")
                                path
                                title
                            }
                        }
                    }
                }
            }
        `
    );
    
    return (
        <div className='blog-post-list'>
            {
                edges.map((edge, index) => {
                    const post = edge.node.frontmatter;
                    
                    return (
                        <Link key={index} to={post.path} className='item'>
                            <p>
                                <h3>
                                    {post.title}
                                </h3>
                
                                <p>
                                    {edge.node.excerpt}
                                </p>
                
                                <div className='meta'>
                                    <time dateTime={post.date}>
                                        {post.formattedDate}
                                    </time>
                                </div>
                            </p>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default BlogPostList;
