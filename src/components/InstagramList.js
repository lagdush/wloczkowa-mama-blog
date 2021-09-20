import React from 'react';
import { useInstagram } from '../hooks/useInstagram';
import { InstagramPreview } from './InstagramPreview';

export const InstagramList = () => {
  const instagram = useInstagram();
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="pt-14 pb-7 text-center xl:pb-10 xl:pt-16">Zajrzyj na mój Instagram</h2>
      <div className="grid gap-y-11 md:grid-cols-2 xl:gap-x-8 xl:gap-y-16">
        {instagram.map((image) => {
          const { permalink, localImage } = image.node;
          return (
            <InstagramPreview
              key={permalink}
              image={localImage}
              slug={permalink}
            />
          );
        })}
      </div>
    </section>
  );
};
//  return (
//      <InstagramPreview key={media_url} image={localImage.childImageSharp} slug={media_url} />
//  );
