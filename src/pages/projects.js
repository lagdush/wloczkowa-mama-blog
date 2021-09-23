import React from 'react';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import Seo from '../components/seo';
import { useProducts } from '../hooks/useProducts';

const Projects = () => {
  const products = useProducts();
  return (
    <Layout>
      <Seo />
      {products.map((product) => {
        const { productName, productPhoto, slug } = product.node;
        return (
          <ProductCard image={productPhoto} title={productName} slug={slug} />
        );
      })}
    </Layout>
  );
};

export default Projects;
