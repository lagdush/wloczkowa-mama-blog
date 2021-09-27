import React from 'react';
import useMatchMedia from 'react-use-match-media';
import { Link } from 'gatsby';
import { Navigation, HamburgerMenu } from './Navigation';

export const Header = ({ shadow }) => {
  const isSmaller = useMatchMedia('(max-width: 812px)');
  return (
    <header
      className={`flex flex-row items-center justify-between ${
        shadow && 'shadow-lg'
      } bg-white px-5 pb-5 pt-6 xl:py-8 xl:px-16`}
    >
      {isSmaller ? <HamburgerMenu /> : <DesktopNav />}
    </header>
  );
};

export const DesktopNav = () => (
  <>
    <h1 className="font-normal">
      <Link
        to="/"
        className="text-primary text-xl hover:text-primary md:text-5xl xl:text-6xl"
      >
        Włóczkowa Mama
      </Link>
    </h1>
    <Navigation />
  </>
);
