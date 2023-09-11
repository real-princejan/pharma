import React from 'react'

import {Helmet} from "react-helmet";

// Components
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
    </Helmet>

    <Header />
    <main style={{minHeight:'100vh'}}>
      {children}
    </main>
    <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: 'Pharma - Shop now',
  description: 'Capstone Project',
  keywords: 'mern, react, node, express',
  author: 'Group 10',
};
  
export default Layout