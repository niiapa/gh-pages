import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import Item from "./item";

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
        <div className='list'>
            {
                edges.map((edge, index) => {
                    const post = edge.node.frontmatter;
                    
                    return (
                        <Link
                            key={index}
                            to={post.path}
                            className='unstyled-link'
                        >
                            <Item>
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
                            </Item>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default BlogPostList;
