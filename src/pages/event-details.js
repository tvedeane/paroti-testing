import React from "react";
import EventDetailsPage from "@/components/EventsDetailsPage/EventDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";



const page = () => {
    return (
        <Layout PageTitle="Event Details">
            <PageHeader title='Events Details' list='Events' />
            <EventDetailsPage />
        </Layout>
    );
};

export default page;
