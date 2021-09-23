import { Link } from 'gatsby';
import * as React from 'react';
import { Layout } from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <h1 className="pb-12 text-secondary text-center text-4xl leading-relaxed md:text-7xl xl:text-8xl">
      Ups... coś poszło nie tak. Możesz jednak kliknąć niżej i wrócisz na stronę
      główną.
    </h1>

    <Link
      to="/"
      className="bg-transparent border-2 border-highlighted text-highlighted font-mono transition duration-500 ease-in-out px-10 py-5  hover:bg-highlighted hover:text-myWhite"
    >
      Powrót na stronę główną
    </Link>
  </Layout>
);

export default NotFoundPage;
