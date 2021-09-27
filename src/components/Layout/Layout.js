import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout = ({ children }) => {
  const [hasShadow, setHasShadow] = useState(false);
  return (
    <div className="grid grid-rows-mainLayout grid-cols-columnHeightFull min-h-screen">
      <Headroom
        className="z-50 h-20"
        onPin={() => setHasShadow(true)}
        onUnfix={() => setHasShadow(false)}
      >
        <Header shadow={hasShadow} />
      </Headroom>
      <main className="h-full flex flex-col justify-center items-center pt-14 pb-20 px-5 xl:px-72 xl:pt-24 xl:pb-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};
