import * as React from 'react';

import Seo from '../components/seo';
import { Layout } from '../components/Layout';
import { ContentList } from '../components/ContentList';
import { MainArticle } from '../components/MainArticle';
import { InstagramList } from '../components/InstagramList';

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <MainArticle />
      <ContentList />
      <InstagramList />
    </Layout>
  );
};

export default IndexPage;
