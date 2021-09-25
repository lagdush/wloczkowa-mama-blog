import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const products = useProducts();
  return (
    <>
      {products.map((product) => {
        const { productName, productPhoto, slug } = product.node;
        return (
          <ProductCard
            key={productName + slug}
            image={productPhoto}
            title={productName}
            slug={slug}
          />
        );
      })}
    </>
  );
};
