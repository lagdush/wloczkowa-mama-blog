import React from 'react';
import { useInstagram } from '../hooks/useInstagram';
import { InstagramPreview } from './InstagramPreview';

export const InstagramList = () => {
  const instagram = useInstagram();
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-full border-b-2 border-black xl:pt-20" />
      <h2 className="pt-14 pb-7 xl:pb-10 xl:pt-16">Co słychać na moim Instagramie</h2>
      <div className="grid gap-y-11 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-16">
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
