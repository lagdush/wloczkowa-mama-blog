import React from 'react';
import { Link } from 'gatsby';
import { Navigation } from './Navigation';

export const Header = () => (
    <header className="flex flex-row items-center justify-between shadow-minimal bg-white px-5 pb-5 pt-6 lg:py-8 lg:px-16">
        <h1 className="font-normal">
            <Link
                to="/"
                className="text-primary text-xl hover:text-primary lg:text-6xl"
            >
                Włóczkowa Mama
            </Link>
        </h1>
        <Navigation />
    </header>
);
