import React from 'react';
import Avatar from '../components/avatar';
import BlogPostList from '../components/blogPostList';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Index = () => (
    <Layout>
        <Seo title="Home"/>
        
        <div className="intro-box">
            <div className='avatar'>
                <Avatar/>
            </div>
            
            <p>
                Hi 👋🏾
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
