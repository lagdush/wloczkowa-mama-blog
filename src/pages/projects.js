import React from 'react';
import { Layout } from '../components/Layout';
import Seo from '../components/HelmetSeo';
import { ProductList } from '../components/ProductList';

const Projects = () => {
  return (
    <Layout>
      <Seo title="Włóczkowa Mama Projekty" />
      <ProductList />
    </Layout>
  );
};

export default Projects;
