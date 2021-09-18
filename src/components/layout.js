import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <div className="grid grid-rows-mainLayout grid-cols-columnHeightFull min-h-screen">
            <Header />
            <main className="h-full flex flex-col justify-center items-center pt-14 pb-20 px-5 lg:px-72 lg:pt-24 lg:pb-32">
                {children}
            </main>
            <Footer />
        </div>
    );
};
