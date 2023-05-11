import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import Item from "./item";

const BlogPostList = () => {
    const { allMarkdownRemark: { edges } } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: { frontmatter: { date: DESC }}, limit: 1000) {
                    edges {
                        node {
                            id
                            excerpt(pruneLength: 250)
                            frontmatter {
                                date
                                formattedDate: date(formatString: "DD MMMM YYYY")
                                path
                                title
                            }
                        }
                    }
                }
            }
        `
    );

    const getPostFromEdge = (edge) => edge?.node?.frontmatter;
    const getExcerptFromEdge = (edge) => edge?.node?.excerpt;
    const getPostsWithExcerptsFromEdges = (condition) => edges.reduce((posts, edge) => {
        const post = getPostFromEdge(edge);
        const excerpt = getExcerptFromEdge(edge);

        if (condition && condition(post)) {
            return [...posts , { ...post, excerpt }];
        }

        return posts;
    }, []);

    const unpinnedBlogPostEdges = getPostsWithExcerptsFromEdges((post) => !post.isPinned);
    const pinnedBlogPostEdges = getPostsWithExcerptsFromEdges((post) => post.isPinned);

    const renderPost = ({ path, title, excerpt, date, formattedDate }) => (
        <Link
            key={path}
            to={path}
            className='unstyled-link'
        >
            <Item>
                <h3>{title}</h3>

                <p>{excerpt}</p>

                <div className='meta'>
                    <time dateTime={date}>{formattedDate}</time>
                </div>
            </Item>
        </Link>
    );
    
    return (
        <div className='list'>
            {pinnedBlogPostEdges.map(renderPost)}
            {unpinnedBlogPostEdges.map(renderPost)}
        </div>
    );
};

export default BlogPostList;
