import React from 'react';
import { Link } from 'gatsby';

export const Navigation = () => {
    return (
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
    );
};
