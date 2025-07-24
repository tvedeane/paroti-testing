import React from 'react';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import BlogDetailsPage from '@/components/BlogDetailsPage/BlogDetailsPage';

const DetailsBlog = () => {
    return (
        <Layout PageTitle="Blog Post">
            <PageHeader title='Blog post' list='Blog' />
            <BlogDetailsPage />
        </Layout>
    );
};

export default DetailsBlog;