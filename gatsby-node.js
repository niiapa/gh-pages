/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    
    const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.js`);
    
    return graphql(`
        {
            allMarkdownRemark(sort: { frontmatter: { date: DESC }}, limit: 1000)  {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if(result.errors) {
            return Promise.reject(result.errors)
        }
        
        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {}
            })
        })
    });
};