import * as React from 'react';

import Seo from '../components/HelmetSeo';
import { Layout } from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => (
  <Layout>
    <Seo title="Włóczkowa Mama - O mnie" />
    <section className="flex flex-col justify-center items-center gap-y-8 lg:grid lg:grid-flow-col lg:auto-cols-min lg:gap-x-28">
      <StaticImage
        className="lg:w-60 md:h-full xl:w-aboutWidth"
        src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        alt="smoe text"
      />
      <article className="flex flex-col justify-center items-center gap-y-32 xl:gap-y-44">
        <p className="text-secondary text-4xl leading-relaxed md:text-7xl xl:text-8xl">
          Cześć, jestem <span className="font-serif text-primary">Karo</span>{' '}
          <br /> Mama,<span className="font-serif text-primary"> Artystka</span>
          , Żona, Spaceroholiczka, Nauczycielka muzyki,{' '}
          <span className="font-serif text-primary">Blogerka</span>, Miłośnica
          kotów zakochana w zachodach słońca,{' '}
          <span className="font-serif text-primary">Szydełkomaniaczka</span>
        </p>
        <p className="font-serif text-justify px-10 leading-loose xl:pr-96 lg:leading-10">
          Jestem szczęśliwą żoną Łukasza i mamą Mikołajka. Od dzieciństwa moją
          pasją, była muzyka. Choroba krtani na pół roku uniemożliwiła mi
          realizację mojej pasji. Zaczęłam się zastanawiać, gdzie ulokować moją
          energię. I nagle zrodził się pomysł:{' '}
          <em className="text-primary font-normal">
            A może by się tak zająć szydełkowaniem?
          </em>{' '}
          Łukasz i Mikołajek mocno uwierzyli w mój pomysł. Ich pierwsze słowa
          to: <em className="text-primary font-normal">mega pomysł</em>,{' '}
          <em className="text-primary font-normal">musi się udać</em>. I mieli
          rację.
          <strong className="text-primary"> Udało się!</strong> Taka oto jest
          historia powstania Włóczkowej Mamy. Zapraszam Cię do pozostania u mnie
          na dłużej.
          <span className="block pt-10">
            Bardzo się cieszę, że udało Ci się do mnie trafić!
          </span>
        </p>
      </article>
    </section>
  </Layout>
);

export default About;
