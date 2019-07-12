import React from 'react';
import Avatar from '../components/avatar';
import BlogPostList from '../components/blogPostList';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = () => (
    <Layout>
        <SEO title=""/>
        
        <div className="intro-box">
            <div className='avatar'>
                <Avatar/>
            </div>
            
            Hello...
            
            <p>
                I'm Nii Apa. A software engineer based out of Accra, Ghana and London, UK.<br />
                I will be posting my adventures, not only into code, on here...
            </p>
            
            Enjoy!
        </div>
        
        <div>
            <nav>
                <ul>
                    <li className='active-link'>Blog</li>
                </ul>
            </nav>
            <BlogPostList/>
        </div>
    </Layout>
);

export default Index;
