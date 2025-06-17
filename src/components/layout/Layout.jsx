// Layout.jsx
import React from 'react';
import { Header } from '../header/Header.jsx';
import { Footer } from '../footer/Footer.jsx';

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='section--initial wrapper'>
                
                
            </main>
            <Footer />
        </>
    );
}

export default Layout;
