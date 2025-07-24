import React from "react";
import BlogPage from "@/components/BlogPage/BlogPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";


const Blog = () => {
    return (
        <Layout PageTitle="Blog">
            <PageHeader title='Blog Page' list='Blog' />
            <BlogPage />
        </Layout>
    );
};

export default Blog;
