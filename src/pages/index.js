import * as React from 'react';
import { usePosts } from '../hooks/usePosts';

import Seo from '../components/seo';
import { Layout } from '../components/Layout';
import { ContentList } from '../components/ContentList';
import { MainArticle } from '../components/MainArticle';

const IndexPage = () => {
    const posts = usePosts();
    return (
        <Layout>
            <Seo />
            <MainArticle />
            <ContentList sectionTitle="Moje Posty" data={posts} />
        </Layout>
    );
};

export default IndexPage;
