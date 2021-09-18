import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import { Layout } from '../components/Layout';

const IndexPage = () => (
    <Layout>
        <Seo />
        <h1>Hello World</h1>
    </Layout>
);

export default IndexPage;
