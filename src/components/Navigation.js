import React from 'react';
import { Link } from 'gatsby';

const createNavigation = [
  { path: '/', name: 'Blog' },
  { path: '/about', name: 'O mnie' },
  { path: '/contact', name: 'Kontakt' },
  { path: '/projects', name: 'Projekty' },
];

export const Navigation = () => {
  return (
    <nav className="flex font-mono md:gap-x-8 xl:text-xl ">
      {createNavigation.map((nav, id) => (
        <Link
          to={nav.path}
          className="text-primary text-xl"
          key={`${nav.path}` + id}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};
