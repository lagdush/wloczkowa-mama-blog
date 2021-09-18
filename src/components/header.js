import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Navigation } from './Navigation';

export const Header = ({ siteTitle }) => (
    <header className="flex flex-row items-center justify-between shadow-minimal bg-white px-5 lg:py-8 lg:px-16">
        <h1 className="font-normal">
            <Link to="/" className="text-primary text-4xl lg:text-6xl">
                Włóczkowa Mama
            </Link>
        </h1>
        <Navigation />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};
