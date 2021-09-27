import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout } from '../components/Layout/Layout';
import Seo from '../components/HelmetSeo';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export const query = graphql`
  query ($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      productDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
      productName
      slug
      productGallery {
        alt
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const { html } =
    data.datoCmsProject.productDescriptionNode.childMarkdownRemark;
  const { productName, productGallery } = data.datoCmsProject;
  return (
    <Layout>
      <Seo title={productName} />
      <section>
        <h1 className="text-center pb-6 xl:pb-20">{productName}</h1>

        <div className="flex justify-center flex-col items-center gap-y-10 pb-8">
          <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            showStatus={false}
            transitionTime={500}
            useKeyboardArrows
            showThumbs={false}
          >
            {productGallery.map((image) => {
              const postImage = getImage(image);
              return (
                <GatsbyImage
                  key={postImage + image.alt}
                  image={postImage}
                  alt={image.alt}
                  loading="eager"
                  objectFit="contain"
                />
              );
            })}
          </Carousel>
        </div>
        <article className="px-5">
          <div
            className="post xl:pt-14 xl:pb-16"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <section className="flex justify-center flex-col items-center">
            <p className="text-2xl font-medium">
              Zainteresował Cię ten produkt? Napisz do mnie
            </p>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name={productName}
              action="/thankyou/"
              className="flex flex-col gap-y-12 pt-12 w-full max-w-sm"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value={productName} />
              <Input placeholder="Twoje imię" aria="Imię" />
              <Input placeholder="Twój email" aria="Email" />
              <Input
                placeholder={productName}
                aria="Temat wiadomości"
                disabled
              />
              <Textarea />
              <button type="submit" className="mt-16">
                Wyślij
              </button>
            </form>
          </section>
        </article>
        <Link
          to="/projects"
          className="block mt-20 bg-transparent border-2 border-light text-primary font-mono transition duration-500 ease-in-out px-10 py-5 text-center
          bg-light hover:bg-highlighted hover:text-myWhite"
        >
          Zobacz też moje inne projekty
        </Link>
      </section>
    </Layout>
  );
};

export default ProductTemplate;
