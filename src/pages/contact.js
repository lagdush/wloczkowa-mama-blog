import React from 'react';
import { Layout } from '../components/Layout';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';

const Contact = () => {
  return (
    <Layout>
      <section className="flex flex-col gap-y-8 justify-center items-center">
        <h2>Napisz do mnie</h2>
        <form className="flex - flex-col gap-y-12 pt-12 w-full max-w-sm">
          <Input placeholder="Twoje imię" aria="Imię" />
          <Input placeholder="Twój email" aria="Email" />
          <Textarea />
          <button className="mt-16 xl:ml-8">Wyślij</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
