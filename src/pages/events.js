import React from "react";
import Events from "@/components/Events/Events";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";


const EventsPage = () => {
    return (
        <Layout PageTitle="Events">
            <PageHeader title='Events' />
            <Events />
        </Layout>
    );
};

export default EventsPage;
