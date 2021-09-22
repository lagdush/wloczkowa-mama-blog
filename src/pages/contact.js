import React from 'react';
import { Layout } from '../components/Layout';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';

const Contact = () => {
  return (
    <Layout>
      <section className="flex flex-col gap-y-8 justify-center items-center bg-gray-100 p-20">
        <h2>Napisz do mnie</h2>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          className="flex flex-col gap-y-12 pt-12 w-full max-w-sm"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <Input placeholder="Twoje imię" aria="Imię" />
          <Input placeholder="Twój email" aria="Email" />
          <Textarea />
          <button className="mt-16">Wyślij</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;