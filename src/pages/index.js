import React from 'react';
import Avatar from '../components/avatar';
import BlogPostList from '../components/blogPostList';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = () => (
    <Layout>
        <SEO title="Home"/>
        
        <div className="intro-box">
            <div className='avatar'>
                <Avatar/>
            </div>
            
            Yo...
            
            <p>
                I'm Nii. I start shit with code and never see it through 🙃
            </p>
        </div>
        
        <div>
            <nav>
                <ul>
                    <li>
                        <span className='active-link'>Blog</span>
                    </li>
                </ul>
            </nav>
            <BlogPostList/>
        </div>
    </Layout>
);

export default Index;
