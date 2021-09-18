import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const Header = ({ siteTitle }) => (
    <header className="flex flex-row items-center justify-between shadow-minimal bg-white px-5 lg:py-8 lg:px-16">
        <h1 className="font-normal">
            <Link to="/" className="text-primary text-4xl lg:text-6xl">
                Włóczkowa Mama
            </Link>
        </h1>
        <nav className="flex font-mono lg:text-xl lg:gap-x-8">
            <Link to="/" className="text-primary text-xl">
                Blog
            </Link>
            <Link to="/about" className="text-primary text-xl">
                O mnie
            </Link>
            <Link to="/contact" className="text-primary text-xl">
                Kontakt
            </Link>
            <Link to="/projects" className="text-primary text-xl">
                Projekty
            </Link>
        </nav>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};
