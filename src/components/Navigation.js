import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const createNavigation = [
  { path: '/', name: 'Blog' },
  { path: '/about', name: 'O mnie' },
  { path: '/contact', name: 'Kontakt' },
  { path: '/projects', name: 'Projekty' },
];

export const Navigation = ({ handler }) => {
  return (
    <nav
      className="flex flex-col font-mono text-center justify-around h-4/6 animate-showMenu md:gap-x-8 lg:flex-row xl:text-xl "
      onClick={handler}
    >
      {createNavigation.map((nav, id) => (
        <Link
          to={nav.path}
          className="text-primary text-xl"
          activeClassName="text-highlighted"
          key={`${nav.path}` + id}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};

const HamburgerIco = ({ openMenu, isOpen }) => {
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const openMenuHandler = () => {
    openMenu();
  };
  return (
    <button
      className="flex flex-col h-10 w-10 border-2 bg-transparent border-none justify-center items-center group p-0"
      onClick={openMenuHandler}
    >
      <div
        className={`${hamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-80 group-hover:opacity-100'
            : 'opacity-80 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${hamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${hamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-80 group-hover:opacity-100'
            : 'opacity-80 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export const HamburgerMenu = () => {
  const [menu, showMenu] = useState(false);

  const openCloseMenu = () => {
    showMenu(!menu);
  };

  useEffect(() => {
    menu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  });
  return (
    <div className="w-screen">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          onCLick={() => {
            showMenu(false);
          }}
          className="text-2xl hover:text-primary"
        >
          Włóczkowa mama
        </Link>

        <HamburgerIco isOpen={menu} openMenu={openCloseMenu} />
      </div>

      {menu && (
        <div className="h-screen">
          <Navigation handler={openCloseMenu} />
        </div>
      )}
    </div>
  );
};
